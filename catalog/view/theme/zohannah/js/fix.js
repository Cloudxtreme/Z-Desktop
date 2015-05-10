/***

 * --- --- --- --- ---
 * Zohannah
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Z1
 * --- --- --- --- ---

***/

// MOBILE NAVIGATION
$('#mobile-nav-button').click(function() {$('.nix-main-menu-container').slideToggle();});

// PROMOTION BAR
$('.promoclose').click(function() {$('.promoBar').slideUp();});
setInterval(function(){ $('.promoBar').slideUp(); }, 2500);

// MENU FIXES
jQuery( window ).resize(function() {	
	if( $(window).width() > 775) {
		$('.nix-main-menu-container').slideUp();
	}
});

// NEWSLETTER
// -- Function and validation for e-letter - Footer redirect form
function zohannahEmail() {
			
	// VARS
	var flagx = 0;
	
	// EMAIL NAME
	if($('#email').val()==""||$('#email').val()=="Enter Email Address"||!isValidEmailAddress($('#email').val())){
		flagx=1;
		$('#email').addClass("errorformapps");
	} else {
		$('#email').removeClass("errorformapps")
	}
	if(flagx==1){} else {
		var custFormx;
		custFormx = document.getElementById("addEmailForm");
		custFormx.submit();
	}
	
}

// VALIDATION CLASS
// -- Prevents invalid emails
function isValidEmailAddress(emailAddress) {var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return pattern.test(emailAddress);}; 

// WISHLIST COUNT
wishlist.add('0');

// OPENCART PRODUCT DESCRIPTION TAG
$('.productDescription p').addClass('story-descr');






