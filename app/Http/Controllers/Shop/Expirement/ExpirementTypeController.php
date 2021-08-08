<?php

namespace App\Http\Controllers\Shop\Expirement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Expirement\ExpirementTypeResource;
use App\Models\Shop\Expirement\ExpirementType;

class ExpirementTypeController extends Controller
{
    public function __invoke()
    {
        return ExpirementTypeResource::collection(
            ExpirementType::get()
        );
    }
}
