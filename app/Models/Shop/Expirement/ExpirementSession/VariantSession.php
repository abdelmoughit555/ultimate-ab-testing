<?php

namespace App\Models\Shop\Expirement\ExpirementSession;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VariantSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid', 'variant_title', 'variant_id', 'price', 'is_newly_created', 'expirement_session_id', 'options', 'product_shopify_id', 'variant_shopify'
    ];

    protected $casts = [
        'options' => 'array',
        'variant_shopify' => 'array'
    ];
}
