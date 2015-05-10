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
.home .nix-hero-container{height:750px}
.page-container{margin-top:25px;margin-bottom:25px}
#column-right{float:right}
.col-sm-6{font-color:#fff;text-align:left}
@media only screen and (max-width:750px){
	#column-right{float:none}
}
.nix-hero-copy h1{font-size:29px}
.col-sm-6 h2{font-size:21px}
.nix-hero-button{background:#fff;color:#000}
.nix-hero-button:hover{color:#fff;background:#000}
.nix-hero-button{border:0 !important;border-radius:0}
.nix-hero-copy h1, .nix-hero-copy p, .col-sm-6 h2{color:#fff}
.col-sm-6 label,.col-sm-6 a{text-transform:uppercase}
</style>

<!--
// HTML
-->
<div class="center center-shadow nix-hero secondary-hero">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
           
            	<h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
            
                <?php if ($success) { ?>
                <div class="errorformapps"><i class="fa fa-check-circle"></i> <?php echo $success; ?></div>
                <?php } ?>
                <?php if ($error_warning) { ?>
                <div class="errorformapps"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?></div>
                <?php } ?>
            
                <div class="row">
                    <div class="col-sm-6">
                      <div class="well">
                        <h2><?php echo $text_new_customer; ?></h2>
                        <p><strong><?php echo $text_register; ?></strong></p>
                        <p><?php echo $text_register_account; ?></p>
                        <a href="<?php echo $register; ?>" class="btn  nix-hero-button"><?php echo $button_continue; ?></a></div>
                    </div>
                    <div class="col-sm-6">
                      <div class="well">
                        <h2><?php echo $text_returning_customer; ?></h2>
                        <p><strong><?php echo $text_i_am_returning_customer; ?></strong></p>
                        <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
                          <div class="form-group">
                            <label class="control-label" for="input-email"><?php echo $entry_email; ?></label>
                            <input type="text" name="email" value="<?php echo $email; ?>" placeholder="<?php echo $entry_email; ?>" id="input-email" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label class="control-label" for="input-password"><?php echo $entry_password; ?></label>
                            <input type="password" name="password" value="<?php echo $password; ?>" placeholder="<?php echo $entry_password; ?>" id="input-password" class="form-control" />
                            <br /><a style="color:#fff" href="<?php echo $forgotten; ?>"><?php echo $text_forgotten; ?>?</a></div>
                          <input type="submit" value="<?php echo $button_login; ?>" class="btn  nix-hero-button" />
                          <?php if ($redirect) { ?>
                          <input type="hidden" name="redirect" value="<?php echo $redirect; ?>" />
                          <?php } ?>
                        </form>
                      </div>
                    </div>
                  </div>


            
         </div>
      </div>
   </div>
</div>

<?
echo $footer;
?>