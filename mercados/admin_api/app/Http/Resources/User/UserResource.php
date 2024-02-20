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
        $data = [
            "id" => $this->resource->id,
            "name" => $this->resource->name,
            "email" => $this->resource->email,
            "fecha_update" => $this->resource->updated_at,
            "state" => $this->resource->state ?? 1,
        ];
    
        // Verificar si la relación 'persona' está definida y no es nula
        if ($this->persona) {
            $data['datos_personales'] = [
                "id" => $this->persona->id,
                "name" => $this->persona->name,
                "lastname" => $this->persona->lastname,
                "dni" => $this->persona->dni,
                "razon_social" => $this->persona->razon_social,
                "ruc" => $this->persona->ruc,
                "fecha_nacimiento" => $this->persona->fecha_nacimiento,
                "sexo" => $this->persona->sexo,
                "telefono" => $this->persona->telefono,
                "direccion" => $this->persona->direccion,
            ];
        }
    
        // Verificar si la relación 'role' está definida y no es nula
        if ($this->role) {
            $data['role'] = [
                "id" => $this->role->id,
                "name" => $this->role->name,
                "state" => $this->role->state,
            ];
        }
    
        return $data;
    }
}
