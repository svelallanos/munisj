<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('det_role_permisos', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger("role_id");
            $table->unsignedInteger("permiso_id");
            $table->unsignedTinyInteger("view")->default(2);
            $table->unsignedTinyInteger("write")->default(2);
            $table->unsignedTinyInteger("create")->default(2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('det_role_permisos');
    }
};
