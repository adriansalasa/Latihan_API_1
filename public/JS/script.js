$.getJSON('json/techno.json', function(hasil){
	 // console.log(hasil);

	 let lsTech = hasil.Technology;
	 // console.log(lsTech);
	$.each(lsTech, function(i, hasil){
		// console.log(hasil)
		$('#lst-techno').append('<div class="col-md-4"><div class="card mb-3"><img src="img/'+ hasil.Gambar +'" class="card-img-top " alt="" width="20px" height="140px"><div class="card-body"><h5 class="card-title">'+hasil.Nama+'</h5><a href="#" class="btn btn-primary">Baca Detail</a></div></div></div>');
	});
	
});

$('.nav-link').on('click', function(){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let Kategori = $(this).html();
	// console.log(kategori);

	$('h1').html(Kategori);

	$.getJSON('json/techno.json', function(hasil){
		let lsTech = hasil.Technology;
		let content = '';
		// console.log(lsTech);

		 $.each(lsTech, function(i, hasil){
		 	if(hasil.Kategori == Kategori){		
		 		// console.log(hasil);		
				content += '<div class="col-md-4"><div class="card mb-3"><img src="img/'+ hasil.Gambar +'" class="card-img-top " alt="" width="20px" height="140px"><div class="card-body"><h5 class="card-title">'+hasil.Nama+'</h5><p class="card-text ">'+hasil.Deskripsi+'</p><a href="#" class="btn btn-primary">Baca Detail</a></div></div></div>';
		 	}			
		});

		 $('#lst-techno').html(content);	
		

	});
});