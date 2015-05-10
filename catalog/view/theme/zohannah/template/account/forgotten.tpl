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
.home .nix-hero-container{height:650px}
.page-container{margin-top:25px;margin-bottom:25px}
#column-right{float:right}
.col-sm-6{font-color:#fff;text-align:left}
@media only screen and (max-width:750px){
	#column-right{float:none}
	.home .nix-hero-container{height:450px}
}
.nix-hero-copy h1{font-size:29px}
.col-sm-6 h2{font-size:21px}
.nix-hero-button{background:#fff;color:#000}
.nix-hero-button:hover{color:#fff;background:#000}
.nix-hero-button{border:0 !important;border-radius:0}
.nix-hero-copy h1, .nix-hero-copy p, .col-sm-6 h2{color:#fff}
.col-sm-6 label,.col-sm-2 label, .col-sm-2,.col-sm-6 a{text-transform:uppercase}
</style>

<!--
// HTML
-->
<div class="center center-shadow nix-hero secondary-hero">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
           
            	<h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
                
                <?php if ($error_warning) { ?>
                <div class="errorformapps"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?></div>
                <?php } ?>
            
                <div class="row">
                   
                    <p><?php echo $text_email; ?></p>
                    
                    <form action="<?php echo $action; ?>" style="text-align:center" method="post" enctype="multipart/form-data" class="form-horizontal">
                    <input type="email" style="width:80%;text-align:center" name="email" value="" placeholder="<?php echo $entry_email; ?>" id="input-email" class="form-control" />
                    <a href="<?php echo $back; ?>" style="background:#333333" class="btn nix-hero-button"><?php echo $button_back; ?></a>
                    <input type="submit" value="<?php echo $button_continue; ?>" class="btn nix-hero-button" />
                    </form>
      
                        
                </div>


            
         </div>
      </div>
   </div>
</div>

<?
echo $footer;
?>