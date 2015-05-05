/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/


// START APP
var zApp = angular.module('ZOHANNAH', []);

	// VARS
	// -- For the system
	// -- use the #EDIT to modify anything else on this page
		var strInterval;
		var strRandom = 1 + Math.floor(Math.random() * 6);	
		var initWindowHeight = jQuery( window ).height();
		var windowHeightLessHeader = (initWindowHeight - 113);
		var browserSize = [];
		var globalHawkHeight = jQuery(window).height();
		var globalHawkWidth = jQuery(window).width();
	
	// FUNCTION APPCTRL
	// -- Apply to <body>
		zApp.controller('zohMAIN', function ($scope) {});
	
				
// END APPLICATION
// -- EOF and EOM __;