<?php
$ip=$_SERVER['REMOTE_ADDR'];
if (
	$ip == '2.51.66.88' ||
	$ip == '86.98.223.196' || 
	$ip == '90.213.181.98' ||
	$ip=='94.15.185.242' ||
	$ip=="86.98.23.67" ||
	$ip=="2.51.79.178"
) {
	include('index2.php');
} else {
	include('default.html');
}?>