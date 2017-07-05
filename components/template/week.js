$( document ).ready(function() {

	let duracionAnimacion = 4500;
	setTimeout( openGaleryDayOfWeek(),duracionAnimacion);
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
	$('.carousel').removeClass('open');
	$('.carousel').addClass('open-fast');
	$('#menu_promocion').removeClass('open');

	// para dia especial
	if (dayOfWeek == "especial") {
		if ($('#especial').hasClass('active')) {
			$('#'+dayOfWeek).addClass('open');
		}
		else
		{
			openGaleryDayOfWeek();
		}
	} else if (!$('#'+dayOfWeek).hasClass('open')) {
		$('#'+dayOfWeek).addClass('open');
	}

	

}

function openGaleryDayOfWeek()
{
	let fecha = new Date();
	$($('.galeria').find('.carousel')[fecha.getDay() - 1]).addClass('open');
}
