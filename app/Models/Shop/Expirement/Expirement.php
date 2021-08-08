<?php

namespace App\Models\Shop\Expirement;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expirement extends Model
{
    use HasFactory;

    const PENDING = "pending";
    const RUNNING = "running";
    const FINISHED = "finished";
    const FAILED = "failed";

    public $fillable = [
        'expirement_type_id', 'expirementable_type', 'product_id', 'shop_id', 'uuid', 'title', 'status', 'featured_image'
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

    public function expirementable()
    {
        return $this->morphTo();
    }

    public function expirementType()
    {
        return $this->belongsTo(ExpirementType::class);
    }
}
