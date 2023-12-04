<?php

namespace Database\Seeders;

use App\Models\Ministrie;
use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123123123'),
            'active' => 1
        ]);



        Ministrie::create(['name' => 'EDC']);
        Ministrie::create(['name' => 'CMF']);
        Ministrie::create(['name' => 'FDB']);

    }
}
