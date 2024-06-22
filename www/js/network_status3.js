 document.addEventListener("offline", onOffline, false);
 document.addEventListener("online", onOnline, false);
 
function onOffline() {	

  
    document.getElementById("offline").style.display = "block";
	
}

function onOnline() {	

 document.getElementById("offline").style.display = "none";
   window.location.replace("showEvents.html");

	

  
}