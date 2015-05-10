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
.btn-primary{border-radius:0;border:0;background:#000;text-transform:uppercase}
.btn-primary:hover{background:#333 !important}
.btn-default{text-transform:uppercase}
.btn-danger,.btn-info{padding:3px 5px;border-radius:0;text-transform:uppercase;font-size:11px;text-decoration:none}
.btn-danger a, .btn-info a{text-decoration:none}
</style>

<!--
// HTML
-->
<div class="center center-shadow nix-hero secondary-hero">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
            <h1 class="nix-hero-head"><?php echo $text_address_book; ?></h1>
            <p style="color:#fff">Add or delete in your address book for shipping.</p>
         </div>
      </div>
   </div>
</div>

<div class="container page-container work-here-container">
   
   <div class="row">
   
      <div id="generalcontent" class="primary-content">
        <div align="justify">
         <!-- IMPO - OGC_Z_ACCOUNT-->
            <?php if ($success) { ?>
                <div class="errorformapps"><i class="fa fa-check-circle"></i> <?php echo $success; ?></div>
            <?php } ?>
            <?php if ($error_warning) { ?>
                <div class="errorformapps"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?></div>
            <?php } ?>
            
            <?php echo $content_top; ?>  
            
            <h2><?php echo $text_address_book; ?></h2>
            <?php if ($addresses) { ?>
                <table class="table table-bordered table-hover">
                    <?php foreach ($addresses as $result) { ?>
                        <tr>
                            <td class="text-left"><?php echo $result['address']; ?></td>
                            <td class="text-right"><a href="<?php echo $result['update']; ?>" class="btn btn-info"><?php echo $button_edit; ?></a> &nbsp; <a href="<?php echo $result['delete']; ?>" class="btn btn-danger"><?php echo $button_delete; ?></a></td>
                        </tr>
                    <?php } ?>
                </table>
            <?php } else { ?>
                <p><?php echo $text_empty; ?></p>
            <?php } ?>
            <div class="buttons clearfix">
            <div class="pull-left"><a href="<?php echo $back; ?>" class="btn btn-default" style="background:#333;color:#fff"><?php echo $button_back; ?></a></div>
            <div class="pull-right"><a href="<?php echo $add; ?>" class="btn btn-primary" style="text-decoration:none"><?php echo $button_new_address; ?></a></div>
            </div>
                   
           
            
        
        
            <!--// END IMP-->  
                   
        </div>
      </div>
      
      <br />
      
      <?php echo $column_right; ?>
      
   </div>
</div>

<?
echo $footer;
?>