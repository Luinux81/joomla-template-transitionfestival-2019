<?php

defined('_JEXEC') or die;



$doc = JFactory::getDocument();

/* public function addStyleSheet(string $url, array $options = array(), array $attribs = array()) */

$doc->addStyleSheet($this->baseurl . '/media/jui/css/bootstrap.min.css');
$doc->addStyleSheet($this->baseurl . '/media/jui/css/bootstrap-responsive.css');

$doc->addStyleSheet('templates/' . $this->template . '/css/style.css');
$doc->addStyleSheet('templates/' . $this->template . '/css/lightbox.css');

/* public function addScript($url, $type = "text/javascript", $defer = false, $async = false) */
$doc->addScript('templates/' . $this->template . '/js/main.js', 'text/javascript');


$app = JFactory::getApplication();
$menu = $app->getMenu();
$lang = JFactory::getLanguage();
if ($menu->getActive() == $menu->getDefault($lang->getTag())) {
	$frontpage=true;
}
else {
	$frontpage=false;
}

$path_template   = JURI::base(true).'/templates/'.$app->getTemplate().'/';

?>
<!DOCTYPE html>
<html>
<head>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript" ></script>
    <jdoc:include type="head" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0" > 
	<?php //<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">  ?>
  	
    <meta property="og:image" content="http://www.transitionfestival.org/images/2019/transition_logo_multi.jpg"/>
    <meta property="og:title" content="Transition Festival"/>

  	
	<link href="https://fonts.googleapis.com/css?family=Mystery+Quest" rel="stylesheet">

	
</head>
<body>  	

