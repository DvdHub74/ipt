<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class People extends Model
{
    use HasFactory;

    protected $table = 'people';

    protected $fillable = [
        'names',
        'lastnames',
        'age',
        'birthday',
        'type',
        'state',
    ];
    protected $attributes = [
        'active' => 1,
    ];

    public function ministrie(){
        return  $this->belongsToMany(Ministrie::class, 'people_ministrie', 'id_people','id_ministrie');
    }
}
