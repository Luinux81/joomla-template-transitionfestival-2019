jQuery(document).ready(function(){
	//you can now use $ as your jQuery object.
	//jQuery(".menuitem-nav-link").addClass("fuenteMenu");  
	
	
	//jQuery("#contenedorTop").hide().fadeIn(1000);
	
	if(!mostarVideo()){
		$("#div-overlay").hide();
		$("body").css("overflow-y","scroll");
		$("#video-contenedor > iframe").remove();
	}
	else{
		$("#video-contenedor").append("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/-2y2MPoDFvI?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
		$("#div-overlay").fadeIn(1000);
	}
	
	jQuery("#contenedorTop a, .item a").click(function(){
		jQuery("#contenedorTop").fadeOut(750);	
		jQuery("#div-contenido").fadeOut(500);
		jQuery("#div-cabecera-home").fadeOut(500);
		jQuery("#div-redes-sociales").fadeOut(500);
	});
	
	jQuery(".item").hide();
	
	jQuery("#div-contenido").hide().fadeIn(1000);
	
	var dias=diasRestantes();

	jQuery("#dias-numero").html(dias);
	
	$("#contenedorTop").hide().delay(500).fadeIn(500);
	
	$("#div-redes-sociales").hide().delay(1000).fadeIn(500);
	
	if(mostrarCabecera()){		
		$("#div-cabecera-home").hide().delay(1000).fadeIn(500);
		$("#div-back").css("display","none");
	}
	else{
		jQuery("#div-cabecera-home").hide();
	}
	
	jQuery(".item").each(function(index){
		jQuery(this).delay(1000+(index*500)).fadeIn(1000);
	});
	
	
	resaltaItemMenuActual();
	
	if(!esGaleria()){
		jQuery(".item-page").parent().addClass("anchoArticulo");
	}
	else{
		jQuery(".item-page").parent().css("width","85% !important");
		jQuery(".imagegalleryplg img").addClass("imagegallery-sin-marco");
	}
 
/*	
	jQuery(".imagegalleryplg img").each(function(){
		jQuery(this).on('load', function(){
			jQuery(this).removeClass("imagegallery-sin-marco");
			jQuery(this).addClass("imagegallery-con-marco");
		});
	});
*/
	
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
	
	return (url.indexOf("option=com_fwgallerylight")>-1);
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
	var festival=new Date('2018-04-25').getTime();
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
    document.getElementById("div-menu-mobile").style.width = "250px";
}

function closeNav() {
    document.getElementById("div-menu-mobile").style.width = "0";
}

function mostarVideo(){
	var url=window.location.href;

	if(url.search("video=0")>-1){
		return false;
	}
	else{
		return esHomePage(url);
	}
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
			//console.log(data);
			
			maxPagina=Math.ceil(data.length/maxIndexPorPagina);
			
			
			$.each(data,function(key,value){
				if(index>=minIndex){
					if(index%columnas==0){
						indexFila++;					
						$("#div-galeria").append(addFila(indexFila));					
					}
					$("#div-galeria-fila-"+indexFila).append(addItem(index,urlBase,value));					
					$("#galeria-imagen-"+index)
						.addClass("efecto-sombra-360-blanco")
						.mouseenter(function(){
							//$(this).css("margin","0px")
							$(this)
								.css("width","95%")
								//.css("object-position","0% 50%")
								;
						})
						.mouseleave(function(){
							//$(this).css("margin","10px")
							$(this)
								.css("width","80%")
								//.css("object-position","center")
								;
						});				
				}
				index++;
				
				if(index>=maxIndex){
					return false;
				}
				//console.log(value);
			});
			
			$(".galeria-item").addClass("forma-borde-1");
			$(".galeria-imagen").addClass("forma-borde-1");
			
			$("#div-galeria").append("<div id='div-paginacion' class='fuenteMenu' ></div>");
			
			for(var i=1;i<=maxPagina;i++){
				var actual="";
				if(i==paginaActual){
					actual=" class='menuitem-actual' ";
				}
					$("#div-paginacion").append("<span><a href='./?option=com_content&view=article&id=188&pagina="+i+"' "+actual+">"+i+"</a></span>");
			}
			
			$("#div-contenido").removeClass("anchoArticulo");
			
			$(".galeria-item")
				.css("width",anchoColumna+"%")
				.css("max-height","200px")
				;
		});
		
	}
}

function addFila(index){
	var res="<div id='div-galeria-fila-"+index+"' class='galeria-fila'></div>";
	
	return res;
}

function addItem(index,urlBase,value){
	var item="<div class='galeria-item'>";
	item=item+getImagen(index,urlBase+"/"+value);
	item=item+"</div>";
	
	return item;
}

function getImagen(index,url){
	/*
	$.get(url,function(data){
		$("#galeria-imagen-"+index).attr("src",url);
		$("#galeria-imagen-"+index).attr("alt","Transition Festival Open Air Psychedelic Music and Dance Experience "+index);
		$("#galeria-imagen-"+index).addClass("efecto-sombra-360");
	});
	*/
	return "<img id='galeria-imagen-"+index+"' class='galeria-imagen' src='"+url+"' alt='Transition Festival Open Air Psychedelic Music and Dance Experience "+index+"'/></div>"	
}

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
