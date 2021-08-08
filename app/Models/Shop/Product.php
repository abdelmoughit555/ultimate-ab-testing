<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'uuid',
        'shop_id',
        'shopify_product_id',
        'image',
    ];

    public function shop()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return product
     */
    public function shopifyProduct()
    {
        return $this->shop->api()->rest('GET', "/admin/api/products/{$this->shopify_product_id}.json")["body"]["product"];
    }

    /**
     * @return variants
     */
    public function shopifyVariants()
    {
        return $this->shop->api()->rest('GET', "/admin/api/products/{$this->shopify_product_id}/variants.json")['body']['variants'];
    }

    /**
     * @return count
     */
    public function shopifyVariantsCount()
    {
        return $this->shop->api()->rest('GET', "/admin/api/products/{$this->shopify_product_id}/variants.json")['body'];
    }

    /**
     * @param $variant
     * @return variant
     */
    public function generateSimilarVariant($variant)
    {
        $newVariant = $this->shop->api()->rest('POST', "/admin/api/products/{$this->shopify_product_id}/variants.json", [
            "variant" => $this->adjustVariant($variant['container'])
        ])['body']['variant'];

        $locationId = $this->getProductLocationId($variant->inventory_item_id);

        $adjustProductQuantity = $this->adjustProductQuantity($locationId, $variant->inventory_quantity, $newVariant->inventory_item_id);

        return $newVariant;
    }

    /**
     * @param locationId of variant
     * @param inventoryQuantity of variant
     * @param inventoryItemId of variant
     */
    public function adjustProductQuantity($locationId, $inventoryQuantity, $inventoryItemId)
    {
        $this->shop->api()->rest(
            'POST',
            "/admin/api/inventory_levels/adjust.json",
            [
                'location_id' => $locationId,
                'available_adjustment' => $inventoryQuantity,
                'inventory_item_id' => $inventoryItemId
            ]
        );
    }

    /**
     * @param inventory_item_id of a variant
     * @return location_id
     */
    public function getProductLocationId($inventory_item_id)
    {
        return $this->shop->api()->rest('GET', "/admin/api/inventory_levels.json", [
            'inventory_item_ids' => $inventory_item_id
        ])['body']['inventory_levels'][0]['location_id'];
    }

    public function adjustVariant($variant)
    {
        unset($variant['inventory_quantity']);
        unset($variant['old_inventory_quantity']);
        unset($variant['inventory_item_id']);
        $variant['option1'] = $variant['option1'] . '.';
        $variant['price'] = '2000';

        return $variant;
    }

    public function generateSimpleVariant()
    {
    }
}
