<?php

namespace App\Jobs\Shop;

use App\Models\Shop\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class UpdateShopInformationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $shop;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(User $shop)
    {
        $this->shop = $shop;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $shop = $this->shop;

        $shopInfo = $shop->api()->rest('GET', '/admin/shop.json')['body']['shop'];

        $shop->update([
            'shop_owner' => $shopInfo['shop_owner'],
            'currency' => $shopInfo['currency'],
            'country' => $shopInfo['country']
        ]);
    }
}
