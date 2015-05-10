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
.order-success-wrapper{background:url(//cdn.zohannah.com/assets/imgs/order-success.jpg) no-repeat center;background-size:cover;color:#fff;overflow:hidden;position:relative;text-align:center;transform:translate3d(0px, 0px, 0px);width:100%}
.nix-hero-button{background:#fff;color:#000}
.nix-hero-button:hover{color:#fff;background:#000}
.nix-hero-button{border:0 !important;border-radius:0}
.nix-hero-copy h1, .nix-hero-copy p{color:#fff}
</style>

<!--
// HTML
-->
<div class="center secondary-hero order-success-wrapper">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
         	<h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
            <p><?php echo $text_message; ?></p>
            <a class="btn nix-hero-button" href="/"><span class="fa fa-home"></span> Take Me Home </a>
            <a class="btn nix-hero-button" href="/index.php?route=account/account"><span class="fa fa-home"></span> Your Account </a>
         </div>
      </div>
   </div>
</div>
<br />

<?
echo $footer;
?> 