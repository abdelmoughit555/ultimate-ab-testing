<?php

namespace App\Models\Shop\Expirement\ExpirementDay;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SplitCycle extends Model
{
    use HasFactory;

    const PENDING = "pending";
    const RUNNING = "running";
    const FINISHED = "finshed";

    protected $fillable = ['uuid', 'name', 'start_at', 'end_at', 'expirement_day_id', 'status', 'is_winner'];

    protected $cast = [
        'start_at' => 'date',
        'end_at' => 'date'
    ];

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function expirementDay()
    {
        return $this->belongsTo(ExpirementDay::class);
    }
}
