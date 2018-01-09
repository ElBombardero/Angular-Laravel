<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable =[
        'title','descripcion', 'thumbnail','imageLink','user_id'
    ];
}
