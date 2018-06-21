

function submit(){
	alert("Form submited");
}
function goToOne(){
  window.location.href = 'PageOne.html'; 
}

function init() {
	getColors();


    var hideBtns = '';//'FAB_3'; 
    FAButton(hideBtns);


}


function initMap(){
	  var pointA = new google.maps.LatLng(51.7519, -1.2578),
        pointB = new google.maps.LatLng(50.8429, -0.1313),
        myOptions = {
            zoom: 7,
            center: pointA
        },map = new google.maps.Map(document.getElementById('canvas'), myOptions),
}




