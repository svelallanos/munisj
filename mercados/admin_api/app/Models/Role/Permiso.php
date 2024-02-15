<?php

namespace App\Models\Role;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Permiso extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        "name",
        "description",
        // "read",
        // "write",
        // "create",
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

    // public function Role()
    // {
    //     return $this->hasMany(Role::class);
    // }

    // public function father()
    // {
    //     return $this->belongsTo(Role::class, "role_id");
    // }

    public function scopeFilterAdvance($query, $search, $state)
    {
        if($search)
        {
            $query->where("name", "like","%".$search."%");
        }

        if($state)
        {
            $query->where("state", "like","%".$state."%");
        }

        return $query;
    }
}
