<?php
/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/
// HEADER 
$zoh_css="zoh_checkout.css";
$cart_header = str_replace("zohannah.css", $zoh_css, $header);
echo $cart_header;
?>

<!--
// CART WRAPPER
-->
<div class="nix-container cart_zohannah_IBM zoh_cart">
<div class="nix-cart-pusher">
  <div class="nix-lg-cont container-fluid nix-relative nix-checkout-container checkout-cart-page">
  <div class="row nix-checkout-content-container zohannah_rr_websphere">
  <div class="col-xs-12 col-md-8">

  <div class="row">
    <div class="checkout-main-column-wrapper">
    <div class="checkout-top">
      <!--
      // LOGO
      -->
      <a class="navbar-brand" href="/">
        <h1 class="freight logobrand zohannah_logo_eposno blacklogo">ZOHANNAH</h1>
      </a>
      <span class="secure-shopping">Secured Shopping</span>
    </div>

    <!--
    // CHECKOUT STEPS, 1 2 and 3
    -->
    <div class="checkout-navigation">
      <div class="col-xs-4 step-item active">
        <div class="row">
          <span class="step-line col-xs-5 col-sm-5"></span>
          <span class="step-index col-xs-2 col-sm-2">1</span>
          <span class="step-line col-xs-5 col-sm-5"></span>
        </div>
        <div class="row">
          <span class="step-title col-xs-12">Shopping Cart</span>
        </div>
      </div>
      <div class="col-xs-4 step-item">
        <div class="row">
          <span class="step-line col-xs-4 col-sm-5"></span>
          <span class="step-index col-xs-4 col-sm-2">2</span>
          <span class="step-line col-xs-4 col-sm-5"></span>
        </div>
        <div class="row">
          <span class="step-title col-xs-12">Address &amp; Payment</span>
        </div>
      </div>
      <div class="col-xs-4 step-item">
        <div class="row">
          <span class="step-line col-xs-4 col-sm-5"></span>
          <span class="step-index col-xs-4 col-sm-2">3</span>
          <span class="step-line col-xs-4 col-sm-5"></span>
        </div>
        <div class="row">
          <span class="step-title col-xs-12">Review</span>
        </div>
      </div>
    </div>

    <!--
    // CART DETAILS
    // CART HEADER TABS
    -->
    <div class="checkout-steps checkout-main-column">
    <h3 class="title" step-label="my-order">My Shopping Cart</h3>
    <div class="checkout-list-responsive">
      <div class="row header-row hide-on-mobile">
        <div class="col-sm-2">
          <span class="checkout-label to-left margin-l-20">Product</span>
        </div>
        <div class="col-sm-10">
        <div class="col-sm-offset-5 col-sm-2 to-center">
          <span class="checkout-label"><?php echo $column_price; ?></span>
        </div>
        <div class="col-sm-3 to-center">
          <span class="checkout-label"><?php echo $column_quantity; ?></span>
        </div>
        <div class="col-sm-2 to-center">
          <span class="checkout-label"><?php echo $column_total; ?></span>
        </div>
        </div>
      </div>

      <form
      action="<?php echo $action; ?>" method="post"
      enctype="multipart/form-data" 
      autocomplete="off" class="zohannah_cart_form">

        <!--
        // CART LOOP ITEM
        -->
        <?php
        $zItem=0;
        foreach ($products as $product) {
        $zItem++
        ?>
        <div class="row product-row zohItemKey" id="itemDetail-<?=$zItem?>">
          <div class="col-xs-3 col-sm-2 for-image">
            <a href="<?php echo $product['href']; ?>"><img
              class="product-image" src="<?php echo $product['thumb']; ?>"
              alt="<?php echo $product['name']; ?>" class="cartimage" /></a>
          </div>
          <div class="col-xs-offset-1 col-xs-8 col-sm-offset-0 col-sm-10 for-content">
            <div class="row cart-item-content">
              <div class="col-xs-12 col-sm-5">
                <span class="product-title has-1-extra"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a></span>
                <span class="product-extra">
                <?php foreach ($product['option'] as $option) { ?>
                  <br />
                  <small><?php echo $option['name']; ?>: <?php echo $option['value']; ?></small>
                  <?php } ?> - <?php echo $product['model']; ?></span>
              </div>
              <div class="col-xs-4 col-sm-2 to-center">
                <span class="product-price"><?php echo $product['price']; ?></span>
              </div>
              <div class="col-xs-8 col-sm-3 qtyBox to-center" id="cart-qty-update_<?=$zItem?>">
                <table>
                  <tr>
                    <td>
                      <input type="text"
                      name="quantity[<?php echo $product['key']; ?>]"
                      class="product-quantity qtyInput"
                      min="0" max="999"
                      id="qty-<?=$zItem?>"
                      value="<?php echo $product['quantity']; ?>"
                      autocomplete="off" /><br />
                      <a href="javascript:void(0);" class="qtyInputLink"
                        onclick="cart.remove('<?php echo $product['key']; ?>');">
                        <small>remove</small>
                      </a>
                    </td>
                    <td>
                      <button type="submit" data-toggle="tooltip" title="<?php echo $button_update; ?>" 
                        class="qtySubmit hiddenSubmitQty_<?=$zItem?>"><i class="fa fa-refresh"></i></button>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="hide-on-mobile col-sm-2 last-column">
                <span class="product-total to-right hide-on-mobile"><?php echo $product['total']; ?></span>
              </div>
            </div>
          </div>
        </div>
        <? } ?>
        <!--
        // END CART LOOP ITEM 
        -->
        <input type="hidden" name="fraud_data_cash" value="check">
        <input type="hidden" name="fraud_stock" value="check">
        <input type="hidden" name="fraud_tps" value="1">
        <input type="hidden" name="uniquePreZohannahVariable" value="<?=md5(rand())?>">
      </form>
      
      <br />
      <!--
      // COUPONS, SHIPPING AND GIFT VOUCHERS AND REWARDS
      // Gift and coupon pricing system and validation
      -->
      <div class="clear row couponZohWrapper">
        <div class="zohannah_vouchers">
          <div class="row">            
            <div class="panel-group" id="accordion"><?php echo $coupon; ?></div>
          </div>
        </div>
      </div>

      <!--
      // TOTALS AND COST
      -->
      <div class="row footer-row right zohCartTotal">
        <div class="col-xs-12">
          <div id="cartUpdateFormWrapper">
            <?php foreach ($totals as $total) { ?>
              <div class="row">
                <div>
                  <span class="checkout-total to-right" id="cartTotalAmount">
                  <?php echo $total['title']; ?> <?php echo $total['text']; ?>
                  </span>
                </div>
              </div>
            <?php } ?>

      <div class="row no-padding-h">
      <div class="col-xs-12">

        <!-- 
        // CART CONTINUE PROCEED CART SUBMIT
        -->
        <a class="next-step to-right nix-btn nix-btn-primary no-border"
        id="cartbutton" href="<?php echo $checkout; ?>">
        CHECKOUT
        </a>
        </div>

        <!-- 
        // MOBILE BACK TOP SHOP
        -->
        <div class="mobile-checkout-backtoshop">
          <div class="col-xs-12">
            <a href="/" class="sidebar-button nix-btn nix-btn-grey"
            id="cartbacktoshopmobile">Continue Shopping</a>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  </div>
