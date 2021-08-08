<?php

namespace App\Models\Shop;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\LazyCollection;
use Osiset\ShopifyApp\Contracts\ShopModel as IShopModel;
use Osiset\ShopifyApp\Traits\ShopModel;
use Illuminate\Support\Str;

class User extends Authenticatable implements IShopModel
{
    use HasFactory, Notifiable, ShopModel;

    const PER_PAGE = 250;

    public $page_info;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'import_product_at',
        'shop_owner',
        'currency',
        'country',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'shop_id');
    }

    public function countProducts()
    {
        return $this->api()->rest('GET', '/admin/products/count.json')['body']['count'];
    }

    public function getProducts(array $params = [])
    {
        return $this->api()->rest('GET', '/admin/api/products.json', $params);
    }

    public function storeProduct($product)
    {
        $this->products()->create([
            'uuid' => Str::uuid(),
            'title' => $product['title'],
            'shopify_product_id' => $product['id'],
            'image' => $product['image'] ? $product['image']['src'] : '',
        ]);
    }

    public function lazilyMakeProducts($products)
    {
        LazyCollection::make($products)->each(function ($product) {
            $this->storeProduct($product);
        });
    }

    public function importatedAt()
    {
        $this->update([
            'imported_product_at' => Carbon::now()
        ]);
    }

    public function importProducts($productCount)
    {
        $currentCount = $productCount;

        $perPage = User::PER_PAGE;

        $params = ['fields' => 'id,image,title'];
        if ($this->page_info) {
            $params = $params + ['page_info' => $this->page_info];
        }

        if ($currentCount > $perPage) {
            $currentCount = $currentCount - $perPage;

            $params = $params + ['limit' => $perPage];


            $products = $this->getProducts($params);

            $headers = $products['response']->getHeaders();

            if (isset($headers['Link'][0])) {
                $links = explode(',', $headers['Link'][0]);
                foreach ($links as $link) {
                    if (strpos($link, 'rel="next"')) {
                        preg_match('~<(.*?)>~', $link, $next);
                        $url_components = parse_url($next[1]);
                        parse_str($url_components['query'], $params);
                        $this->page_info = $params['page_info'];
                    }
                }
            }

            $this->lazilyMakeProducts($products['body']['products']);

            $this->importProducts($currentCount);
        } else {
            $params = $params + ['limit' => $currentCount];

            $products = $this->getProducts($params);

            $this->lazilyMakeProducts($products['body']['products']);
        }
        $this->importatedAt();
    }
}
