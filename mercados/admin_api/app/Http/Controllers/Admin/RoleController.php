<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Role\RoleCollection;
use App\Http\Resources\Role\RoleResource;
use App\Models\Role\DetRolePermiso;
use App\Models\Role\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $role = Role::orderBy("id", "desc")->get();

        return response()->json([
            "roles" => RoleCollection::make($role),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $role = Role::create($request->all());

        return response()->json([
            "role" => RoleResource::make($role),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $role = Role::findOrFail($id);
        $role->detalleRolPermisos()->delete();

        $role->update([
            "name" => $request->name
        ]);

        $auxArr = $request->all();
        unset($auxArr['name']);

        $newArr = [];
        $valExis = 'dsds';

        return response()->json([
            "role" => $auxArr,
        ]);

        foreach ($auxArr as $key => $value) {
            $array = explode('_', $value);
            if ($valExis !== $array[0]) {
                $valExis = $array[0];
            }
 
            $position = 0;
            if($array[1] == 2)
            {
                $position = 1;
            }
            if($array[1] == 3)
            {
                $position = 2;
            }

            $newArr[$array[0]][$position] = $array[1];
        }

        // Asignamos los nuevos roles con sus permisos
        foreach ($newArr as $key => $value) {
            $assingRolePermisos = DetRolePermiso::create([
                "role_id" => $id,
                "permiso_id" => $key,
                "view" => isset($value[0]) ? 1 : 2,
                "write" => isset($value[1]) ? 1 : 2,
                "create" => isset($value[2]) ? 1 : 2,
            ]);
        }

        return response()->json([
            "role" => RoleResource::make($role),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);
        $role->delete();
        return response()->json([
            "message" => 200,
        ]);
    }
}
