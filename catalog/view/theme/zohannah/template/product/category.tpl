<?php
/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/
// HEADER 
echo $header;
$shopall=$_GET["path"];
?>

<?
// CSS
if($shopall=='59'){} else {?>
<!--
// SUBCATEGORY
-->
<style>
@media only screen and (max-width:750px) {
.pcp .nix-hero-container{height:125px}
}
</style>
<? } ?>

<div class="center center-shadow nix-hero secondary-hero" data-height="500" <?php if ($thumb) { ?>style="background:url(<?php echo $thumb; ?>)"<?php } ?>>
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
            <h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
            <span class="nix-hero-copy-text">
            <?
            // CATEGORY DESCRIPTION
            $category_seo_description = preg_replace('/<p[^>]*>(.*)<\/p[^>]*>/i', '$1', $description);
            ?>
            <?php echo $category_seo_description; ?>
            </span>
            <?php if ($categories) { ?>
               <?php if (count($categories) <= 5) { ?>
                 <div class="col-sm-3 nosidepadding">
                   <ul>
                     <?php foreach ($categories as $category) { ?>
                     <li><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a></li>
                     <?php } ?>
                   </ul>
                 </div>
               <?php } else { ?>
               <?php foreach (array_chunk($categories, ceil(count($categories) / 4)) as $categories) { ?>
                 <div class="col-sm-3 nosidepadding">
                   <ul>
                     <?php foreach ($categories as $category) { ?>
                     <li><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a></li>
                     <?php } ?>
                   </ul>
                 </div>
               <?php } ?>
               <?php } ?>
               <?php } ?>           
         </div>
      </div>
   </div>
</div>

<?
// BREADCRUMBS
if($shopall=='59'){

} else {
?>
<div class="zo-breadcrumb" id="breadcrumb-clp-wrapper">
   <div class="breadcrumbs-inner" id="breadcrumbs">
      <?php foreach ($breadcrumbs as $breadcrumb) { ?>
      <div class="schema-wrapper" itemtype="http://data-vocabulary.org/Breadcrumb">
      <a itemprop="url" class="hidden-xs breadcrumbs-item" href="<?php echo $breadcrumb['href']; ?>">
      <span itemprop="title">
      <? if ( $breadcrumb['text']=='<i class="fa fa-home"></i>'){
      	echo 'HOME';
      } else {
      	echo $breadcrumb['text'];
      }
      ?>
      </span>
      </a>
      </div>
      <span class="breadcrumbs-separator hidden-xs">/</span>
      <?php } ?>
   </div>
</div>
<? } ?>

<!--
// FILTERING DESKTOP
-->
<?php if ($products) { ?>
<div class="container prod-filter-bar nix-lg-cont container-fluid hidden-xs hidden-sm">
<div class="row">
   <div class="filter-inner col-sm-12">
   
   <span class="hiddenmobile filter-up zohannah_filtering filter-view-by uppercase en_UK">
   	View By:
   </span>
   <ul class="hiddenmobile filter-by filter-up sort-track">
      <li class="placeholder uppercase">
         Featured
      </li>
      <?php
      $filterx=0;
      foreach ($sorts as $sorts) {
      $filterx++ ?>
         <?php if ($sorts['value'] == $sort . '-' . $order) {
         // ACTIVE CLASS	
         ?>
            <li class="sort-options option_filter_zohannah_<?php echo $filterx; ?>">
            <a class="uppercaseactive" href="<?php echo $sorts['href']; ?>">
               <?php echo $sorts['text']; ?>
            </a>
            </li>
         <?php } else { ?>
            <li class="sort-options option_filter_zohannah_<?php echo $filterx; ?>">
            <a class="uppercase" href="<?php echo $sorts['href']; ?>">
            	<?php echo $sorts['text']; ?>
            </a>
            </li>
         <?php } ?>
      <?php } ?>
   </ul>
   </div>
   </div>
   </div>
   <?php } ?>
   
<!--
// FILTERING MOBILE
-->
<?php if ($products) { ?>
<div class="container prod-filter-bar nix-lg-cont container-fluid zohfiltering_mobile">
	<div class="row">
      <div class="filter-inner col-sm-12">
         <a href="#" class="nix-hero-button button-filter-mobile">FILTER</a>
      </div>
   </div>
</div>
<?php } ?>   
   
<!--
// EMPTY PAGE
-->
<?php if (!$categories && !$products) { ?>
<div class="container-fluid products-display" style="padding:30px !important">
   <div class="row nix-pcp-container">
      <div class="landing_products_container full">
         <div id="category-products" class="row category-products product-container-group">
            <center><h4 style="margin:0px !important;font-size:25px"><?php echo $text_empty; ?></h4></center>
         </div>
      </div>
   </div>
</div>
<?php } ?>

<?php if ($products) { ?>
<!--
// PRODUCT LISTING 
-->
<div class="container-fluid products-display">
  <div class="row nix-pcp-container">
      
      <div class="landing_products_container full">
      <div id="category-products" class="row category-products product-container-group">
      
               <?php foreach ($products as $product) { ?>
               <!-- 
               // PRODUCT
               -->
               <div data-name="<?php echo $product['name']; ?>" class="nix-pcp-col sorted productZohannahBox" id="zProduct_<?php echo $product['product_id']; ?>">
               <div class="product-container product-container-multi">
               <div class="product-inner">
               
                  <div class="display-prod">
                     <div class="prod-cta">
                        <div class="prod-cta-group">
                        <div class="cta-heart" onclick="wishlist.add('<?php echo $product['product_id']; ?>');">
                           <span>Favourite</span>
                        </div>
                        <div data-new-product="false" class="new-badge cta-new-color active">
                           <span>NEW COLOR</span>
                        </div>
                        <div class="cta-cart launch-quickshop" onclick="javascript:location.href='<?php echo $product['href']; ?>'">
                           <span>View</span>
                        </div>
                        </div>
                     </div>
                     
                     <div class="prod-images">
                        <div class="item">
                           <a href="<?php echo $product['href']; ?>"><img data-src="<?php echo $product['thumb']; ?>" src="<?php echo $product['thumb']; ?>" class="img-responsive"></a>
                        </div>
                     </div>
                  
                     <div class="prod-details">
                        <p class="title"><?php echo $product['name']; ?></p>
                        <p class="price">
                           <span><?php if ($product['price']) { ?><?php echo $product['price']; ?><? } ?></span>
                           &nbsp;|&nbsp;
                           12 Colors
                        </p>
                     </div>
                     
                  </div>
               
               </div><!--// product-inner -->
               
               <a class="product-hotspot textindent bottom" href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
               
               </div>
               </div>
               
               <? } ?>
      	</div>
      </div>
     
   </div>
</div>
<!-- 
// END PRODUCT
-->
<? } ?>
      
</div>
</div>

<!-- 
// CATEGORY PDP JS TRACKER
-->
<script>
jQuery('body').addClass('pcp');
</script>
<?php echo $footer; ?> 