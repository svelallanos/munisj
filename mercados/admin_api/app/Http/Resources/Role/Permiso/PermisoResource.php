<?php

namespace App\Http\Resources\Role\Permiso;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PermisoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->resource->id,
            "name" => $this->resource->name,
            "description" => $this->resource->description,
            "state" => $this->resource->state ?? 1,
        ];
    }
}
