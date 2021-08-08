<?php

namespace App\Models\Shop\Expirement\ExpirementDay;

use App\Models\Shop\Expirement\Expirement;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpirementDay extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'status', 'deadline'
    ];

    public function expirements()
    {
        return $this->morphMany(Expirement::class, 'expirementable');
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function splitCycles()
    {
        return $this->hasMany(SplitCycle::class);
    }
}
