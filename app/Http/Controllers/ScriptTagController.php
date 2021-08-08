<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Shop\Expirement\ExpirementSession\ExpirementSession;

class ScriptTagController extends Controller
{
    public function index()
    {
        $view = view()->make('scripttag', [
            'expirementSession' => $expirementSessions = ExpirementSession::first(),
            'variantSessions' => $expirementSessions->variantSessions
        ])
            ->withHeaders([
                'Content-Type' => 'application/javascript'
            ]);

        return $view->render();
    }
}
