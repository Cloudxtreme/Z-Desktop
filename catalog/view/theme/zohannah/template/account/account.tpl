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
</style>

<!--
// HTML
-->
<div class="center center-shadow nix-hero secondary-hero">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
            <h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
         </div>
      </div>
   </div>
</div>

<div class="container page-container work-here-container">
   
   <div class="row">
   
      <div id="generalcontent" class="primary-content">
         <div align="justify">
         <?php echo $content_top; ?>         
         Please make a selection from account navigation menu.         
         </div>
      </div>
      
      <br />
      
      <?php echo $column_right; ?>
      
   </div>
</div>

<?
echo $footer;
?>