<?php

use Illuminate\Database\Seeder;
use App\Image;
use Faker\Factory as Faker;

class imagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = faker::create();
        $imageLinks = array(
            "https://www.videotutoriales.com/maspa/maspa1",
            "https://www.videotutoriales.com/maspa/maspa2",
            "https://www.videotutoriales.com/maspa/maspa3",
            "https://www.videotutoriales.com/maspa/maspa4",
            "https://www.videotutoriales.com/maspa/maspa5",
            "https://www.videotutoriales.com/maspa/maspa6",
            "https://www.videotutoriales.com/maspa/maspa7",
            "https://www.videotutoriales.com/maspa/maspa8",
        );
        foreach($imageLinks as $imageLink){
            Image::create([
                "title"=> $faker-> text(80),
                "descripcion"=> $content = $faker ->paragraph(18),
                "thumbnail"=> $imageLink."jpg",
                "imageLink"=> $imageLink."-1.jpg",
                "user_id" => $faker -> numberBetween($min = 1, $max = 5),
            ]);
        }
    }
}
