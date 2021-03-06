jQuery(document).ready(function(){
	//you can now use $ as your jQuery object.
	//jQuery(".menuitem-nav-link").addClass("fuenteMenu");  
	
	
	//jQuery("#contenedorTop").hide().fadeIn(1000);
	
	if(!mostarVideo()){
		$("#div-overlay").hide();		
		$("#video-contenedor > iframe").remove();
		$("body").css("overflow-y","visible");
	}
	else{
        //$("body").css("overflow-y","hidden");		
		$("#video-contenedor").append("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/-2y2MPoDFvI?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
		$("#div-overlay")
			//.css("overflow","hidden")
			.fadeIn(1000);
		
	}
	
	$("#contenedorTop a, .item a").click(function(){
		$("#contenedorTop").fadeOut(750);	
		$("#div-contenido").fadeOut(500);
		$("#div-cabecera-home").fadeOut(500);
		$("#div-redes-sociales").fadeOut(500);
	});
	
	jQuery(".item").hide();
	jQuery("#div-contenido").hide().fadeIn(1000);
	
	var dias=diasRestantes();

	$(".dias-restantes").html(dias);
	
	
	$("#contenedorTop").hide().css("visibility","visible").delay(500).fadeIn(500);
	
	$("#div-redes-sociales").hide().css("visibility","visible").delay(1000).fadeIn(500);
	
	if(mostrarCabecera()){		
		$(".div-cabecera").css("visibility","visible");
		$("#div-cabecera-home").hide().delay(1000).fadeIn(500);
		$("#div-back").css("display","none");
	}
	else{
		$("#div-cabecera-home").hide();
	}
	
	$("#div-contenido").css("visibility","visible");
	$(".item").each(function(index){
		$(this).delay(1000+(index*500)).fadeIn(1000);
	});
	
	
	resaltaItemMenuActual();
	
	if(!esGaleria()){
		jQuery(".item-page").parent().addClass("anchoArticulo");
	}
	else{
		$(".item-page").parent().css("width","85% !important");
		$("#div-redes-sociales").addClass("invisibleEnGaleria");
	}
	
	var lang=$(".lang-active a").attr("href");
	if (lang.search("/es")>-1){
		$(".menuitem-destacado").attr("href","./index.php?option=com_content&view=article&id=5");		
		cambiaIdiomaMenu("es");
		
	}
	else if(lang.search("/en")>-1){
		$(".menuitem-destacado").attr("href","./index.php?option=com_content&view=article&id=108");		
		cambiaIdiomaMenu("en");
	}
	
});


function mostrarCabecera(){
	var url=window.location.href;
	
	if(esHomePage(url)){
		return true;
	}
	else{
		if(url.search("option=com_content&view=category")>-1){
			return true;
		}
		else{
			return false;
		}
	}
}

function esHomePage(url){
	var res=url;
	
	var index=res.indexOf("?option=com_content");	
	if(index>0){
		return false;		
	}

	index=res.indexOf("?option=com_fwgallerylight");
	if(index>0){
		return false;		
	}
	
	index=res.indexOf("?")

	if(index>=0){
		res=res.substring(0,index);
	}

	res=res.slice(res.indexOf("index.php"));
	res=res.slice(9);
	
	if(res==""){
		return true;
	}
	else{
		index=res.indexOf("/");			
		if(index>=0){
			res=res.slice(index+1,res.length);
			if(res==""){
				return true;
			}
			else{
				index=res.indexOf("/");
				if(index>=0){
					res=res.slice(index+1,res.length);
					return (res=="");
				}
				else{
					return false;
				}
			}
		}
		else{
			return false;
		}
	}
	
	
}


function esGaleria(){
	var url=window.location.href;
	
	return (url.indexOf("?option=com_content&view=article&id=188")>-1);
}

function resaltaItemMenuActual(){
	var url1 = window.location.href; 
	var url2 = "";

	url1=url1.substring(url1.lastIndexOf("?"));

	$(".menuitem-nav-link").each(function() {
		url2=this.href;
		url2=url2.substring(url2.lastIndexOf("?"));

		//console.log("URL1: "+url1+"\n"+"URL2: "+url2);

		if(url1 == url2) { 
			$(this).addClass("menuitem-actual");
			$(this).removeClass("menuitem-destacado");
		}
		else{
			$(this).removeClass("menuitem-actual");
		}
	});	
}

function diasRestantes(){
	var festival=new Date('2019-05-14').getTime();
	var ahora=Date.now();
	var aux=0;
    
	var diff = festival - ahora;
    
    if(diff<0){
    	diff=0;        
    }
    else{
    	aux=2;
    }
	
	return(Math.floor(diff/(1000*60*60*24))+aux);	
}


function openNav() {
    document.getElementById("menu-mobile-div-expand").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu-mobile-div-expand").style.width = "0";
}

function mostarVideo(){
  /*
	var url=window.location.href;

	if(url.search("video=0")>-1){
		return false;
	}
	else{
		return esHomePage(url);
	}
    */
  return false;
}

function closeVideo(){
	var url=window.location.href;
	
	if(url.indexOf("?")>-1){
		window.location.href=url+"&video=0";	
	}
	else{
		window.location.href=url+"?video=0";
	}
	
}

function cambiaIdiomaMenu(lang){
	if(lang=="es"){
		jQuery("#menuitem-festival").html("FESTIVAL");
		jQuery("#menuitem-mob-festival").html("FESTIVAL");
		jQuery("#menuitem-guia").html("GUIA");
		jQuery("#menuitem-mob-guia").html("GUIA");
		jQuery("#menuitem-lugar").html("LUGAR");
		jQuery("#menuitem-mob-lugar").html("LUGAR");
		jQuery("#menuitem-entradas").html("ENTRADAS");
		jQuery("#menuitem-mob-entradas").html("ENTRADAS");
		jQuery("#menuitem-galeria").html("GALERIA");
		jQuery("#menuitem-mob-galeria").html("GALERIA");
		jQuery("#menuitem-contacto").html("CONTACTO");
		jQuery("#menuitem-mob-contacto").html("CONTACTO");
	}
	else{
		jQuery("#menuitem-festival").html("FESTIVAL");
		jQuery("#menuitem-mob-festival").html("FESTIVAL");
		jQuery("#menuitem-guia").html("GUIDE");
		jQuery("#menuitem-mob-guia").html("GUIDE");
		jQuery("#menuitem-lugar").html("LOCATION");
		jQuery("#menuitem-mob-lugar").html("LOCATION");
		jQuery("#menuitem-entradas").html("TICKETS");
		jQuery("#menuitem-mob-entradas").html("TICKETS");
		jQuery("#menuitem-galeria").html("GALLERY");
		jQuery("#menuitem-mob-galeria").html("GALLERY");
		jQuery("#menuitem-contacto").html("CONTACT");
		jQuery("#menuitem-mob-contacto").html("CONTACT");
	}
}


function muestraGaleria(){
	var columnas=3;	
	var maxFilasPorPagina=10;
	
	var anchoColumna=100/columnas;
	var altoFila;
	
	var maxIndexPorPagina=columnas*maxFilasPorPagina;
	var maxPagina;
	
	var paginaActual=1;
	
	var minIndex=0;
	var maxIndex=0;
		
	var index=0;
	var indexFila=0;
	
	if($("div[itemprop=articleBody]").length){
		$("div[itemprop=articleBody]").append("<div id='div-galeria'></div>");
			
		var urlBase=getURLBase();
		
		if(getParameterByName("pagina",null)){
			paginaActual=getParameterByName("pagina",null);			
		}
		
		minIndex=((paginaActual-1)*maxIndexPorPagina);
		maxIndex=minIndex+maxIndexPorPagina;		
				
		$.getJSON(urlBase+"/ws.php",function(data){
					
			maxPagina=Math.ceil(data.length/maxIndexPorPagina);
			
			/*Estructura*/
			
			$("[itemprop=articleBody]").css("padding-bottom","40px");
			$(".item-page").css("background-color","rgba(0,0,0,0.6)");
			$("#contenedorTop").addClass("efecto-fondo-transparente");
			
			$(".menu-mobile-imagen-lateral")
				.css("background-color","rgba(0,0,0,0.8)")
				.css("border-radius","50px");
			
			$("#menu-mobile-logo").css("visibility","hidden");
			$("#menu-mobile-div-info").css("visibility","hidden");
			
			$.each(data,function(key,value){
				if(index>=minIndex){					
					var posicionEnFila=index%columnas;
										
					/*$("#div-galeria").append(addItem(index,urlBase,value));*/
					addItem(index,urlBase,value);
					
					$("#galeria-imagen-"+index)
						.addClass("efecto-sombra-360-blanco")
						.addClass("galeria-limitador-altura-max")
						.mouseenter(function(){
							$(this)
								.css("width","95%")
								;
						})
						.mouseleave(function(){
							$(this)
								.css("width","80%")
								;
						})
						/*
						.click(function(){
							muestraPopUp($(this).attr("src"));
						})
						*/
					;

					switch(posicionEnFila){
						case 0:
							//Primero de la fila
							$("#galeria-imagen-"+index).addClass("forma-borde-i");
							break;
						case (columnas-1):
							$("#galeria-imagen-"+index).addClass("forma-borde-d");
							break;
						default:
							$("#galeria-imagen-"+index).addClass("forma-borde-c");
					}
				}
				index++;
				
				if(index>=maxIndex){
					return false;
				}
			});
			
			
			/*Paginación*/
			$("#div-galeria").append("<div id='galeria-div-paginacion' class='fuenteMenu' ></div>");
			
			for(var i=1;i<=maxPagina;i++){
				var actual="";
				if(i==paginaActual){
					actual=" class='menuitem-actual' ";
				}
					$("#galeria-div-paginacion").append("<a href='./?option=com_content&view=article&id=188&pagina="+i+"' "+actual+">"+i+"</a>");
			}
			
			
			/*Maquetación*/
			$("#div-contenido").removeClass("anchoArticulo");
			$(".galeria-item").css("width",anchoColumna+"%");
			
			var anchoCalculado = $(".galeria-item").width();
			var alturaMaxima=(1/2)*anchoCalculado;
			$(".galeria-limitador-altura-max").css("height",alturaMaxima).css("max-height",alturaMaxima);
			
			$(window).on("resize",function(){
				var anchoCalculado = $(".galeria-item").width();
				var alturaMaxima=(1/2)*anchoCalculado;
				$(".galeria-limitador-altura-max").css("height",alturaMaxima).css("max-height",alturaMaxima);
				
			});
			
			
			$(".lightbox").addClass("galeria-lightbox-hack");

			$("#contenedorMid").addClass("posicionamiento-top");
		});
	}
}

function addFila(index){
	var res="<div id='div-galeria-fila-"+index+"' class='galeria-fila '></div>";
	
	return res;
}

function addItem(index,urlBase,value){
	$("#div-galeria").append("<div id='galeria-item-"+index+"'></div>");
	
	$("#galeria-item-"+index)
		.addClass("galeria-item")
		.addClass("galeria-limitador-altura-min")
		.addClass("galeria-limitador-altura-max")
		.append("<a id='galeria-enlace-"+ index +"' href='"+ window.location.href +"'></a>" )
	;
	
	$("#galeria-enlace-"+index)
		.on("click", function(evt){
			//evt.stopPropagation();
			return false;
		})
		
	;
	
	getImagen(index,urlBase+"/"+value);
	
	/*
	var item="	<div class='galeria-item galeria-limitador-altura-min galeria-limitador-altura-max'>";
	//item+=			"<div class='galeria-div-imagen'>";
	item+=				getImagen(index,urlBase+"/"+value);
	//item+=			"</div>";
	//item+="			<div class='galeria-overlayimagen'>a</div>";
	item+="		</div>";
	
	return item;
	*/
}

function getImagen(index,url){

	preLoadImagen(index,url);	
	
	$("#galeria-enlace-"+index)
		.append("<img id='galeria-imagen-"+index+"' />")
		.append("<img  id='galeria-imagen-loader-fondo-"+index+"' />")
		.addClass("galeria-lightbox-enlace")
	;
	
	$("#galeria-imagen-"+index)
		.addClass("galeria-imagen")
		.addClass("galeria-imagen-precarga")
		.addClass("galeria-limitador-altura-min")
		.attr("src",getURLBase()+"templates/transitionfestival2019/images/loading-2.gif")
	;
	
	$("#galeria-imagen-loader-fondo-"+index)
		.addClass("galeria-imagen-precarga-fondo")
		.addClass("galeria-limitador-altura-max")
		.attr("src",getURLBase()+"templates/transitionfestival2019/images/logo-mini-verde.png")
	;
	
	/*
	var out="<a href='#' class='galeria-lightbox-enlace' >";
	out+=	"";
	out+=	"<img id='galeria-imagen-"+index+"' ";
	out+=	"class='galeria-imagen galeria-imagen-precarga galeria-limitador-altura-min' src='"+getURLBase()+"templates/transitionfestival2019/images/loading-2.gif' ";
	out+=	"/></a>";


	out+="<img  id='galeria-imagen-loader-fondo-"+index+"' class='galeria-imagen-precarga-fondo  galeria-limitador-altura-max' src='"+getURLBase()+"templates/transitionfestival2019/images/logo-mini-verde.png'  />";
	
	return out;
	*/
}

function preLoadImagen(index,url){
	var descargaImagen= new Image();
	
	descargaImagen.onload=function(){
		
		$("#galeria-imagen-"+index)
			.delay(1000)
			.attr("src",url)
			.attr("alt","Transition Festival Open Air Psychedelic Music and Dance Experience "+index)			
			.removeClass("galeria-imagen-precarga")
		;
		
		$("#galeria-enlace-"+index)
			.attr("href",url)
			.attr("data-lightbox","galeria-festival")
		;
		
		$("#galeria-enlace-"+index)
			.unbind("click")
		;
		
		$("#galeria-imagen-loader-fondo-"+index)
			.fadeOut(1000)
		;
	};
	
	descargaImagen.src=url;
}

/*
function muestraPopUp(url){
	$("#popup-imagen").attr("src",url).show();
	$("#popup-div-overlay").fadeIn(1000);
	document.getElementById("div-redes-sociales").focus(); 
}

function ocultaPopUp(){
	$("#popup-imagen").fadeOut(500);
	
	window.setTimeout(function(){
		$("#popup-imagen").attr("src","#");
	},	500);
	
	$("#popup-div-overlay").fadeOut(1000);
}
*/

function getURLBase(){
	var urlBase=window.location.href;	
	urlBase=urlBase.substring(0,urlBase.indexOf("index.php"));
	return urlBase;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

