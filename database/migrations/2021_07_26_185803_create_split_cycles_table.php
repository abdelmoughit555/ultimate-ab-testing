<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSplitCyclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('split_cycles', function (Blueprint $table) {
            $table->id();
            $table->string('uuid');
            $table->string('title');
            $table->date('start_at');
            $table->date('end_at');
            $table->string('status');
            $table->boolean('is_winner')->default(false);
            $table->unsignedBigInteger('expirement_day_id');
            $table->foreign('expirement_day_id')->references('id')->on('expirement_days')->onDelete('cascade');
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
        Schema::dropIfExists('split_cycles');
    }
}
