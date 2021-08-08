<?php

namespace App\Models\Shop\Expirement;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpirementType extends Model
{
    use HasFactory;

    protected $fillbale = [
        'name', 'slug', 'description', 'image'
    ];

    public function expirements()
    {
        return $this->hasMany(Expirement::class);
    }
}
