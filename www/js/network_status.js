 document.addEventListener("offline", onOffline, false);
 document.addEventListener("online", onOnline, false);
 
function onOffline() {	
	
  document.getElementById("nav").style.display = "none";
    document.getElementById("offline").style.display = "block";
	document.getElementById("mapBtn").style.visibility = "hidden";
	document.getElementById("infoBtn").style.visibility = "hidden";
}

function onOnline() {	

 document.getElementById("offline").style.display = "none";
   
    document.getElementById("nav").style.display = "block";
	document.getElementById("mapBtn").style.visibility = "visible";
	document.getElementById("infoBtn").style.visibility = "visible";
 
}