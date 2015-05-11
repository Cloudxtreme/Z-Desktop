<?
/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/
?>

<!--
// ACCOUNT PAGE SIDE BAR
-->

<script>
jQuery('#column-right').removeClass('hidden-xs');
jQuery('#column-right').removeClass('col-sm-3');
</script>

<div class="sidebar-container sidebar-support">
 
<h4 class="support-divider">Logout?</h2>
    <ul class="list-unstyled">
        <li><a href="<?php echo $logout; ?>"><?php echo $text_logout; ?></a></li>
    </ul>

<h4 class="support-divider">My Account</h2>
    <ul class="list-unstyled">
        <li><a href="<?php echo $edit; ?>"><?php echo $text_edit; ?></a></li>
        <li><a href="<?php echo $password; ?>"><?php echo $text_password; ?></a></li>
        <li><a href="<?php echo $address; ?>"><?php echo $text_address; ?></a></li>
        <li><a href="<?php echo $wishlist; ?>"><?php echo $text_wishlist; ?></a></li>
    </ul>
<h4 class="support-divider">My Orders</h2>
    <ul class="list-unstyled">
        <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
        <?php if ($reward) { ?>
        <li><a href="<?php echo $reward; ?>"><?php echo $text_reward; ?></a></li>
        <?php } ?>
    </ul>
 
</div>