<?php

namespace App\Http\Resources\Role;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
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
            "permisos" => $this->detalleRolPermisos->map(function ($item) {
                return [
                    "view" => $item->view,
                    "write" => $item->write,
                    "create" => $item->create,
                    "id" => $item->permiso_id,
                    "name" => $item->permiso->name,
                    "state" => $item->permiso->state,
                ];
            }),
            "usuarios" => $this->usuarios->map(function ($user) {
                return [
                    "dni" => 12345678,
                    "name" => $user->name,
                    "email" => $user->email,
                    "fecha_update" => $user->updated_at,
                ];
            }),
        ];
    }
}
