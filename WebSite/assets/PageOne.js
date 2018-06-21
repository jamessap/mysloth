 
var DebugOn =true,
  intervalSlothRotate = null,slideShowObj =null,headerHeight=-1;
 


 
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

  // $(".sliders").css({"float":"right"});

  getColors();

 });


function initialize() { 
 
  if(sessionStorage.getItem('isPanelOpen') =='true'){ 

     
      slidePanel();
   
  }else{

      $('.panel').css({"width": "0", "opacity": "0.0" });
  }
   
}
 
window.onresize = function(event) {

 if(sessionStorage.getItem('isPanelOpen') =='true'){ 
    var x = calculateGoldenRatio();
   $(".panel").css({"width":x.right+"px","height":$(document).height()-$("#header").height()+"px","margin-top":$("#header").height()+"px"});
    $(".links").css({"width":$(".panel").width()+"px"});
   }
};

function goHome(){
  window.location.href = 'index.html'; 
}


function adjustDivs(){

  var winWid = $(window).width();
  var tempWidth = (winWid - $('.panel').width());
  $('#page-one-img').css({"margin-left": String($('.panel').width())+"px","width": String(tempWidth) ,"height":String($("#canvas").height())+"px"});

}



function slidePanel(){

  try{

     var x = calculateGoldenRatio();
   
    $(".panel").css({"width":x.right+"px","height":$(document).height()-$("#header").height()+"px","margin-top":$("#header").height()+"px"});
    $(".links").css({"width":$(".panel").width()+"px"});
//  $(".panel").height($(document).height());
    
    
    var panel = $('.panel');

    if (panel.hasClass('open')) {

 
        sessionStorage.setItem('isPanelOpen', 'false');
      
        panel.removeClass('open');

      $('.panel-content').fadeOut('xfast', function () { 

   $(".imageslide").css({"margin":"0 auto"});
          $('.panel').stop().animate({
             width: '0',
             opacity: 0.0
          }, 0);
      });

    } else {


   $(".imageslide").css({"margin-left":"auto","margin-right":"0"});
 $(".links").css({"width":$(".panel").width()+"px"});

      panel.addClass('open');
      sessionStorage.setItem('isPanelOpen', 'true');
 
      $('.panel').stop().animate({
        width: 'calc(100% * 1.61803)',
        opacity: 1
      }, 0, function () { 
         $('.panel-content').fadeIn(0);
      });  
    }

  }catch(err){alert(err.toString());}   
}


function getRandomArbitrary(min, max) {
return Math.round(Math.random() * (max - min) + min);
}

function loadSloth(){
var img = '';
var num = -1;
try{
 
//num = getRandomArbitrary(0, 3);
//alert(num);
switch(getRandomArbitrary(0, 3)){
  case 0:
  img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MC_Drei-Finger-Faultier.jpg/1024px-MC_Drei-Finger-Faultier.jpg" />';
   fixImg();
   document.getElementById("canvas").innerHTML = img;
break;
case 1:
     var img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg/1024px-Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg" />';
   fixImg();
   document.getElementById("canvas").innerHTML = img;
break;
case 2:
  var img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg/800px-Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg" />';
   fixImg();
   document.getElementById("canvas").innerHTML = img;

break;
case 3:

   var img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Choloepus_didactylus_2_-_Buffalo_Zoo.jpg/800px-Choloepus_didactylus_2_-_Buffalo_Zoo.jpg" />';
   fixImg();
   document.getElementById("canvas").innerHTML = img;

break;
default:
 var img = '<img id="page-one-img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Choloepus_didactylus_2_-_Buffalo_Zoo.jpg/800px-Choloepus_didactylus_2_-_Buffalo_Zoo.jpg" />';
fixImg();
  document.getElementById("canvas").innerHTML = img;
break;
}


}catch(err){alert(err.toString());} 
 
}

   function goToPageTwo() {  window.location.href = 'PageTwo.html';  }

function showImg(){ $("img").css("display", "block");}

  function hideImg(){ $("img").css("display", "none"); }


 

