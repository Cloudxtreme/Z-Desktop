<?php
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
// CSS
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
.btn-primary{border-radius:0;border:0;background:#000;text-transform:uppercase}
.btn-primary:hover{background:#333 !important}
.btn-default{border-radius:0;text-transform:uppercase}
.btn-danger,.btn-info{text-decoration:none !important;padding:3px 5px;border-radius:0;text-transform:uppercase;font-size:11px;text-decoration:none}
.btn-danger a, .btn-info a{text-decoration:none !important} 
.top-table{background:#5C5757;color:#fff;padding:3px;margin:3px}
.bottom-table{background:#eaeaea;color:#000;padding:3px 5px;margin:3px}
</style>


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
         <div align="justify"><?php echo $description; ?></div>
      </div>
      
      <div class="sidebar-container sidebar-support">
         <h4 class="support-divider">Need Assistance?</h4>
         <span class="support-icon phone">0800 234 7003</span>
         <div class="support-inset">
            <span class="support-icon clock">
            Monday - Thursday<br>
            <em>8:00 - 17:00</em>
            </span>
            <span class="support-icon clock">
            Friday<br>
            <em>8:00 - 16:00</em>
            </span>
         </div>
         <a href="mailto:cs@zohannah.com" class="support-icon envelope"> cs@zohannah.com</a>
         <a href="https://www.facebook.com/zohannahshop" class="support-icon side-facebook" target="_blank">Facebook Message</a>
      </div>
      
   </div>
</div>
<?php echo $footer; ?> 