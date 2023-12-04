<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ministrie extends Model
{
    use HasFactory;

    protected $table = 'ministries';

    protected $fillable= [
        'name',
    ];

    public function people(){
        return $this->belongsToMany(People::class, 'people_ministrie', 'id_ministrie', 'id_people');
    }

    public function user(){
        return  $this->belongsToMany(User::class, 'user_ministrie', 'id_ministrie', 'id_user');
    }
}
