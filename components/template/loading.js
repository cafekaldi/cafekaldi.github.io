$( document ).ready(function() {
    initloading();

    $('#btn_leermas').on('click',function(){
    	$('#contenido_details').click();
    })

});

function initloading() {
	let init = 0;
	let velocidad = 1700 / 100;
	let interval = setInterval(function(){
		if (init < 101 ) {
			$('#loading__text').html(init + '%');
			init++;	
		}else
		{
			$('#loading__text').addClass('load');
			clearInterval(interval);
		}
	}, velocidad);

}
