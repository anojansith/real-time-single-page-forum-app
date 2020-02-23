<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $guarded = [];
    // guarded fills everything.

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
