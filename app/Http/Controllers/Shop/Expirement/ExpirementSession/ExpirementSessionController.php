<?php

namespace App\Http\Controllers\Shop\Expirement\ExpirementSession;

use App\Http\Controllers\Controller;
use App\Models\Shop\Expirement\Expirement;
use App\Models\Shop\Expirement\ExpirementSession\ExpirementSession;
use App\Models\Shop\Expirement\ExpirementType;
use App\Models\Shop\Product;
use App\Models\Shop\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ExpirementSessionController extends Controller
{
    public function store(Request $request)
    {
        /*         $expirementSession = ExpirementSession::first();
        $expirementSession->processVariantsVariable(); */
        return DB::transaction(
            function () use ($request) {
                $product = auth()->user()->products()->first();
                $productShopify = $product->shopifyProduct();
                $productShopifyPrice = collect($productShopify->variants['container'])->pluck('price');
                $productShopiftCompareAtPrice = collect($productShopify->variants['container'])->pluck('compare_at_price');
                $featureImage = collect($productShopify->images)->where('position', 1)->first()['src'];

                //generate expirement session
                $expirementSession = ExpirementSession::create([
                    'title' => $request->title,
                    'status' => Expirement::PENDING,
                    'price' => $pmax = $productShopifyPrice->max(),
                    'price_min' => $pmin =  $productShopifyPrice->min(),
                    'price_max' => $pmax,
                    'price_varies' => $pmin != $pmax ? true : false,
                    'compare_at_price' => $cpmax = $productShopiftCompareAtPrice->max(),
                    'compare_at_price_min' => $cpmin = $productShopiftCompareAtPrice->min(),
                    'compare_at_price_max' => $cpmax,
                    'compare_at_price_varies' => $cpmin != $cpmax ? true : false,
                    'type' => $request->type,
                    'ab' => $request->ab,
                    'is_increase' => $request->type = 'increase' ? true : false,
                    'product_shopify' => $productShopify
                ]);

                $expirement = $expirementSession->generateExpirement($product, $featureImage);

                if ($productShopify->variants->count() > 1) {
                    foreach ($productShopify->variants as $variant) {
                        //generate new variant in shopify store
                        $newlyCreatedvariant = $product->generateSimilarVariant($variant);
                        //store new created variant
                        $expirementSession->presistVariantSession($newlyCreatedvariant, true, $productShopify->title, $featureImage);
                        //store old created variant
                        $expirementSession->presistVariantSession($variant, false, $productShopify->title, $featureImage);
                        //process variants
                    }
                    $expirementSession->processVariantsVariable();
                } else {
                    $product->generateSimpleVariant();
                }

                return 200;
            }
        );
    }
}
