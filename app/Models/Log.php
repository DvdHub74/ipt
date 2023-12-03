<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Log extends Model
{
    use HasFactory;

    protected $table = 'logs';

    protected $fillable = [
        'data',
    ];

    public function user(){
        $this->belongsTo(User::class, 'user_id');
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->setTimezone('America/El_Salvador')->format('d-m-Y h:i:s');

    }
}
