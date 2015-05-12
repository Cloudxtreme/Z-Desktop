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
.btn-default{border-radius:0;text-transform:uppercase}
.btn-danger,.btn-info{text-decoration:none !important;padding:3px 5px;border-radius:0;text-transform:uppercase;font-size:11px;text-decoration:none}
.btn-danger a, .btn-info a{text-decoration:none !important} 
.top-table{background:#5C5757;color:#fff;padding:3px;margin:3px}
.bottom-table{background:#eaeaea;color:#000;padding:3px 5px;margin:3px}

</style>

<!--
// HTML
-->
<div class="center center-shadow nix-hero secondary-hero">
   <div class="hero-nav-container nix-hero-container">
      <div class="nix-hero-copy-wrapper">
         <div class="nix-hero-copy">
            <h1 class="nix-hero-head"><?php echo $heading_title; ?></h1>
            <p style="color:#fff">View all your order history.</p>
         </div>
      </div>
   </div>
</div>

<div class="container page-container work-here-container">
   
   <div class="row">
   
      <div id="generalcontent" class="primary-content">
        <div align="justify">
         <!-- IMPO - OGC_Z_ACCOUNT-->
            
           
           <?php echo $content_top; ?>  
             <h2><?php echo $heading_title; ?></h2>
             
             <p><strong><i class="fa fa-key"></i> Key:</strong> <br />
             <strong>Processing</strong> - Order is being prepared.<br />
             <strong>Refunded</strong> - Order has been refunded, payment sent.<br />
             <strong>Cancelled</strong> - Order cancelled, payment not taken or refunded.<br />
             <strong>Returned</strong> - Order returned succesful.<br />
             <strong>Awaiting Return</strong> - We are awaiting the goods to process return.<br />
             
             
             </strong></p>
            
            <?php if ($orders) { ?>
      <div class="table-responsive" style="width:100%" style="font-family:12px">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <td class="top-table "><?php echo $column_order_id; ?></td>
              <td class="top-table "><?php echo $column_status; ?></td>
              <td class="top-table "><?php echo $column_date_added; ?></td>
              <td class="top-table "><?php echo $column_product; ?></td>
              <td class="top-table "><?php echo $column_customer; ?></td>
              <td class="top-table "><?php echo $column_total; ?></td>
              <td class="top-table"> Info</td>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($orders as $order) { ?>
            <tr>
              <td class="bottom-table ">#<?php echo $order['order_id']; ?></td>
              <td class="bottom-table "><?php echo $order['status']; ?></td>
              <td class="bottom-table "><?php echo $order['date_added']; ?></td>
              <td class="bottom-table "><?php echo $order['products']; ?></td>
              <td class="bottom-table "><?php echo $order['name']; ?></td>
              <td class="bottom-table "><?php echo $order['total']; ?></td>
              <td class="bottom-table ">
              
              <center><a style="background:#febd18;color:#303c42;border-radius:3px;border:1px solid #303c42" href="<?php echo $order['href']; ?>" data-toggle="tooltip" title="<?php echo $button_view; ?>" class="btn btn-info"><i class="fa  fa-info-circle "></i> VIEW</a></center>
              
              </td>
            </tr>
            <?php } ?>
          </tbody>
        </table>
      </div>
      <div class="text-right"><?php echo $pagination; ?></div>
      <?php } else { ?>
      <p><center><?php echo $text_empty; ?></center></p>
      <?php } ?>
            
            
          
          
            
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






