<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'author',
        'isbn',
        'genre_id',
        'price',
        'publication_year',
        'publisher',
        'language',
        'pages',
        'description',
        'stock',
        'rating',
        'cover_type',
        'image_url',
    ];

    public function genre() : BelongsTo 
    {
        return $this->belongsTo(Genre::class, "genre_id");
    }
}