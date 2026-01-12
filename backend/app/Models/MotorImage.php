<?php 
namespace App\Models; 
 
use Illuminate\Database\Eloquent\Model; 
 
class MotorImage extends Model 
{ 
    protected $table = 'motor_images'; 
 
    protected $fillable = [ 
        'motor_id', 
        'image' 
    ]; 
 
    public function motor() 
    { 
        return $this->belongsTo(Motor::class); 
    } 
} 