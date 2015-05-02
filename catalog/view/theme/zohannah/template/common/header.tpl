<!DOCTYPE html><html lang="en"><head>

<!--

,888888888D8DI........ .8, .+8 .......~88D88888 .?88888888,........ 8......... 8D888=....~8D8888D..:88D88:....+D88888D........ D ........ 88888888O..O8888D88O..
,887......888........,8:......D7 ........?88........888............=8I .......... D88.......Z8  .......888.......O8 .......... 88 .......  ..888........888...  
,D?......,8D........ 87 .......8+. ......?88........888............888 ...........888D.......8..... ...O888...  ..?.  ...  .. 888 ,........ .888.  .....888.  ..
,8 ..... 88+........88. ...... $8........?88....... 888.......... :.88+...........8 888 .... 8.........O,88Z  ... :.  ...  .  :888..  ...  ..888....  ..888...  
,7.... .88$........,88 ....... 788.......?88....... 888.......... 8.I88. .........8..88+.... 8......  .O.+D8:.... :.  ...  . Z.78D..  ..... .888.  .    888.    
,......888 ........+88  .......=88.......?88.....   888.......... .. 88I..........8. ~88~. . 8.........O. ?88 ... :........  =..888 .........888........D88.....
..... $8D. ........D88  .......:8D.......?8888888888888......... 8.. $88 .........8...IDD  . 8.........O...888. . :.........O...I88 .........888O8888888O88.....
.....,88,... . ....888  .......:88~......?88....... 888......... : . .88..........8....DD8.. 8  .......O... 888.  :.........?....8O8.........888........888.....
.... D87....... ...888  ...... :88.......?88....... 888.........8.....888.........8.....888  8.........O.....D88. :........=.....88O  .......888........888.....
....888 .... $. ...888  .......=D8.......?88....... 888.......  =.....,88  .......8.....:88$ 8.........O.... 78D: :....... Z  ....88~........888........888.....
...$D8 ..... 8. ...:88  ...... 78D.......?88....... 888........$,......D8O........8......Z8D.D.........O......Z88,:...... :...... 888........888........888.....
. +88.......I8. ....88. .......78= ......?88....... 888........O........88........8...... 8888.........O...... 888:...... O...... .8O=.......888........888.....
..88:....   88. .... 8I ...... 8O........?88....... 888.....  8.........8O8 ......8.  .....888.. .. .. 8 .......88:...  . ......   88D. ... .888........888...  
.88D    ..=888. ..... 8~  .  .8Z ....... ?88  ... . 888. ....,8... ... .O88 .  ..,8.  ......88..... . 78.........8:...   8I   .... .88    ...888 . .  ..D88   ..
78888888888888 ........:8,,.?D  ......:88888888 .?88888888 I88888O ...8888888?.888888D......,8.....~8888888......~:...ZD88888 .. 88888888.888888888. 88888888O..
................................................................................................................................................................
...................................................................................      .. ..   .. .... ..   ...        .. ....            ..        .. ..     
-->

<title><?php echo $title; ?></title>
<meta name="keywords" content="<?php echo $keywords; ?>">
<meta name="description" content="<?php echo $description; ?>">

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="google-site-verification" content="">
<meta name="robots" content="index, follow">
<meta property="og:description" content="">
<meta property="og:title" content="">
<meta property="og:url" content="">
<meta property="og:image" content="">
<meta property="og:type" content="product">
<meta property="og:site_name" content="">
<meta property="fb:page_id" content="">

<link href="//cdn.zohannah.com/icon/zblack.png" rel="shortcut icon" type="image/x-icon">
<link href="//cdn.zohannah.com/icon/zblack.png" rel="icon" type="image/vnd.microsoft.icon">
<link href="//cdn.zohannah.com/icon/zblack.png" rel="icon" type="image/x-icon">
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="catalog/view/theme/zohannah/css/jquery-ui-timepicker-addon.css">
<link rel="stylesheet" href="catalog/view/theme/zohannah/css/swiper.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="catalog/view/theme/zohannah/css/zohannah.css">
<link rel="stylesheet" href="catalog/view/theme/zohannah/css/fix.css">

<!--[if lte IE 9]>
<script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="//oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<script src="catalog/view/theme/zohannah/js/polyfills/matchMedia.js"></script>
<script src="catalog/view/theme/zohannah/js/polyfills/matchMedia.addListener.js"></script>
<script src="catalog/view/theme/zohannah/js/polyfills/respond.js"></script>
<![endif]-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="catalog/view/theme/zohannah/js/vendor/modernizr-zr.min.js"></script>
<script src="catalog/view/theme/zohannah/js/swiper.min.js"></script>

<base href="<?php echo $base; ?>">

</head>

<body class="nixon-desktop zohannah_application home en_UK promo">

