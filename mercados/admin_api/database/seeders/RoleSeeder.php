<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role1 = Role::create(['name' => 'Admin']);
        $role2 = Role::create(['name' => 'Invitado']);


        Permission::create(['name' => 'admin.user.index'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.user.create'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.user.edit'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.user.destroy'])->syncRoles([$role1, $role2]);
    }
}
