$(function(){



  $(".ajax-video").on("click",function(e){

     e.preventDefault();      

     CLIENT.Modal.loadSimpleVideo($(this));       

    }); 

  

  $('#archiveAnchor').on('click',function(e){

	if ( $(this).hasClass("show-archives") ) {

	  e.preventDefault();

	  $('#culture-archives-modal').show();

	  CLIENT.Modal.showModal();

	  return false;

	}

  });

  $(".oembed").each(function() {

    var url = this.href, vidHTML;

    if (url.indexOf('youtube') > 0) {

      var urlArr = url.split('v=');

      var vidCode = urlArr.pop();

      vidCode = vidCode.split('&');

      vidCode = vidCode[0];



      vidHTML = '<iframe class="oembed-iframe" id="happenings-' + i + '" src="http://www.youtube.com/embed/' + vidCode + '?autoplay=0" frameborder="0" allowfullscreen></iframe>';

      $(".oembed").replaceWith(vidHTML);



    } else if (url.indexOf('vimeo') > 0) {

      var oEmbedURL = 'http://vimeo.com/api/oembed.json?url=' + url + '&callback?';

      $.getJSON(oEmbedURL, {

        maxwidth : 880,

        maxheight : 620,

        wmode : "transparent",

        autoplay : "false"

      }, function(data) {

        vidHTML = data.html;

        $(".oembed").replaceWith(vidHTML);

      });

    }

    

  });

});

