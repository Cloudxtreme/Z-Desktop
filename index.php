<?php
/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/
$ip=$_SERVER['REMOTE_ADDR'];
if (
$ip == '83.110.234.24' ||
$ip == '2.50.49.196' ||
$ip == '86.97.94.213' ||
$ip == '86.98.223.196' || 
$ip == '90.213.181.98' ||
$ip=='94.15.185.242' ||
$ip=="86.98.23.67" ||
$ip=="2.50.45.71" ||
$ip=="86.98.212.23"
) {
	include('index2.php');
} else {
	include('default.html');
}?>