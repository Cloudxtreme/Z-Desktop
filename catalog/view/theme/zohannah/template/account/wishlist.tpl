<?
/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/
echo $header; ?>

<!--
// PAGE CSS
-->
<style type="text/css">
.nix-hero{background:url(/catalog/view/theme/zohannah/image/campaigns/about.jpg) no-repeat center;background-size:cover}
.sidebar-support h4{padding-left:0}
.home .nix-hero-container{height:450px}
.page-container{margin-top:25px;margin-bottom:25px}
#column-right{float:right}
@media only screen and (max-width:750px){
	.home .nix-hero-container{height:250px}
	#column-right{float:none}
}
.form-control{border-radius:0}
.xf{border-radius:0;text-transform:uppercase;border:0;margin:3px;text-decoration:none !important;padding:3px !important}
.text-center{font-weight:bold;padding:9px;text-transform:uppercase}
</style>

<!--
// HTML
-->
<div class="center center-shadow nix-hero secondary-hero">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
            <h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
            <p style="color:#fff">Manage your wishlist.</p>
         </div>
      </div>
   </div>
</div>

<div class="container page-container work-here-container">
   
   <div class="row">
   
      <div id="generalcontent" class="primary-content">
        <div align="justify">
         
         <!-- oc_zohannah_Wishlist -->
         
        <?php if ($success) { ?>
            <div class="errorformapps"><i class="fa fa-check-circle"></i> <?php echo $success; ?>
                <button type="button" class="close" data-dismiss="alert">&times;</button>
            </div>
        <?php } ?>
         
         
         
         
         
         
         
<?php if ($products) { ?>



      <table class="table table-bordered table-hover" style="background:#eee;width:100%">
        <thead>
          <tr>
            <td class="text-center" style="text-decoration:underline"><?php echo $column_image; ?></td>
            <td class="text-center" style="text-decoration:underline"><?php echo $column_name; ?></td>
            <td class="text-center" style="text-decoration:underline"><?php echo $column_price; ?></td>
            <td class="text-center" style="text-decoration:underline"><?php echo $column_action; ?></td>
          </tr>
        </thead>
        <tbody>
        
          <?php foreach ($products as $product) { ?>
          <tr>
            
            <td class="text-center">
            <?php if ($product['thumb']) { ?>
                <a href="<?php echo $product['href']; ?>"><img style="width:80px" src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>" title="<?php echo $product['name']; ?>" /></a>
            <?php } ?>
            </td>
            
            <td class="text-center">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
                <br />        
                <?php echo $product['model']; ?>
            </td>
                
            <td class="text-center"><?php if ($product['price']) { ?>
              <div class="price">
                <?php if (!$product['special']) { ?>
                <?php echo $product['price']; ?>
                <?php } else { ?>
                <b><?php echo $product['special']; ?></b> <s><?php echo $product['price']; ?></s>
                <?php } ?>
              </div>
              <?php } ?>
             </td>
              
            <td class="text-center">
            	<button style="background:#000" type="button" onclick="cart.add('<?php echo $product['product_id']; ?>');" data-toggle="tooltip" title="<?php echo $button_cart; ?>" class="xf btn btn-primary"><i class="fa fa-shopping-cart"></i>  </button>
                <br />
                <a style="background:#e72d34;color:#fff" href="<?php echo $product['remove']; ?>" data-toggle="tooltip" title="<?php echo $button_remove; ?>" class="btn btn-danger xf"><i class="fa fa-times"></i> </a>
             
             </td>
              
              
          </tr>
          <?php } ?>
        </tbody>
      </table>
      
      
      <?php } else { ?>
      	<center><p><?php echo $text_empty; ?></p></center>
      <?php } ?>         
         
        
        <!-- oc_zohannah_Wishlist -->
            
                   
        </div>
      </div>
      
      <br />
      
      <?php echo $column_right; ?>
      
   </div>
</div>

<?
echo $footer;
?>