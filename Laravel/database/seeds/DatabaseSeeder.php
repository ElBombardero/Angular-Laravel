<?php

use Illuminate\Database\Seeder;
use App\Image;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(imagesTableSeeder::class);
    }
}
