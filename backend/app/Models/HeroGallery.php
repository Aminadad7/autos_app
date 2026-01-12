<?php 
namespace App\Models; 
 
use Illuminate\Database\Eloquent\Model; 
 
class HeroGallery extends Model 
{ 
    protected $table = 'hero_gallery'; 
 
    protected $fillable = [ 
        'title', 
        'subtitle', 
        'image' 
    ]; 
} 