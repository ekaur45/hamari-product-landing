<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/blog', function () {
    return view('blog');
});

Route::get('/blog-details', function () {
    return view('blog-details');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/course', function () {
    return view('course');
});

Route::get('/course-details', function () {
    return view('course-details');
});

Route::get('/price', function () {
    return view('price');
});

Route::get('/team', function () {
    return view('team');
});

Route::get('/team-details', function () {
    return view('team-details');
});
