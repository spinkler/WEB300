$(function () {
    var referringHash = decodeURI(window.location.hash);
	
    $(window).on('hashchange', function(){
        // On every hash change the render function is called with the new hash.
        // This is how the navigation of our app happens.
    	render(decodeURI(window.location.hash));        
    });
    
    function render(url) {
        // This function decides what type of page to show 
        // depending on the current url hash value.
    	
    	
        // Get the keyword from the url.
        var temp = url.split('/')[0];

        // Hide whatever page is currently shown.
        $('.main-content .page').addClass('hidden');
        
        // ??????!@?$!?@$!?@$!@???$? ? ?????????? Why won't the above work but these will? #id priority?
        $('#index').addClass('hidden');
        $('#then').addClass('hidden');
        $('#now').addClass('hidden');
        $('#when').addClass('hidden');
        
        // Unload content before rendering new page... Do we want this? Might be friendly on memory
        // but data will need to be fetched each time. Dynamic loading alone might be enough to alleviate
        // initial page load times, but unloading just might not be useful.
        document.getElementById("thenContent").innerHTML = "";
        document.getElementById("nowContent").innerHTML = "";
        document.getElementById("whenContent").innerHTML = "";


        var map = {

            // The Homepage.
            '': function() { renderPage('index'); },

            // "Then" page.
            '#then': function() { renderPage('then'); },

            // "Now" page.
            '#now': function() { renderPage('now'); },
            
            // "When..?" page.
            '#when': function() { renderPage('when'); }
        };
            
        // Execute the needed function depending on the url keyword (stored in temp).
        if(map[temp]){
            map[temp]();
        }
        // If the keyword isn't listed in the above - render the error page.
        else {
            // renderErrorPage();
        }
        
    }
    
    function renderPage(target) {
        var page = $('#' + target);
        
        $(".content").removeClass("content-fade");
        
        // Remove animation classes before rendering
        // so that new animations can work correctly
		$(".now-nav").removeClass("then-from-now");
		$("#then").removeClass("then-from-now-background");
		$(".then-nav").removeClass("then-from-now-border-fade");
		
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
        
        page.removeClass('hidden');
        
        if (target.endsWith("then")) {
        	
        	// Apply styles to "then" navigation bar        	
        	$(".then-nav").attr("style",
    				"background-color: rgba(239, 201, 76, 1);" +
    				"position: fixed;" +
    				"left: 0;" +
    				"z-index: 0;" +
    				"border-left: 4px solid rgba(115, 131, 239, 1);"
    		);
    		$(".now-nav").attr("style",
    				"background-color: rgba(226, 122, 63, 1);" +
    				"position: fixed;" +
    				"left: calc(100vw - 208px);" +
    				"z-index: 1;" +
    				"border-left: 4px solid rgba(97, 226, 224, 0);" +
    				"margin-left: 4px;"
    		);
    		$(".when-nav").attr("style",
    				"background-color: rgba(223, 90, 73, 1);" +
    				"position: fixed;" +
    				"left: calc(100vw - 100px);" +
    				"z-index: 2;" +
    				"border-left: 4px solid rgba(107, 223, 165, 0);" +
    				"margin-left: 8px;"
    		);

    		// These mouseover CSS rules are marked !important in order to overcome
    		// the priority of 'background-color' being stolen by the inline rules
    		// added above.
    		$(".then-nav").removeClass("then-nav-hover");
    		$(".now-nav").addClass("now-nav-hover");
    		$(".when-nav").addClass("when-nav-hover");
    		
    		// Get content
    		$("#thenContent").load("content/then-content.html");
            $(".content").addClass("content-fade");

    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index")) {
        	
        	} else if (referringHash.endsWith("now")) {
    			$(".now-nav").addClass("then-from-now");
    			$("#then").addClass("then-from-now-background");
        	} else if (referringHash.endsWith("when")) {
        		$(".when-nav").addClass("then-from-when");
        		$(".now-nav").addClass("then-from-when2");
        		$("#then").addClass("then-from-when-background");
        	}
        	
        } else if (target.endsWith("now")) {
        	
        	// Apply styles to "now" navigation bar      	
        	$(".then-nav").attr("style",
    				"background-color: rgba(239, 201, 76, 1);" +
    				"position: fixed;" +
    				"left: 0;" +
    				"z-index: 0;" +
    				"border-left: 4px solid rgba(115, 131, 239, 0);"
    		);
    		$(".now-nav").attr("style",
    				"background-color: rgba(226, 122, 63, 1);" +
    				"position: fixed;" +
    				"left: 100px;" +
    				"z-index: 1;" +
    				"border-left: 4px solid rgba(97, 226, 224, 1);" +
    				"margin-left: 4px;"
    		);
    		$(".when-nav").attr("style",
    				"background-color: rgba(223, 90, 73, 1);" +
    				"position: fixed;" +
    				"left: calc(100vw - 100px);" +
    				"z-index: 2;" +
    				"border-left: 4px solid rgba(107, 223, 165, 0);" +
    				"margin-left: 8px;"
    		);

    		// These mouseover CSS rules are marked !important in order to overcome
    		// the priority of 'background-color' being stolen by the inline rules
    		// added above.
    		$(".then-nav").addClass("then-nav-hover");
    		$(".now-nav").removeClass("now-nav-hover");
    		$(".when-nav").addClass("when-nav-hover");
    		    		
    		// Get content
    		$("#nowContent").load("content/now-content.html");
    		
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index")) {
        		
        	} else if (referringHash.endsWith("then")) {
        		$(".now-nav").addClass("now-from-then");
        		$("#now").addClass("now-from-then-background");
        	} else if (referringHash.endsWith("when")) {
        		$(".when-nav").addClass("now-from-when");
        		$("#now").addClass("now-from-when-background");
        	}
        	
        } else if (target.endsWith("when")) {

        	// Apply styles to "when" navigation bar
        	$(".then-nav").attr("style",
    				"background-color: rgba(239, 201, 76, 1);" +
    				"position: fixed;" +
    				"left: 0;" +
    				"border-left: 4px solid rgba(115, 131, 239, 0);"
    		);
    		$(".now-nav").attr("style",
    				"background-color: rgba(226, 122, 63, 1);" +
    				"position: fixed;" +
    				"left: 100px;" +
    				"border-left: 4px solid rgba(97, 226, 224, 0);" +
    				"margin-left: 4px;"
    		);
    		$(".when-nav").attr("style",
    				"background-color: rgba(223, 90, 73, 1);" +
    				"position: fixed;" +
    				"left: 200px;" +
    				"border-left: 4px solid rgba(107, 223, 165, 1);" +
    				"margin-left: 8px;"
    		);

    		// These mouseover CSS rules are marked !important in order to overcome
    		// the priority of 'background-color' being stolen by the inline rules
    		// added above.
    		$(".then-nav").addClass("then-nav-hover");
    		$(".now-nav").addClass("now-nav-hover");
    		$(".when-nav").removeClass("when-nav-hover");
    		
    		// Get content
    		$("#whenContent").load("content/when-content.html");
    		
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index")) {
        	        		
        	} else if (referringHash.endsWith("then")) {
        		$(".when-nav").addClass("when-from-then");
        		$(".now-nav").addClass("when-from-then2");
        		$("#when").addClass("when-from-then-background");
        	} else if (referringHash.endsWith("now")) {
        		$(".when-nav").addClass("when-from-now");
        		$("#when").addClass("when-from-now-background");
        	}
        }
        
        // Update the referring hash when all rendering is complete
        referringHash = target;
    }

    render(decodeURI(window.location.hash));

});