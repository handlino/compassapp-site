var sadPanda = {
	  
	
	
	follower : function(start) {
		  if ($(window).scrollTop() < start) {
			$('#entry nav').removeClass('follow')
		  } 
		  if ($(window).scrollTop() >= start) {
			$('#entry nav').addClass('follow')
		  }  
	},



	scrollTo : function(hash,locale){
	  $("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: (Math.ceil($("#" + locale).offset().top) + 'px') 
	  }, 100, 'linear', function() {
	      document.location.hash = hash;   
	  });
	},



	callBackupFonts : function() {
		//append stylesheet with @font-face backups
		var newStyles = document.createElement("link")
		newStyles.setAttribute("rel","stylesheet")
		newStyles.setAttribute("type","text/css")
		newStyles.setAttribute("href","/stylesheets/backup.css")
		document.getElementsByTagName('head')[0].appendChild(newStyles)
	},
	
	
	
	init : function() {
		that = this
//	    createGridder()
		//show container
		$('#container').css('opacity','1')

		//scrolltimer for entries
		var fixedStart = $('#entry nav').offset().top - 40
		var timer = window.setInterval(function(){ that.follower(fixedStart) },10)
	
		//scroll to top for entries
		$('#top-of-page-link').click(function(){
			that.scrollTo('','nav-home')
			return false
		})  
   
	}

} 