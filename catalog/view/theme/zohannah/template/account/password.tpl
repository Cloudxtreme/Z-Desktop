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
        <!-- IMPO - OGC_Z_ACCOUNT-->
        
    <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" class="form-horizontal">
        <fieldset>
          <legend><?php echo $text_password; ?></legend>
          <div class="form-group required">
            <label class="col-sm-2 control-label" for="input-password"><?php echo $entry_password; ?></label>
            <div class="col-sm-10">
              <input type="password" name="password" value="<?php echo $password; ?>" placeholder="<?php echo $entry_password; ?>" id="input-password" class="form-control" />
              <?php if ($error_password) { ?>
              <div class="text-danger"><?php echo $error_password; ?></div>
              <?php } ?>
            </div>
          </div>
          <div class="form-group required">
            <label class="col-sm-2 control-label" for="input-confirm"><?php echo $entry_confirm; ?></label>
            <div class="col-sm-10">
              <input type="password" name="confirm" value="<?php echo $confirm; ?>" placeholder="<?php echo $entry_confirm; ?>" id="input-confirm" class="form-control" />
              <?php if ($error_confirm) { ?>
              <div class="text-danger"><?php echo $error_confirm; ?></div>
              <?php } ?>
            </div>
          </div>
        </fieldset>
        <div class="buttons clearfix">
          <div class="pull-left"><a style="border-radius:0" href="<?php echo $back; ?>" class="btn btn-default"><?php echo $button_back; ?></a></div>
          <div class="pull-right">
            <input type="submit" value="<?php echo $button_continue; ?>" class="btn btn-primary" />
          </div>
        </div>
      </form>
        
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