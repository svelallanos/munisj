<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "email" => $this->resource->email,
            "role" => [
                "id" => $this->role->id,
                "name" => $this->role->name,
                "state" => $this->role->state,
            ],
            "fecha_update" => $this->resource->updated_at,
            "state" => $this->resource->state ?? 1,
        ];
    }
}
