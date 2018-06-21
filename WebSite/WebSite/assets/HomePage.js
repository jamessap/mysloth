 
 var DebugOn =true;

$(document).ready(function() { 
  
   	   var slides = '<div ng-controller="slideShowController" class="imageslide" ng-switch="slideshow" ng-animate="animate"> '+ 
          '<div class="slider-content" ng-switch-when="1"> '+ 
          '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MC_Drei-Finger-Faultier.jpg/1024px-MC_Drei-Finger-Faultier.jpg" /></div> '+  
          '<div class="slider-content" ng-switch-when="2"> '+
          '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg/1024px-Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg" /></div> '+  
          '<div class="slider-content" ng-switch-when="3"> '+  
          '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg/800px-Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg" /></div> '+      
          '<div class="slider-content" ng-switch-when="4"> '+
          '<img src="page-one-img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Choloepus_didactylus_2_-_Buffalo_Zoo.jpg/800px-Choloepus_didactylus_2_-_Buffalo_Zoo.jpg" /> </div>'+
          '</div> ';
 
document.getElementById("canvas").innerHTML = slides;

   $(".imageslide").css({"margin":"0 auto"});
 
});


  window.onresize = function(event) {

 
};

 function initialize(){
     getColors();

//setTimeout(function(){ 
      var hideBtns = '';//'FAB_3'; 
    FAButton(hideBtns);
//alert("Hello"); }, 1000);
//  alert("initialize");
 }

 function goToPageOne(){
 	 window.location.href = 'PageOne.html'; 
 }
function goToPageThree(){
     window.location.href = 'PageThree.html'; 
}

