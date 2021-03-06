$(function () {

    var referringHash = decodeURI(window.location.hash);
    var fadeOutTimer = 100;
    var fadeInTimer = 500;
    
    $(window).on('hashchange', function(){
        // On every hash change the render function is called with the new hash.
        // This is how the navigation of our app happens.

    	render(decodeURI(window.location.hash));
    });
    
    function render(url) {
        // This function decides what type of page to show 
        // depending on the current url hash value.
    	
    	
        // Get the keyword from the url.
        var urlData = url.split('/');

        // Hide whatever page is currently shown.
        $('.main-content .page').addClass('hidden');
        
        // ??????!@?$!?@$!?@$!@???$? ? ?????????? Why won't the above work but these will? #id priority?
        $('#index').addClass('hidden');
        $('#then').addClass('hidden');
        $('#now').addClass('hidden');
        $('#when').addClass('hidden');
        $('#productiondiary').addClass('hidden');
        $('#references').addClass('hidden');
        $('#copyright').addClass('hidden');
        
        // Unload (and fade out) content before rendering new page
        $(".content").fadeOut(fadeOutTimer, function() {
        		$('.content').html("");
        });

        var map = {

            // The Homepage
            '': function() { renderPage('index',urlData[1]); },

            // "Then" page
            '#then': function() { renderPage('then',urlData[1]); },

            // "Now" page
            '#now': function() { renderPage('now',urlData[1]); },
            
            // "When..?" page
            '#when': function() { renderPage('when',urlData[1]); },
            
            // Production Diary page
            '#productiondiary': function () { renderPage('productiondiary',urlData[1]); },          
            
            // References page
            '#references': function () { renderPage('references',urlData[1]); },
            
            // Copyright page
            '#copyright': function () { renderPage('copyright',urlData[1]); }
        };
            
        // Execute the needed function depending on the url keyword (stored in temp).
        if(map[urlData[0]]){
            map[urlData[0]]();
        }
        // If the keyword isn't listed in the above - render the error page.
        else {
            // renderErrorPage();
        }
    }
    
    function renderPage(target, pageNumber) {
        var page = $('#' + target);
        
        // Remove animation classes before rendering
        // so that new animations can work correctly
		$(".now-nav").removeClass("then-from-now");
		$("#then").removeClass("then-from-now-background");
		
		$(".when-nav").removeClass("then-from-when");
		$(".now-nav").removeClass("then-from-when2");
		$("#then").removeClass("then-from-when-background");
		
		$(".now-nav").removeClass("now-from-then");
		$("#now").removeClass("now-from-then-background");
		
		$(".when-nav").removeClass("now-from-when");
		$("#now").removeClass("now-from-when-background");
		
		$(".when-nav").removeClass("when-from-now");
		$("#when").removeClass("when-from-now-background");
		
		$(".when-nav").removeClass("when-from-then");
		$(".now-nav").removeClass("when-from-then2");
		$("#when").removeClass("when-from-then-background");
		
		$("#then").removeClass("then-from-main-background");
		$("#now").removeClass("now-from-main-background");
		$("#when").removeClass("when-from-main-background");

		$("#index").removeClass("main-from-then-background");
		$("#index").removeClass("main-from-now-background");
		$("#index").removeClass("main-from-when-background");
		$("#productiondiary").removeClass("main-from-then-background");
		$("#productiondiary").removeClass("main-from-now-background");
		$("#productiondiary").removeClass("main-from-when-background");
		$("#references").removeClass("main-from-then-background");
		$("#references").removeClass("main-from-now-background");
		$("#references").removeClass("main-from-when-background");
		$("#copyright").removeClass("main-from-then-background");
		$("#copyright").removeClass("main-from-now-background");
		$("#copyright").removeClass("main-from-when-background");
		
        $("#then .subnav1").removeClass("subnav-animation1");
        $("#then .subnav2").removeClass("subnav-animation2");
        $("#then .subnav3").removeClass("subnav-animation3");
        $("#now .subnav1").removeClass("subnav-animation1");
        $("#now .subnav2").removeClass("subnav-animation2");
        $("#now .subnav3").removeClass("subnav-animation3");
        $("#when .subnav1").removeClass("subnav-animation1");
        $("#when .subnav2").removeClass("subnav-animation2");
        $("#when .subnav3").removeClass("subnav-animation3");
        $("#productiondiary .subnav1").removeClass("subnav-animation1");
        $("#productiondiary .subnav2").removeClass("subnav-animation2");
        $("#productiondiary .subnav3").removeClass("subnav-animation3");
        $("#copyright .subnav1").removeClass("subnav-animation1");
        $("#copyright .subnav2").removeClass("subnav-animation2");
        $("#copyright .subnav3").removeClass("subnav-animation3");
        $("#references .subnav1").removeClass("subnav-animation1");
        $("#references .subnav2").removeClass("subnav-animation2");
        $("#references .subnav3").removeClass("subnav-animation3");
        
        
        $("#thensubnav1").removeClass("selected");
        $("#thensubnav2").removeClass("selected");
        $("#thensubnav3").removeClass("selected");
        $("#nowsubnav1").removeClass("selected");
        $("#nowsubnav2").removeClass("selected");
        $("#nowsubnav3").removeClass("selected");
        $("#whensubnav1").removeClass("selected");
        $("#whensubnav2").removeClass("selected");
        $("#whensubnav3").removeClass("selected");
        
        
        page.removeClass('hidden');
        
     
        if (target.endsWith("then")) {
            $("#then .subnav1").addClass("subnav-animation1");
            $("#then .subnav2").addClass("subnav-animation2");
            $("#then .subnav3").addClass("subnav-animation3");
            
        	// Apply styles to "then" navigation bar        	
        	$(".then-nav").attr("style",
        			"border-left: 4px solid var(--then-highlight-color);"
    		);
    		$(".now-nav").attr("style",
    				"left: calc(100vw - 208px);" +
    				"border-left: 0px;" +
    				"padding-left: 4px;"
    		);
    		$(".when-nav").attr("style",
    				"left: calc(100vw - 104px);" +
    				"border-left: 0px;" +
    				"padding-left: 4px;"
    		);

    		// These mouseover CSS rules are marked !important in order to overcome
    		// the priority of 'background-color' being stolen by the inline rules
    		// added above.
    		$(".then-nav").removeClass("then-nav-hover");
    		$(".now-nav").addClass("now-nav-hover");
    		$(".when-nav").addClass("when-nav-hover");
    		
    		// Get content
    		$(".content").fadeOut(fadeOutTimer, function() {
	    		if (pageNumber == 1 || pageNumber == undefined) {
	    			$("#thensubnav1").addClass("selected");
	    			$("#thenContent").load("content/then-content1.html", function() {
	    				$(".footer li").css("border-color","var(--then-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
			} else if (pageNumber == 2) {
	    			$("#thenContent").load("content/then-content2.html", function() {
	    				$("#thensubnav2").addClass("selected");
	    				$(".footer li").css("border-color","var(--then-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
	    			});
	    		} else if (pageNumber == 3) {
	    			$("#thenContent").load("content/then-content3.html",function() {
	    				$("#thensubnav3").addClass("selected");
	    				$(".footer li").css("border-color","var(--then-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else {
	    			$("#thenContent").html("<h2>Page not found</h2>", $(".content").fadeIn(fadeInTimer));
	    		}
    		});

    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index") || referringHash.endsWith("productiondiary") ||
        			referringHash.endsWith("references") || referringHash.endsWith("copyright")) {
        		$("#then").addClass("then-from-main-background");        	
        	} else if (referringHash.endsWith("now")) {
    			$(".now-nav").addClass("then-from-now");
    			$("#then").addClass("then-from-now-background");
        	} else if (referringHash.endsWith("when")) {
        		$(".when-nav").addClass("then-from-when");
        		$(".now-nav").addClass("then-from-when2");
        		$("#then").addClass("then-from-when-background");
        	}
        	
        } else if (target.endsWith("now")) {
            $("#now .subnav1").addClass("subnav-animation1");
            $("#now .subnav2").addClass("subnav-animation2");
            $("#now .subnav3").addClass("subnav-animation3");
        	
        	// Apply styles to "now" navigation bar      	
        	$(".then-nav").attr("style",
    				"border-left: 0px;" +
    				"padding-left: 4px;"
    		);
    		$(".now-nav").attr("style",
    				"left: 104px;"
    		);
    		$(".when-nav").attr("style",
    				"left: calc(100vw - 104px);" +
    				"border-left: 0px;" +
    				"padding-left: 4px;"
    		);

    		// These mouseover CSS rules are marked !important in order to overcome
    		// the priority of 'background-color' being stolen by the inline rules
    		// added above.
    		$(".then-nav").addClass("then-nav-hover");
    		$(".now-nav").removeClass("now-nav-hover");
    		$(".when-nav").addClass("when-nav-hover");
    		    		
    		// Get content
        	$(".content").fadeOut(fadeOutTimer, function() {
	    		if (pageNumber == 1 || pageNumber == undefined) {
	    			$("#nowContent").load("content/now-content1.html", function() {
	    				$("#nowsubnav1").addClass("selected");
	    				$(".footer li").css("border-color","var(--now-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else if (pageNumber == 2) {
	    			$("#nowContent").load("content/now-content2.html", function() {
	    				$("#nowsubnav2").addClass("selected");
	    				$(".footer li").css("border-color","var(--now-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else if (pageNumber == 3) {
	    			$("#nowContent").load("content/now-content3.html", function() {
	    				$("#nowsubnav3").addClass("selected");
	    				$(".footer li").css("border-color","var(--now-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else {
	    			$("#nowContent").html("<h2>Page not found</h2>", $(".content").fadeIn(fadeInTimer));
	    		}
        	});
        	 		
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index") || referringHash.endsWith("productiondiary") ||
        			referringHash.endsWith("references") || referringHash.endsWith("copyright")) {
        		$("#now").addClass("now-from-main-background");
        	} else if (referringHash.endsWith("then")) {
        		$(".now-nav").addClass("now-from-then");
        		$("#now").addClass("now-from-then-background");
        	} else if (referringHash.endsWith("when")) {
        		$(".when-nav").addClass("now-from-when");
        		$("#now").addClass("now-from-when-background");
        	}
        	
        } else if (target.endsWith("when")) {
            $("#when .subnav1").addClass("subnav-animation1");
            $("#when .subnav2").addClass("subnav-animation2");
            $("#when .subnav3").addClass("subnav-animation3");

        	// Apply styles to "when" navigation bar
        	$(".then-nav").attr("style",
    				"border-left: 0px;" +
    				"padding-left: 4px;"
    		);
    		$(".now-nav").attr("style",
    				"left: 104px;" +
    				"border-left: 0px;" +
    				"padding-left: 4px;"
    		);
    		$(".when-nav").attr("style",
    				"left: 208px;"
    		);

    		// These mouseover CSS rules are marked !important in order to overcome
    		// the priority of 'background-color' being stolen by the inline rules
    		// added above.
    		$(".then-nav").addClass("then-nav-hover");
    		$(".now-nav").addClass("now-nav-hover");
    		$(".when-nav").removeClass("when-nav-hover");
    		
    		// Get content
        	$(".content").fadeOut(fadeOutTimer, function() {
	    		if (pageNumber == 1 || pageNumber == undefined) {
	    			$("#whenContent").load("content/when-content1.html", function() {
	    				$("#whensubnav1").addClass("selected");
	    				$(".footer li").css("border-color","var(--when-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else if (pageNumber == 2) {
	    			$("#whenContent").load("content/when-content2.html", function() {
	    				$("#whensubnav2").addClass("selected");
	    				$(".footer li").css("border-color","var(--when-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else if (pageNumber == 3) {
	    			$("#whenContent").load("content/when-content3.html", function() {
	    				$("#whensubnav3").addClass("selected");
	    				$(".footer li").css("border-color","var(--when-highlight-color)");
	    				$(".content").fadeIn(fadeInTimer);
	    				setTimeout(function(){ FB.XFBML.parse(); }, 1100);
			       	});
	    		} else {
	    			$("#whenContent").html("<h2>Page not found</h2>", $(".content").fadeIn(fadeInTimer));
	    		}
        	});
        	        	
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index") || referringHash.endsWith("productiondiary") ||
        			referringHash.endsWith("references") || referringHash.endsWith("copyright")) {
        		$("#when").addClass("when-from-main-background");
        	} else if (referringHash.endsWith("then")) {
        		$(".when-nav").addClass("when-from-then");
        		$(".now-nav").addClass("when-from-then2");
        		$("#when").addClass("when-from-then-background");
        	} else if (referringHash.endsWith("now")) {
        		$(".when-nav").addClass("when-from-now");
        		$("#when").addClass("when-from-now-background");
        	}
        } else if (target.endsWith("productiondiary")) {
            $("#productiondiary .subnav1").addClass("subnav-animation1");
            $("#productiondiary .subnav2").addClass("subnav-animation2");
            $("#productiondiary .subnav3").addClass("subnav-animation3");
            
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("then")) {
        		$("#productiondiary").addClass("main-from-then-background");
        	} else if (referringHash.endsWith("now")) {
        		$("#productiondiary").addClass("main-from-now-background");
        	} else if (referringHash.endsWith("when")) {
        		$("#productiondiary").addClass("main-from-when-background");
        	}
            
        } else if (target.endsWith("copyright")) {
            $("#copyright .subnav1").addClass("subnav-animation1");
            $("#copyright .subnav2").addClass("subnav-animation2");
            $("#copyright .subnav3").addClass("subnav-animation3");
            
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("then")) {
        		$("#copyright").addClass("main-from-then-background");
        	} else if (referringHash.endsWith("now")) {
        		$("#copyright").addClass("main-from-now-background");
        	} else if (referringHash.endsWith("when")) {
        		$("#copyright").addClass("main-from-when-background");
        	}
        	
        } else if (target.endsWith("references")) {
            $("#references .subnav1").addClass("subnav-animation1");
            $("#references .subnav2").addClass("subnav-animation2");
            $("#references .subnav3").addClass("subnav-animation3");
            
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("then")) {
        		$("#references").addClass("main-from-then-background");
        	} else if (referringHash.endsWith("now")) {
        		$("#references").addClass("main-from-now-background");
        	} else if (referringHash.endsWith("when")) {
        		$("#references").addClass("main-from-when-background");
        	}
        }
	
        // Update the referring hash when all rendering is complete
        referringHash = target;

    }

    
    // Initial render
    render(decodeURI(window.location.hash));
});