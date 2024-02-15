<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Role\Permiso\PermisoCollection;
use App\Http\Resources\Role\Permiso\PermisoResource;
use App\Models\Role\Permiso;
use Illuminate\Http\Request;

class PermisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $state = $request->state;

        $permisos = Permiso::filterAdvance($search, $state)->orderBy("id","desc")->get();
         return response()->json([
            "permisos" => PermisoCollection::make($permisos)
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
        $permiso = Permiso::create($request->all());

        return response()->json([
            "permiso" => PermisoResource::make($permiso)
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
        $permiso = Permiso::findOrFail($id);
        $permiso->update($request->all());

        return response()->json([
            "permiso" => PermisoResource::make($permiso)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $permiso = Permiso::findOrFail($id);
        $permiso->delete();

        return response()->json([
            "message" => 200
        ]);
    }
}
