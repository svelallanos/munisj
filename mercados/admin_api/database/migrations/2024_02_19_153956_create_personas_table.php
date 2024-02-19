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
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger("user_id");
            $table->string('name')->nullable();
            $table->string('lastname')->nullable();
            $table->string('avatar')->nullable();
            $table->string('dni',8)->nullable();
            $table->text('razon_social')->nullable();
            $table->string('ruc',11)->nullable();
            $table->timestamp('fecha_nacimiento')->nullable();
            $table->string('sexo')->nullable();
            $table->string('telefono');
            $table->string('direccion');
            $table->unsignedTinyInteger('state')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personas');
    }
};