<?php if(true){ ?>

<div id="div-imagen-rotatoria">
	<img src="<?php echo $path_template . "images/fondo_rot.png" ?>" id="imagen-rotatoria">
</div>

<div id="menu-mobile-div-expand" class="sidenav menu-mobile">
	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	<a href="./index.php"><img id="logo-central-mobile" src="<?php echo $path_template . "images/logo_central.png" ?>"/></a>
	<a class="fuenteMenu" href="./index.php?video=0">HOME</a>
	<a id="menuitem-mob-festival" class="fuenteMenu" href="./index.php?option=com_content&view=category&id=8">FESTIVAL</a>
	<a id="menuitem-mob-guia" class="fuenteMenu" href="./index.php?option=com_content&view=category&id=9">GUIA</a>
	<a id="menuitem-mob-lugar" class="fuenteMenu" href="./index.php?option=com_content&view=category&id=10">LUGAR</a>
	<a id="menuitem-mob-entradas" class="fuenteMenu menuitem-destacado" href="./index.php?option=com_content&view=article&id=5">ENTRADAS</a>
	<a id="menuitem-mob-galeria" class="fuenteMenu" href="./index.php?option=com_content&view=article&id=188" >GALERIA</a>
	<a id="menuitem-mob-contacto" class="fuenteMenu" href="./index.php?option=com_content&view=category&id=11">CONTACTO</a>
	<div id="menuitem-mob-div-idioma">
		<jdoc:include type="modules" name="position-0" style="html5" />
	</div>
</div>

<div id="contenedorTop" class="">
	<div id="menu-mobile-div" class="menu-mobile" >
		
		<img id="menu-mobile-icon-i" class="menu-mobile-imagen-lateral" src="<?php echo $path_template . "images/logo-gold.png" ?>" onclick="openNav()"/>
		<img id="menu-mobile-logo" src="<?php echo $path_template . "images/logo_central.png" ?>" onclick="openNav()"/>
		<img id="menu-mobile-icon-d" class="menu-mobile-imagen-lateral" src="<?php echo $path_template . "images/logo-gold.png" ?>" onclick="openNav()"/>
		<div id="menu-mobile-div-info">
		<span>14-21 MAY 2019</span>
		<span>DOÑANA, SPAIN</span>
		</div>
		
		
	</div>
	
	<div id="div-top-news" class="menu-normal">
		<a href="./index.php?video=0" >	<img src="<?php echo $path_template . "images/news.png" ?>" /> </a>
	</div>
	<div id="div-top-menu" class="menu-normal">
		<div id="div-top-menu-izq">
			<a id="menuitem-festival" class="menuitem-nav-link fuenteMenu" href="./index.php?option=com_content&view=category&id=8">FESTIVAL</a>
			<a id="menuitem-guia" class="menuitem-nav-link fuenteMenu" href="./index.php?option=com_content&view=category&id=9">GUIA</a>
			<a id="menuitem-lugar" class="menuitem-nav-link fuenteMenu" href="./index.php?option=com_content&view=category&id=10">LUGAR</a>
		</div>
		<div id="div-top-menu-centro">
		<a href="./index.php">	<img id="logo-central" src="<?php echo $path_template . "images/logo_central.png" ?>"/>	</a>
		</div>
		<div id="div-top-menu-der">
			<a id="menuitem-entradas" class="menuitem-nav-link menuitem-destacado fuenteMenu" href="./index.php?option=com_content&view=article&id=5">ENTRADAS</a>
			<a id="menuitem-galeria" class="menuitem-nav-link fuenteMenu" href="./index.php?option=com_content&view=article&id=188" >GALERIA</a>
			<a id="menuitem-contacto" class="menuitem-nav-link fuenteMenu" href="./index.php?option=com_content&view=category&id=11">CONTACTO</a>
		</div>
	</div>
	<div id="div-top-idioma" class="menu-normal">
		<jdoc:include type="modules" name="position-0" style="html5" />
	</div>
	<div id="div-back">			
		<img id="img-back" src="<?php echo $path_template . "images/back.png" ?>" onclick="history.back();" />			
	</div>

</div>
	
	
<div id="contenedorMid" class="">

	<div id="div-cabecera-home" class="div-cabecera">
		<div id="div-cabecera-slider" class="div-cabecera">
			<jdoc:include type="modules" name="position-1" style="html5" />	
		</div>

		<div id="div-cabecera-info" class="div-cabecera">
			<div id="div-cabecera-info-izq" class="div-cabecera div-cabecera-info">
				<span class="info-cabecera-lateral-izq">14-21 MAY 2019</span>
			</div>
			<div id="div-cabecera-info-centro" class="div-cabecera div-cabecera-info">
				<img class="imagen-cabecera-info-centro spin" src="<?php echo $path_template . "images/marco1.png" ?>"></img>	
				<img class="imagen-cabecera-info-centro <?php //anti-spin ?> imagen-cabecera-transparente transparencia-animada"  src="<?php echo $path_template . "images/marco2.png" ?>"></img>	
				<div class="texto-cabecera-info-centro">
					<p class="info-cabecera-central">Quedan <br><span class="dias-restantes">0</span><br>dias</p>
				</div>
			</div>
			<div id="div-cabecera-info-der" class="div-cabecera div-cabecera-info">
				<span class="info-cabecera-lateral-der">Doñana, Spain</span>
			</div>
		</div>
	</div>
	
	<div id="div-contenido">
		<jdoc:include type="component" />
	</div>
	
</div>

<div id="div-redes-sociales" style="">
	<a href="https://www.youtube.com/channel/UCUZ0gYELad1YgZLbI7P-0dQ" target="_blank" rel="noopener">
		<img class="img-red-social" src="<?php echo $path_template . "images/redes_sociales/youtube.png" ?>" />
	</a>
	<a href="https://www.facebook.com/TransitionFestival/" target="_blank" rel="noopener">
		<img class="img-red-social" src="<?php echo $path_template . "images/redes_sociales/facebook.png" ?>" />
	</a>
	<a href="https://www.instagram.com/transition.festival/" target="_blank" rel="noopener">
		<img class="img-red-social" src="<?php echo $path_template . "images/redes_sociales/instagram.png" ?>" />
	</a>
	<a href="https://twitter.com/transition_crew" target="_blank" rel="noopener">
		<img class="img-red-social" src="<?php echo $path_template . "images/redes_sociales/twitter.png" ?>" />
	</a>
	<a href="./index.php?option=com_content&view=article&id=119" target="_parent">
		<img class="img-red-social" src="<?php echo $path_template . "images/redes_sociales/email.png" ?>" />
	</a>
</div>

<div id="div-overlay" style="display:none;" onclick="closeVideo()">
	<div id="video-contenedor">
		<a href="javascript:void(0)" id="btnCerrarVideo" onclick="closeVideo()">x</a>		
		<?php // añadir aqui el video con javascript ?>
	</div>
</div>
<?php 
	}
	else{
?>		
<?php 
	/*
	<div id="div_imagen_previa">
		<img src="./images/2018/FONDO2019-compressor.jpg" id="imagen_previa_web" style="width:100%;display:none;">
	</div>
  
  	<div id="posicionadorShop" style="position:absolute; top:20%; width:100%;">
  
  		<div style="width:75%; text-align:left; margin:0 auto;">
  			<iframe src="https://eventbrite.com/tickets-external?eid=46356135449&ref=etckt" frameborder="0" height="955" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
  			<div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ><a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="https://www.eventbrite.com/">Powered by Eventbrite</a></div></div>
  
  
  		<div style="display:none;width:50%;margin:0 auto;">
  			
  		</div>  		
  	</div>
	*/
?>	
<?php	} ?>


<script src="<?php echo $path_template . "js/lightbox.js"; ?>"></script> 
<script>
	lightbox.option({
		<?php //'disableScrolling': true, ?>
		'alwaysShowNavOnTouchDevices': true	
	})
</script>
</body>

</html>