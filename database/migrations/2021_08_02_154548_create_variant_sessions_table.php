<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVariantSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('variant_sessions', function (Blueprint $table) {
            $table->id();
            $table->string('uuid');
            $table->string('variant_title');
            $table->string('variant_id');
            $table->string('product_shopify_id');
            $table->string('price')->nullable();
            $table->string('compare_at_price')->nullable();
            $table->boolean('is_newly_created')->default(false);
            $table->unsignedBigInteger('expirement_session_id');
            $table->json('options')->nullable();
            $table->json('variant_shopify')->nullable();

            $table->foreign('expirement_session_id')->references('id')->on('expirement_sessions')->onDelete('cascade');
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
        Schema::dropIfExists('variant_sessions');
    }
}
