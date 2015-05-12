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
            <p style="color:#fff">Order #<?php echo $_GET["order_id"]?></p>
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
             
             
             
             
             
             
            <?php if ($success) { ?>
              <div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $success; ?>
                <button type="button" class="close" data-dismiss="alert">&times;</button>
              </div>
              <?php } ?>
              <?php if ($error_warning) { ?>
              <div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?>
                <button type="button" class="close" data-dismiss="alert">&times;</button>
              </div>
              <?php } ?>
             
             
             <p><strong><i class="fa fa-key"></i> Key:</strong> <br />
             <strong>Processing</strong> - Order is being prepared.<br />
             <strong>Refunded</strong> - Order has been refunded, payment sent.<br />
             <strong>Cancelled</strong> - Order cancelled, payment not taken or refunded.<br />
             <strong>Returned</strong> - Order returned succesful.<br />
             <strong>Awaiting Return</strong> - We are awaiting the goods to process return.<br />
             </p>
            
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           <table class="table table-bordered table-hover" style="width:100%;font-size:12px">
        <thead>
          <tr>
            <td class="top-table" colspan="2"><?php echo $text_order_detail; ?></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bottom-table" style="width: 50%;"><?php if ($invoice_no) { ?>
              <b><?php echo $text_invoice_no; ?></b> <?php echo $invoice_no; ?><br />
              <?php } ?>
              <b><?php echo $text_order_id; ?></b> #<?php echo $order_id; ?><br />
              <b><?php echo $text_date_added; ?></b> <?php echo $date_added; ?></td>
            <td class="bottom-table"><?php if ($payment_method) { ?>
              <b><?php echo $text_payment_method; ?></b> <?php echo $payment_method; ?><br />
              <?php } ?>
              <?php if ($shipping_method) { ?>
              <b><?php echo $text_shipping_method; ?></b> <?php echo $shipping_method; ?>
              <?php } ?></td>
          </tr>
        </tbody>
      </table>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <table class="table table-bordered table-hover" style="width:100%;font-size:12px">
        <thead>
          <tr>
            <td class="top-table" style="width: 50%;"><?php echo $text_payment_address; ?></td>
            <?php if ($shipping_address) { ?>
            <td class="top-table"><?php echo $text_shipping_address; ?></td>
            <?php } ?>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bottom-table"><?php echo $payment_address; ?></td>
            <?php if ($shipping_address) { ?>
            <td class="bottom-table"><?php echo $shipping_address; ?></td>
            <?php } ?>
          </tr>
        </tbody>
      </table>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div class="table-responsive">
        <table class="table table-bordered table-hover" style="width:100%;font-size:12px">
          <thead>
            <tr>
              <td class="top-table"><?php echo $column_name; ?></td>
              <td class="top-table"><?php echo $column_model; ?></td>
              <td class="top-table"><?php echo $column_quantity; ?></td>
              <td class="top-table"><?php echo $column_price; ?></td>
              <td class="top-table"><?php echo $column_total; ?></td>
              
              
            </tr>
          </thead>
          <tbody>
            <?php foreach ($products as $product) { ?>
            <tr>
              <td class="bottom-table"><?php echo $product['name']; ?>
                <?php foreach ($product['option'] as $option) { ?>
                <br />
                &nbsp;<small> - <?php echo $option['name']; ?>: <?php echo $option['value']; ?></small>
                <?php } ?></td>
              <td class="bottom-table"><?php echo $product['model']; ?></td>
              <td class="bottom-table"><?php echo $product['quantity']; ?></td>
              <td class="bottom-table"><?php echo $product['price']; ?></td>
              <td class="bottom-table"><?php echo $product['total']; ?></td>
              
              
            </tr>
            <?php } ?>
            <?php foreach ($vouchers as $voucher) { ?>
            <tr>
              <td class="bottom-table"><?php echo $voucher['description']; ?></td>
              <td class="bottom-table"></td>
              <td class="bottom-table">1</td>
              <td class="bottom-table"><?php echo $voucher['amount']; ?></td>
              <td class="bottom-table"><?php echo $voucher['amount']; ?></td>
              <?php if ($products) { ?>
              <td></td>
              <?php } ?>
            </tr>
            <?php } ?>
          </tbody>
          <tfoot>
            <?php foreach ($totals as $total) { ?>
            <tr>
              <td colspan="3"></td>
              <td class="bottom-table"><b><?php echo $total['title']; ?></b></td>
              <td class="bottom-table"><?php echo $total['text']; ?></td>
              <?php if ($products) { ?>
              <td></td>
              <?php } ?>
            </tr>
            <?php } ?>
          </tfoot>
        </table>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <?php if ($comment) { ?>
      <table class="table table-bordered table-hover" style="width:100%;font-size:12px">
        <thead>
          <tr>
            <td class="top-table"><?php echo $text_comment; ?></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bottom-table"><?php echo $comment; ?></td>
          </tr>
        </tbody>
      </table>
      <?php } ?>
      <?php if ($histories) { ?>
      <h3><?php echo $text_history; ?></h3>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <td class="top-table"><?php echo $column_date_added; ?></td>
            <td class="top-table"><?php echo $column_status; ?></td>
            <td class="top-table"><?php echo $column_comment; ?></td>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($histories as $history) { ?>
          <tr>
            <td class="bottom-table"><?php echo $history['date_added']; ?></td>
            <td class="bottom-table"><?php echo $history['status']; ?></td>
            <td class="bottom-table"><?php echo $history['comment']; ?></td>
          </tr>
          <?php } ?>
        </tbody>
      </table>
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