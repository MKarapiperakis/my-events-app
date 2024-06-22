 
 function navbtn()
    {
       
        if(rotate == false)
        {
            document.getElementById("navbutton").style.transform = "rotate(360deg)";
            
            rotate = true;
        }
        else
        {
            document.getElementById("navbutton").style.transform = "rotate(-180deg)";
            rotate = false;
        }
        
    }