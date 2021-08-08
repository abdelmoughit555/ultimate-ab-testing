<?php

namespace App\Models\Shop\Expirement\ExpirementSession;

use App\Models\Shop\Expirement\Expirement;
use App\Models\Shop\Expirement\ExpirementType;
use App\Models\Shop\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ExpirementSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'status', 'price', 'price_min', 'price_max', 'price_varies', 'compare_at_price', 'type', 'compare_at_price_min', 'compare_at_price_max', 'compare_at_price_varies', 'options', 'dlmap', 'vids', 'v2v', 'v2o', 'v2pr', 'v2cmp', 'ab', 'slug', 'dp_v0', 'dp_v1', 'cmp_v0', 'cmp_v1', 'is_increase', 'product_shopify', 'v2p'
    ];

    protected $casts = [
        'options' => 'array',
        'dlmap' => 'array',
        'vids' => 'array',
        'v2v' => 'array',
        'v2o' => 'array',
        'v2pr' => 'array',
        'v2cmp' => 'array',
        'v2p' => 'array',
        'product_shopify' => 'array'
    ];

    public function expirements()
    {
        return $this->morphMany(Expirement::class, 'expirementable');
    }

    public function variantSessions()
    {
        return $this->hasMany(VariantSession::class);
    }

    /**
     * Generate Expirement based on expirement Session
     * @param Product $product
     * @return Expirement $expirement
     */
    public function generateExpirement(Product $product, $featureImage)
    {
        return $this->expirements()->create([
            'title' => 'here',
            'product_id' => $product->id,
            'shop_id' => auth()->id(),
            'uuid' => Str::uuid(),
            'status' => Expirement::PENDING,
            'featured_image' => $featureImage,
            'expirement_type_id' => ExpirementType::whereName('expirement by sessions')->first()->id
        ]);
    }

    /**
     * Store shopify variant based on expirement Session
     * @param variant
     * @param $isNewlyCreated
     * @return VariantSession $variantSession
     */
    public function presistVariantSession($variant, $isNewlyCreated = true, $productTitle, $featureImage)
    {
        $options = [
            "option1" => $variant->option1,
            "option2" => $variant->option2,
            "option3" => $variant->option2,
        ];
        return $this->variantSessions()->create([
            "uuid" => Str::uuid(),
            "variant_title" => $variant->title,
            "product_shopify_id" => $variant->product_id,
            "variant_id" => $variant->id,
            "price" => $variant->price,
            "is_newly_created" => $isNewlyCreated,
            "options" => array_filter($options),
            'variant_shopify' => [
                'id' => $variant->id,
                'title' => $variant->title,
                'option1' => $variant->option1,
                'option2' => $variant->option2,
                'option3' => $variant->option3,
                'sku' => $variant->sku,
                'requires_shipping' => $variant->requires_shipping,
                'taxable' => $variant->taxable,
                'featured_image' => $featureImage,
                'available' => true,
                'name' => $productTitle . ' - ' . $variant->title,
                'public_title' => $variant->title,
                'options' => array_filter([
                    $variant->option1,
                    $variant->option2,
                    $variant->option3,
                ]),
                'price' => $variant->price,
                'weight' => $variant->weight,
                'compare_at_price' => $variant->compare_at_price,
                'inventory_management' => $variant->inventory_management,
                'barcode' => $variant->barcode,
            ]
        ]);
    }

    /**
     * Update expirement Session columns
     * @return ExpirementSession $expirementSession
     */

    public function processVariantsVariable()
    {
        $variantsSessions = $this->variantSessions;
        $variantSessionNew = $variantsSessions->where('is_newly_created', true)->first();
        $variantSessionOld = $variantsSessions->where('is_newly_created', false)->first();
        //options
        $option1 = $variantsSessions->pluck('options.option1');
        $option1v0 =
            $variantsSessions->where('is_newly_created', false)->pluck('options.option1');
        $option1v1 =
            $variantsSessions->where('is_newly_created', true)->pluck('options.option1');

        $this->options = [
            'all' => $option1,
            'v0' => $option1v0,
            'v1' => $option1v1
        ];

        //dlmap
        $dlmap = [];
        foreach ($option1v0 as $key => $value) {
            $dlmap[$value] = $option1v1[$key];
        }

        $this->dlmap = $dlmap;

        //vids
        $vidsAll = $variantsSessions->pluck('variant_id');
        $vidsv0 = $variantsSessions->where('is_newly_created', false)->pluck('variant_id');
        $vidsv1
            = $variantsSessions->where('is_newly_created', true)->pluck('variant_id');

        $this->vids = [
            'all' => $vidsAll,
            'v0' => $vidsv0,
            'v1' => $vidsv1,
        ];

        //v2v
        $v2v1 = [];
        $v2v2 = [];
        foreach ($vidsv0 as $key => $value) {
            $v2v1[$value] = $vidsv1[$key];
        }
        foreach ($vidsv1 as $key => $value) {
            $v2v2[$value] = $vidsv0[$key];
        }

        $this->v2v = $v2v1 + $v2v2;

        //v2o
        $this->v2o = $variantsSessions->pluck('options.option1', 'variant_id')->toArray();

        //v2pr
        $this->v2pr = $variantsSessions->pluck('price', 'variant_id')->toArray();

        $this->dp_v0 = $variantSessionOld->first()->price;
        $this->dp_v1 = $variantSessionNew->first()->price;
        $this->cmp_v0 = $variantSessionOld->first()->compare_price_at;
        $this->cmp_v1 = $variantSessionNew->first()->compare_price_at;

        $v2p = [];
        foreach ($vidsAll as $vid) {
            $v2p[$vid] = $variantSessionNew->product_shopify_id;
        }
        $this->v2p = $v2p;

        return $this->save();
    }
}
