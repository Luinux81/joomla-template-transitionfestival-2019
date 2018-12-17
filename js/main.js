jQuery(document).ready(function(){
	//you can now use $ as your jQuery object.
	//jQuery(".menuitem-nav-link").addClass("fuenteMenu");  
	
	
	//jQuery("#contenedorTop").hide().fadeIn(1000);
	
	if(!mostarVideo()){
		$("#div-overlay").hide();
		$("body").css("overflow-y","scroll");
		$("#video-contenedor > iframe").remove();
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
		jQuery("#div-back").css("display","none");
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
	
	var lang=jQuery(".lang-active a").attr("href");
	if (lang.search("/es")>-1){
		jQuery(".menuitem-destacado").attr("href","./index.php?option=com_content&view=article&id=5");		
		cambiaIdiomaMenu("es");
		
	}
	else if(lang.search("/en")>-1){
		jQuery(".menuitem-destacado").attr("href","./index.php?option=com_content&view=article&id=108");		
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
	var index=url.indexOf("?option=com_content");
	
	if(index>0){
		return false;		
	}
	else{
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
}


function esGaleria(){
	var url=window.location.href;
	
	return (url.search("option=com_content&view=article&id=107")>-1);
}

function resaltaItemMenuActual(){
	var url1 = window.location.href; 
	var url2 = "";

	url1=url1.substring(url1.lastIndexOf("?"));

	jQuery(".menuitem-nav-link").each(function() {
		url2=this.href;
		url2=url2.substring(url2.lastIndexOf("?"));

		//console.log("URL1: "+url1+"\n"+"URL2: "+url2);

		if(url1 == url2) { 
			jQuery(this).addClass("menuitem-actual");
			jQuery(this).removeClass("menuitem-destacado");
		}
		else{
			jQuery(this).removeClass("menuitem-actual");
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
	window.location.href=url+"?video=0";	
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

