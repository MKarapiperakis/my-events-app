
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    function onRequestSuccess(success){
    console.log("Successfully requested accuracy: "+success.message);
}

function onRequestFailure(error){
    console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);
    if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
        if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
            cordova.plugins.diagnostic.switchToLocationSettings();
        }
    }
}

cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
}