</div></div></div>
</div></div>

<!-- 
// CONTINUE BUTTON AND SECURE SHOPPING MESSAGE
-->
<div class="col-xs-12 col-md-4 sidebar-container">
  <div class="sidebar-container-tablet-sizer">
    <div class="nix-side-container">
      <div class="sidebar-inner-wrap">
          <div class="sidebar-cart-top">
          <div class="hide-on-tablet hide-on-mobile">
            <span class="secure-shopping">Secured Shopping</span>
          </div>
          <a href="/"
          class="sidebar-button nix-btn nix-btn-grey"
          id="cartbacktoshop">Continue Shopping</a>
          </div>
      </div>
    </div>
  </div>
</div>

<!-- 
// CUSTOMER SERVICE EMAIL CONTACT TELEPHONE
-->
<div class="sidebar-container sidebar-support">
  <h4 class="support-divider">Need Assistance?</h4>
  <span class="support-icon phone">0808 234 7003</span>
    <div class="support-inset">
      <span class="support-icon clock">Monday - Thursday<br><em>8:00 - 17:00</em></span>
      <span class="support-icon clock">Friday<br><em>8:00 - 16:00</em></span>
    </div>
  <a href="mailto:cs@zohannah.com" class="support-icon envelope"> cs@zohannah.com</a>
  <a href="https://www.facebook.com/zohannahshop"class="support-icon side-facebook" target="_blank">Facebook Message</a>
  <div class="support-divider"></div>
    <div class="checkout-links-wrap three-col">
      <ul class="support-list checkout-list">
        <li><a class="sidebar-link ajaxlink" href="">Terms of Sale</a></li>
        <li><a class="sidebar-link ajaxlink" href="">Shipping Policy</a></li>
        <li><a class="sidebar-link ajaxlink" href="">Return Policy</a></li>
      </ul>
      <ul class="support-list checkout-list">
        <li><a class="sidebar-link ajaxlink" href="">Warranty </a></li>
      </ul>
      <ul class="support-list checkout-list">
        <li><a class="sidebar-link ajaxlink" href="">Privacy Notice </a></li>
      </ul>
    </div>
  </div>
  <div class="col-xs-12 col-md-8">
    <div class="row">
      <div class="checkout-main-column-wrapper">
        <div class="checkout-main-column">
          <div class="row sub-footer">
            <div class="col-sm-6 col-xs-12">
              <span class="copyright">&copy; <script>now=new Date;theYear=now.getFullYear();document.write(theYear);</script> ZOHANNAH</span>
            </div>
            <div class="col-sm-6 col-xs-12 footer-cc">
              <img src="/catalog/view/theme/zohannah/image/checkout/payment-1.png"/>
              <img src="/catalog/view/theme/zohannah/image/checkout/payment-2.png"/>
              <img src="/catalog/view/theme/zohannah/image/checkout/payment-4.png"/>
              <img src="/catalog/view/theme/zohannah/image/checkout/payment-5.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="nix-overlay-pusher"></div>
  <div class="nix-overlay-white"></div>
  </div>
</div>

<!-- 
// PAGE SPECIFIC JS AND FOOTER
-->
<script>
$('body').attr('id', 'cartPage');
</script>
<?php echo $footer; ?> 