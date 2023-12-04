<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people_ministrie', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_people');
            $table->unsignedBigInteger('id_ministrie');
            $table->foreign('id_people')->references('id')->on('people');
            $table->foreign('id_ministrie')->references('id')->on('ministries');
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
        Schema::dropIfExists('people_ministri');
    }
};
