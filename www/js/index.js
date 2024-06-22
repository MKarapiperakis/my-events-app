var image_flag = false;

var app = {
	image: null,
	imgOptions: null,

	initialize: function () {
		document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
	},

	onDeviceReady: function () {
		document.querySelector("#btn").addEventListener("click", app.callCamera);
		document.querySelector("#btn2").addEventListener("click", app.callCamera2);
		app.image = document.querySelector("#image");
	},
	//take new pic
	callCamera: function () {
		app.imgOptions =
		{
			quality: 80,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: false,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE,
			targetWidth: 300,
			targetHeight: 300,
			cameraDirection: Camera.Direction.BACK,
			correctOrientation: true,
			saveToPhotoAlbum: true
		};
		navigator.camera.getPicture(app.imgSuccess, app.imgFail, app.imgOptions);
	},
	//upload existing pic
	callCamera2: function () {
		app.imgOptions = {
			quality: 80,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: false,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE
		};
		navigator.camera.getPicture(app.imgSuccess, app.imgFail, app.imgOptions);
	},

	imgSuccess: function (imageData) {
		app.image.src = "data:image/jpeg;base64," + imageData;
		//clear memory in app
		navigator.camera.cleanup();
		image_flag = true;
	},

	imgFail: function (msg) {
		image_flag = false;
		//alert("Failed to get image: " +  msg);
	}

};

app.initialize();

function intUpload(username) {
	var imageURI1 = document.getElementById('image').getAttribute("src");



	if (image_flag == true)
		uploadPhoto(imageURI1, username);
	else
		window.location.replace("sign_in.html");


}


function uploadPhoto(imageURI, username) {
	var options = new FileUploadOptions();
	options.fileKey = "file";
	options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
	options.mimeType = "image/jpeg";

	var params = new Object();

	params.filename = username + ".jpg";
	params.username = username;

	options.params = params;
	options.chunkedMode = false;
	var ft = new FileTransfer();

	ft.upload(imageURI, "http://myuopevents.com/php/uploadImage.php", win, fail, options);
}

function win(r) {
	//alert("Code = " + r.responseCode);
	//alert("Response = " + r.response);
	//alert("Sent = " + r.bytesSent);
	window.location.replace("sign_in.html");
}

function fail(error) {
	//alert("An error has occurred: Code = " + error.code);
	//alert("here");
}