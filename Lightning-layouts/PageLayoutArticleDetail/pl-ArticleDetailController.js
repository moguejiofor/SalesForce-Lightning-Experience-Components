({   
    addClassJs : function(component, event, helper) {
        if (event.getParam("hasIcon") === true) { 		//For EZ Explorers, if the article has a character related to it
		var articleBody = component.find('adBody');	//Find the aura id
        	$A.util.addClass(articleBody, 'hasIcon')	//Add the class name to display the icon
        }
    },
})
