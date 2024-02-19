<?php

namespace App\Models\Role;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "state"
    ];

    public function setCreatedAtAttribute($value)
    {
        date_default_timezone_set("America/Lima");
        $this->attributes["created_at"] = Carbon::now();
    }

    public function setUpdatedAtAttribute($value)
    {
        date_default_timezone_set("America/Lima");
        $this->attributes["updated_at"] = Carbon::now();
    }

    public function detalleRolPermisos()
    {
        return $this->hasMany(DetRolePermiso::class, 'role_id');
    }

    public function usuarios()
    {
        return $this->hasMany(User::class, 'role_id');
    }

    // public function Role()
    // {
    //     return $this->hasMany(Role::class);
    // }

    // public function father()
    // {
    //     return $this->belongsTo(Role::class, "role_id");
    // }
}
