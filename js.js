//JS

//JUQUERY
//MENU

$(document).ready(function()
{	

	//DESPLIEGE DE MENU
	var $botonmenu = $("#botonmenu");
	var $menuNav = $("#menuNav");

	$botonmenu.click (function()
	{
		$menuNav.toggleClass("menuactivo");
	})

	$botonmenu.on("tap",function()
	{
		$menuNav.toggleClass("menuactivo");
		console.log("touch");
	});

	$menuNav.click (function()
	{
		$menuNav.removeClass("menuactivo");
	})

	$menuNav.on("tap",function()
	{
		$menuNav.removeClass("menuactivo");
	})
	
	$("#logo").fadeIn(2000);

	//blazy
	//imagenes
	var bLazy = new Blazy({ selector:"img"});
	

	//SCROLL

	var links = $menuNav.find("li");
		
	var posInicio = null;
	var posServicios = null;
	var posGaleria = null;
	var posNosotros = null;
	var posContactos = null;
	var scrollBody = null;

	posGaleria = $("#galeria").offset().top;

	$(links[0]).click(function() 
	{
		posInicio = $("#inicio").offset().top;
		mover(posInicio);
		console.log(posInicio);
	});
	
	$(links[1]).click(function() 
	{	
		posServicios = $("#servicios").offset().top;
		mover(posServicios);
		console.log(posServicios);
	});
		
	$(links[2]).click(function() 
	{
		posGaleria = $("#galeria").offset().top;
		mover(posGaleria);
		console.log(posGaleria);
	});

	$(links[3]).click(function() 
	{
		posNosotros = $("#nosotros").offset().top;
		mover(posNosotros);
		console.log(posNosotros);
	});
	$(links[4]).click(function() 
	{
		posContactos = $("#contactos").offset().top;
		mover(posContactos);
		console.log(posContactos);
	});
	

	function mover(pos)
	{
		$("body").animate({scrollTop: pos},700);	
	}

	var imagenes = $("#galeria").find("img");
	imagenes.fadeIn(1200);



	var formulario = $("#formulario");
	
	formulario.submit(function(boton){
		boton.preventDefault();
		
	} )

	
	// // SCROLL PARA FADE IN 

	// $(document).on("scroll", function(){
	// 	scrollBody = $("body").scrollTop();
	// 	posGaleria = $("#galeria").offset().top;
	// 	if ( scrollBody  >= (posGaleria-1000)   ) 
	// 	{
			
	// 		console.log ("scroll de galeria = "+ posGaleria  );
	// 		console.log ("scroll del body = " + $("body").scrollTop()  );
	// 		imagenes.fadeIn(1200);


	// 	}

		
	// });

	

})




