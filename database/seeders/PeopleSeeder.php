<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 50) as $index) {
            DB::table('people')->insert([
                'names' => $faker->firstName,
                'lastnames' => $faker->unique()->lastName,
                'age' => $faker->numberBetween(18, 80),
                'active' => $faker->boolean,
            ]);
        }
    }
}
