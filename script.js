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
        
        /* Here we want a function to unload the content from previous pages, I think */
        
        page.removeClass('hidden');
        
        if (target.endsWith("then")) {
        	
        	// Apply styles to "then" page        	
        	$(".then-nav").attr("style",
    				"background-color: rgba(239, 201, 76, 1);" +
    				"position: fixed;" +
    				"left: 0;" +
    				"z-index: 0;" +
    				"border-left: 4px solid rgba(115, 131, 239, 1);" +
    				"padding-right: 4px;"
    		);
    		$(".now-nav").attr("style",
    				"background-color: rgba(226, 122, 63, 1);" +
    				"position: fixed;" +
    				"left: calc(100vw - 200px);" +
    				"z-index: 1;"
    		);
    		$(".when-nav").attr("style",
    				"background-color: rgba(223, 90, 73, 1);" +
    				"position: fixed;" +
    				"left: calc(100vw - 100px);" +
    				"z-index: 2;"
    		);
    		
    		// Get content
    		$("#thenContent").load("content/then-content.html");
    		
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index")) {
        	
        	} else if (referringHash.endsWith("now")) {
    			
        	} else if (referringHash.endsWith("when")) {
    			
        	}
        	
        } else if (target.endsWith("now")) {
        	// Apply styles to "now" page        	
        	$(".then-nav").attr("style",
    				"background-color: rgba(239, 201, 76, 1);" +
    				"position: fixed;" +
    				"left: 0;" +
    				"z-index: 0;"
    		);
    		$(".now-nav").attr("style",
    				"background-color: rgba(226, 122, 63, 1);" +
    				"position: fixed;" +
    				"left: 100px;" +
    				"z-index: 1;" +
    				"border-left: 4px solid rgba(97, 226, 224, 1);" +
    				"padding-right: 4px;"
    		);
    		$(".now-nav:hover").attr("style","background-color: rgba(226, 122, 63, 1);");
    		$(".when-nav").attr("style",
    				"background-color: rgba(223, 90, 73, 1);" +
    				"position: fixed;" +
    				"left: calc(100vw - 100px);" +
    				"z-index: 2;"
    		);
    		
    		// Get content
    		$("#nowContent").load("content/now-content.html");
    		
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index")) {
        		
        	} else if (referringHash.endsWith("then")) {
        		
        	} else if (referringHash.endsWith("when")) {
        		
        	}
        	
        } else if (target.endsWith("when")) {
        	// Apply styles to "when" page
        	$(".then-nav").attr("style",
    				"background-color: rgba(239, 201, 76, 1);" +
    				"position: fixed;" +
    				"left: 0;"
    		);
    		$(".now-nav").attr("style",
    				"background-color: rgba(226, 122, 63, 1);" +
    				"position: fixed;" +
    				"left: 100px;"
    		);
    		$(".when-nav").attr("style",
    				"background-color: rgba(223, 90, 73, 1);" +
    				"position: fixed;" +
    				"left: 200px;" +
    				"border-left: 4px solid rgba(107, 223, 165, 1);" +
    				"padding-right: 4px;"
    		);
    		$(".when-nav:hover").attr("style","background-color: rgba(223, 90, 73, 1);");
    		
    		// Get content
    		$("#whenContent").load("content/when-content.html");
    		
    		// Evaluate the referring page to play the correct nav animations
        	if (referringHash.endsWith("index")) {
        	        		
        	} else if (referringHash.endsWith("then")) {
        		
        	} else if (referringHash.endsWith("now")) {
        		
        	}
        }
        
        referringHash = target;
    }

    render(decodeURI(window.location.hash));

});