function rotateSloth(){
//var myInterval = null;
   try{

           if (slideShowObj) {
      clearInterval(slideShowObj);
    } 

  intervalSlothRotate = setInterval(function(){ 

      var d = new Date();
    var sec = d.getSeconds();

    if(sec<16){

       var img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg/1024px-Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg" />';
document.getElementById("canvas").innerHTML = img;
fixImg();
 //  alert(sec+ ": 20 or less");

    }else if(sec<31){


   var img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg/800px-Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg" />';
document.getElementById("canvas").innerHTML = img;
fixImg();
//  alert(sec+ ": 20 - 40");
    }else if(sec<46){
var img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MC_Drei-Finger-Faultier.jpg/1024px-MC_Drei-Finger-Faultier.jpg" />';
     document.getElementById("canvas").innerHTML = img;
fixImg(); 
    } else{

     
   var img = '<img id="page-one-img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Choloepus_didactylus_2_-_Buffalo_Zoo.jpg/800px-Choloepus_didactylus_2_-_Buffalo_Zoo.jpg" />';
document.getElementById("canvas").innerHTML = img;
fixImg();
 // alert(sec+ ": 41 - 60");
    }

  }, 1000);

  }catch(err){

  } 
}

var tsNum = 0;


 function toggleSloth(){
var img = "";
try{

    if (intervalSlothRotate) {
      clearInterval(intervalSlothRotate);
    }

           if (slideShowObj) {
      clearInterval(slideShowObj);
    } 


 
    if(tsNum < 1){

         img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg/1024px-Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg" />';
 

 //  alert(sec+ ": 20 or less");

    }else if(tsNum<2){
     img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg/800px-Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg" />';
 
 
//  alert(sec+ ": 20 - 40");
    }else if(tsNum<3){
  img = '<img id="page-one-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MC_Drei-Finger-Faultier.jpg/1024px-MC_Drei-Finger-Faultier.jpg" />';
  

    } else if(tsNum<4){

     
     img = '<img id="page-one-img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Choloepus_didactylus_2_-_Buffalo_Zoo.jpg/800px-Choloepus_didactylus_2_-_Buffalo_Zoo.jpg" />';
 // alert(sec+ ": 41 - 60");
    }

      document.getElementById("canvas").innerHTML = img;
      fixImg();
      tsNum++;
      if(tsNum == 4){tsNum=0;}

 
 // alert("toggle sloth!!!");
}catch(err){alert("toggle sloth: "+err.toString());}

}
 function ballz2(){alert("ballz2");}
  function ballz3(){alert("ballz3");}
 function ballz4(){alert("ballz4");}


function fixImg(){
   if(sessionStorage.getItem('isPanelOpen') =='true'){
var x = calculateGoldenRatio();
    $("#page-one-img").width(x.left);
    $("#page-one-img").height($(document).height());
    $("#page-one-img").css("float","right");
   // console.log(x.left);
}else{
     $("#page-one-img").width($(document).width());
    $("#page-one-img").height($(document).height());
}
}
 

function setSlides(){


 // window.location.href = 'PageOne.html'; 

  /*
  setTimeout(function(){ 

    function slideShowController($scope, $timeout) {  
        var slidesInSlideshow = 3;  
        var slidesTimeIntervalInMs = 3000; 

          $scope.slideshow = 1;  
          var slideTimer = $timeout(function interval() {  
            $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;  
            slideTimer = $timeout(interval, slidesTimeIntervalInMs);  
          }, slidesTimeIntervalInMs);  
    }

  }, 0);

  */
/*
setTimeout(function(){ 
   var slides = '<div ng-controller="slideShowController" class="imageslide" ng-switch="slideshow" ng-animate="animate"> '+ 
      '<div class="slider-content" ng-switch-when="1"> '+ 
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MC_Drei-Finger-Faultier.jpg/1024px-MC_Drei-Finger-Faultier.jpg" /></div> '+  
      '<div class="slider-content" ng-switch-when="2"> '+
      '<img  class="sliders" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg/1024px-Bradypus_tridactylus_-Parque_del_Este%2C_Caracas%2C_Venezuela-8.jpg" /></div> '+  
      '<div class="slider-content" ng-switch-when="3"> '+  
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg/800px-Choloepus_hoffmanni_%28Puerto_Viejo%2C_CR%29_crop.jpg" /></div> '+      
      '<div class="slider-content" ng-switch-when="4"> '+
      '<img  class="sliders" src="page-one-img" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Choloepus_didactylus_2_-_Buffalo_Zoo.jpg/800px-Choloepus_didactylus_2_-_Buffalo_Zoo.jpg" /> </div>'+
      '</div> ';
   
  document.getElementById("canvas").innerHTML = slides;

}, 0);

*/
}

  