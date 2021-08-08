<?php

namespace Database\Seeders;

use App\Models\Shop\Expirement\ExpirementType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ExpirementTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        ExpirementType::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        ExpirementType::insert([
            [
                'name' => $name = 'expirement by days',
                'slug' => Str::slug($name),
                'description' => 'lorem',
                'image' => 'image'
            ],
            [
                'name' => $name = 'expirement by hours',
                'slug' => Str::slug($name),
                'description' => 'lorem',
                'image' => 'image'
            ],
            [
                'name' => $name = 'expirement by number of visits',
                'slug' => Str::slug($name),
                'description' => 'lorem',
                'image' => 'image'
            ],
            [
                'name' => $name = 'expirement by sessions',
                'slug' => Str::slug($name),
                'description' => 'lorem',
                'image' => 'image'
            ],
            [
                'name' => $name = 'expirement by countries',
                'slug' => Str::slug($name),
                'description' => 'lorem',
                'image' => 'image'
            ]
        ]);
    }
}
