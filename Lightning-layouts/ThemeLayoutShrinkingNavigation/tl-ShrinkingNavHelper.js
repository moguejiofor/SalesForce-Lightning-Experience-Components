({
	getHeaderJS : function(component, event) {
	var currentDate		= new Date();
	var currentMonth 	= currentDate.getMonth();
        var currentDay		= currentDate.getDate();
        currentMonth		= currentMonth + 1;					//getMonth is 0 based so add 1 to fit our # system
        var bgContainer		= component.find("bgImage");
        var mainContainer	= component.find("main-container");
	var isPublic		= component.get("v.public");
        
        //Add public class to background image
        if (isPublic) {
            $A.util.addClass(bgContainer, 'public');
            $A.util.addClass(mainContainer, 'public');
        }
        
        //Seasonal headers
        if(currentMonth >= 3 && currentMonth <= 5) {					//if March-May add a class name
            if (currentMonth == 3) {							//if March add a class name
            	$A.util.addClass(bgContainer, 'bday');									
            } else {
                $A.util.addClass(bgContainer, 'spring');
            }            
        } else if (currentMonth >= 9 && currentMonth <= 11) {				//if Sept-Nov add a class name
            $A.util.addClass(bgContainer, 'fall');
            if (currentMonth == 9 && currentDay >= 15) {				//if late Sept-Nov add a class name
                $A.util.addClass(bgContainer, 'givingtuesday');
            } 
        } else if (currentMonth == 1 || currentMonth == 2 || currentMonth == 12){	//if Dec-Feb add a class name
            $A.util.addClass(bgContainer, 'winter');
        }
	}
})
