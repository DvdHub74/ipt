<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'active'
    ];

    public function ministrie(){
        return  $this->belongsToMany(Ministrie::class, 'people_ministrie', 'id_people','id_ministrie');
    }

}
