$( document ).ready(function() {

	let duracionAnimacion = 4500;
	setTimeout( openGaleryDayOfWeek(),duracionAnimacion);
	openPlayListDayOfWeek();
});


function openMenu()
{
	if (!$('#menu_section').hasClass('open')) {
		$('#menu_section').addClass('open');
	}else
	{
		$('#menu_section').removeClass('open');
	}
	if ($('#menu_promocion').hasClass('open')) {
		$('#menu_promocion').removeClass('open');
	}

	console.log('menu');
}

function openPromocion()
{
	if (!$('#menu_promocion').hasClass('open')) {
		$('#menu_promocion').addClass('open');
	}else
	{
		$('#menu_promocion').removeClass('open');
	}
	if ($('#menu_section').hasClass('open')) {
		$('#menu_section').removeClass('open');
	}

	console.log('promocion');
}

function viewGalery(dayOfWeek)
{
	//$('.carousel').removeClass('open');
	$('.carousel').addClass('open-fast');
	$('#menu_promocion').removeClass('open');
	if ($.find('#myCarousel')) {
		$('#myCarousel').removeClass('open');	
	}
	
	// para dia especial
	if (dayOfWeek == "especial") {
		if ($('#especial').hasClass('active')) {
			$('#'+dayOfWeek).addClass('open');
			$('#'+dayOfWeek).carousel();
		}
		else
		{
			openGaleryDayOfWeek();
		}
	} else if (!$('#'+dayOfWeek).hasClass('open')) {
		$('#'+dayOfWeek).addClass('open');
		$('#'+dayOfWeek).carousel();
	}

	

}

function openGaleryDayOfWeek()
{	
	if ($('#myCarousel').length) {
			$('#myCarousel').addClass('open');
			console.log($('#myCarousel'))
	} else
	{
		let fecha = new Date();
		console.log(fecha);
		$($('.galeria').find('.carousel')[fecha.getDay() - 1]).addClass('open');
		console.log($($('.galeria').find('.carousel')[fecha.getDay() - 1]))
	}
	
}

var listaMusica = new Array();
var playList = new Array();

function openPlayListDayOfWeek()
{
	let fecha = new Date();
	listaMusica[0]  = [
			{
				source : 'public/music/lunes/Hotel Carlifornia.mp3',
				name: 'Hotel Carliforni',
			},
			{
				source : 'public/music/lunes/Killing me softly.mp3',
				name: 'Killing me softly',
			},
			{
				source : 'public/music/lunes/Maroon 5 - Sunday Morning.mp3',
				name: 'Maroon 5 - Sunday Morning',
			},
			{
				source : 'public/music/lunes/Phil Collins - True Colors.mp3',
				name: 'Phil Collins - True Colors',
			},
			{
				source : 'public/music/lunes/Radiohead - Creep.mp3',
				name: 'Radiohead - Creep',
			},
			{
				source : 'public/music/lunes/U2 - With Or Without You.mp3',
				name: 'U2 - With Or Without You',
			}
	];
	/* martes */
	listaMusica[1]  = [
			{
				source : 'public/music/martes/Green Day- Boulevard Of Broken Dreams.mp3',
				name: 'Hotel Carliforni',
			},
			{
				source : 'public/music/martes/Guns N Roses - November Rain.mp3',
				name: 'Guns N Roses - November Rain',
			},
			{
				source : 'public/music/martes/Guns N Roses - Sweet Child O Mine.mp3',
				name: 'Guns N Roses - Sweet Child O Mine',
			},
			{
				source : 'public/music/martes/Nirvana - Smells Like Teen Spirit.mp3',
				name: 'Nirvana - Smells Like Teen Spirit',
			},
			{
				source : 'public/music/martes/Red Hot Chili Peppers - Californication.mp3',
				name: 'Red Hot Chili Peppers - Californication',
			},
			{
				source : 'public/music/martes/Scorpions - Wind Of Change.mp3',
				name: 'Scorpions - Wind Of Change',
			},

	];
	/* miercoles */
	listaMusica[2]  = [
			{
				source : 'public/music/miercoles/Camila - De Que Me Sirve La Vida.mp3',
				name: 'Camila - De Que Me Sirve La Vida',
			},
			{
				source : 'public/music/miercoles/Fonseca - Sorprenderte.mp3',
				name: 'Fonseca - Sorprenderte',
			},
			{
				source : 'public/music/miercoles/Jesse & Joy - Me Voy.mp3',
				name: 'Jesse & Joy - Me Voy',
			},
			{
				source : 'public/music/miercoles/Juanes - Hermosa Ingrata.mp3',
				name: 'Juanes - Hermosa Ingrata',
			},

	];
	listaMusica[3]  = [
			{
				source : 'public/music/lunes/Hotel Carlifornia.mp3',
				name: 'Hotel Carliforni',
			},
			{
				source : 'public/music/lunes/Killing me softly.mp3',
				name: 'Killing me softly',
			}
	];
	listaMusica[4]  = [
			{
				source : 'public/music/lunes/Hotel Carlifornia.mp3',
				name: 'Hotel Carliforni',
			},
			{
				source : 'public/music/lunes/Killing me softly.mp3',
				name: 'Killing me softly',
			}
	];
	listaMusica[5]  = [
			{
				source : 'public/music/lunes/Hotel Carlifornia.mp3',
				name: 'Hotel Carliforni',
			},
			{
				source : 'public/music/lunes/Killing me softly.mp3',
				name: 'Killing me softly',
			}
	];
	listaMusica[6]  = [
			{
				source : 'public/music/lunes/Hotel Carlifornia.mp3',
				name: 'Hotel Carliforni',
			},
			{
				source : 'public/music/lunes/Killing me softly.mp3',
				name: 'Killing me softly',
			}
	];

	let playList = listaMusica[fecha.getDay() - 1]

	for (var i = playList.length - 1; i >= 0; i--) {
		$('#bbaudio').prepend('<source src="'+ playList[i].source +'" type="audio/mp3"/>');
		$('#bb-listplayer').prepend('<li class="bb-music" onclick="loadTrack('+ i +')">'+playList[i].name+'</li>');
	}
	


}