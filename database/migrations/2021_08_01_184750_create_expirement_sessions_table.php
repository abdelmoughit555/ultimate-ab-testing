<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpirementSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expirement_sessions', function (Blueprint $table) {
            $table->id();
            $table->longText('title')->nullable();
            $table->string('status')->nullable();
            $table->string('type')->nullable();
            $table->boolean('is_increase')->default(true);
            $table->string('price')->nullable();
            $table->string('price_min')->nullable();
            $table->string('price_max')->nullable();
            $table->boolean('price_varies')->default(false);
            $table->string('compare_at_price')->nullable();
            $table->string('compare_at_price_min')->nullable();
            $table->string('compare_at_price_max')->nullable();
            $table->boolean('compare_at_price_varies')->default(false);
            $table->json('options')->nullable();
            $table->json('dlmap')->nullable();
            $table->json('vids')->nullable();
            $table->json('v2v')->nullable();
            $table->json('v2o')->nullable();
            $table->json('v2pr')->nullable();
            $table->json('v2p')->nullable();
            $table->json('v2cmp')->nullable();
            $table->json('product_shopify')->nullable();
            $table->string('dp_v0')->nullable();
            $table->string('dp_v1')->nullable();
            $table->string('cmp_v0')->nullable();
            $table->string('cmp_v1')->nullable();
            $table->float('ab')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expirement_sessions');
    }
}
