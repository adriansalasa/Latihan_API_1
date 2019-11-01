<?php
	$djson = file_get_contents('json/techno.json');
	$mnu = json_decode($djson, true);
	// var_dump($mnu["Technology"][0]["Nama"]);
	$mnu = $mnu["Technology"];
	// echo $mnu[0]["Nama"];
?>
@extends('layout.main')

@section('title', 'Latihan API')

@section('content')

<div class="container">
	<div class="row ml-2 my-3">
		<div class="col">
			<h1>All News</h1>
		</div>
	</div>

	<div class="row ml-2">
		@foreach($mnu as $rowM)
			<div class="col-md-4">
				<div class="card">
				  <img src="img/{{ $rowM["Gambar"] }}" class="card-img-top" alt="" >
					  <div class="card-body">
					    <h5 class="card-title">{{$rowM["Nama"]}}</h5>
					    <p class="card-text">{{ $rowM["Deskripsi"]}}</p>
					    <a href="#" class="btn btn-primary">Baca Detail</a>
					  </div>
				</div>
			</div>
		@endforeach		
	</div>

</div>

@endsection