<!--
// ZOHANNAH WRAPPER
-->
<div id="page" class="nix-cart-pusher zohannah-engine-<?php echo md5(rand())?>">

<button type="button" id="mobile-nav-button" class="">
   <span class="icon-bar"></span>
   <span class="icon-bar"></span>
   <span class="icon-bar"></span>
</button>
<div class="nix-fixed-header-wrapper">
   <div class="nix-fixed-header" id="nix-fixed-header">
   
   <div class="nix-cart pull-right" id="fixed-header-cart">
      <a href="<?php echo $shopping_cart; ?>" class="nix-cart-toggler is_button">
         <span>My Cart</span> <b class="caret square" id="cart_products_number"><?php echo $cart; ?></b>
      </a>
   </div>
   
   <a class="nix-favorites pull-right" href="<?php echo $wishlist; ?>">
   	<span>My Favourites</span> <b class="caret square" id="favorite-count">0</b>
   </a>
   
   <?php if ($logged) { ?>
      <a class="nix-login pull-right" href="<?php echo $account; ?>">
         <?php echo $text_account; ?>
      </a>
      <a class="nix-login pull-right" href="<?php echo $logout; ?>">
         <?php echo $text_logout; ?>
      </a>
   <?php } else { ?>
      <a class="nix-login pull-right" href="<?php echo $login; ?>" rel="nofollow">
      <?php echo $text_login; ?>
      </a>
   <?php } ?>
   
   </div>
</div>
<div id="drop-down-minicart" class="hide">
   <div id="minicart-inner">
   <!-- AJAX POWERED -->
   </div>
</div>

<div class="navbar nix-navbar">
<div id="navbar-tablet-bg"></div>
<div class="navbar-overlay"><div class="nix-close"></div></div>
   <div class="hero-nav-container">
      <div class="navbar-header">
         <!--
         // LOGO
         -->
         <a class="navbar-brand" href="<?php echo $home; ?>" title="<?php echo $name; ?>">
            <h1 class="freight logobrand">ZOHANNAH</h1>
         </a>
         <a href="<?php echo $shopping_cart; ?>" rel="nofollow" class="navbar-mobile-cart pull-right">
            <span class="mobile-icon"></span>
         </a>
      </div>  
      <!--
      // MAIN NAV
      -->  
      <div id="nav-container">
         <nav id="nav-primary-wrapper" role="navigation">
         <ul class="nav-primary nix-nav-list">
   
            <li class="nav-primary-item nav-secondary">
            	<a href="#" class="nix-nav-submenu-link">Shop all</a>
            </li>
                  
            <?php if ($categories) { ?>
              	<?php foreach ($categories as $category) { ?>
                     
                     <li class="nav-primary-item nav-secondary"><a href="<?php echo $category['href']; ?>" class="nix-nav-submenu-link"><?php echo $category['name']; ?></a></li>
                     
               <? } ?>
            <? } ?>
               
           </ul>
         </nav>
      </div>
   </div>
</div>

<!-- 
// MOBILE NAV
-->
<div class="nix-main-menu-container inner mobile-zohannah-menu-wrapper">
<div class="panel-group" id="accordion-inner">

<?php if ($categories) { ?>
<?php foreach ($categories as $category) { ?>
   
   <?php if ($category['children']) { ?>
   
	<!-- MAIN CATEGORY -->
   <div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion-inner" href="#collapse-inner1" class="collapsed"><?php echo $category['name']; ?></a>
         </h4>
      </div>
   </div>
      <div id="collapse-inner1" class="panel-collapse collapse">
         <div class="panel-body panel-level2">
            <?php foreach (array_chunk($category['children'], ceil(count($category['children']) / $category['column'])) as $children) { ?>
               <?php foreach ($children as $child) { ?>
               
               <!-- SUB LINKS -->
               <div class="panel-heading">
                  <h4 class="panel-title">
                     <a href="<?php echo $child['href']; ?>" class="linked"><?php echo $child['name']; ?></a>
                  </h4>
               </div>
               
               <?php } ?>
            <?php } ?>
         
         </div>   
      </div>
      
   <? } else { ?>
   
   <!-- MAIN NO SUB CATEGORY -->
   <div class="panel panel-default">
      <div class="panel-heading">
      <h4 class="panel-title-empty">
      <a href="<?php echo $category['href']; ?>" class="collapsed"><?php echo $category['name']; ?></a>
      </h4>
      </div>
   </div>
   
   <? } ?>
   
<? } ?>
<? } ?>

	<!-- PLAIN LINK -->
   <div class="panel panel-default">
      <div class="panel-heading">
         <h4 class="panel-title-empty">
         <a href="#ZOHANNAH" class="collapsed">#ZOHANNAH</a>
         </h4>
      </div>
   </div>

</div>
</div>