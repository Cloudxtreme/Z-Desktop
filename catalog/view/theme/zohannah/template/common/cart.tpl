<?php
/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/
//$zitems = @floatval(end(explode('£', html_entity_decode($text_items))));
//$zitemsTotal=substr($text_items, 0, strrpos($text_items, ' '));
$zitemsTotal=strtok($text_items, " ");
echo $zitemsTotal;
?>