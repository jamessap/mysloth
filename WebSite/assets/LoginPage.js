 
 var DebugOn =true,
numberOfElements = 0,
  strHexColors = "",
  strRGBColors = "";

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
 
});

 var headHeight = -1;
var lastHeadSize = -1;

  window.onresize = function(event) {



 /*   var x = calculateGoldenRatio();
    $(".panel").width(x.right);
    $(".panel").height($(document).height());
   // console.log(x.right);


//var lastHeadHeight = headerHeight;
var temp = -1;
 temp = headerHeight;

   headerHeight =  $("#header").height();
if(temp != headerHeight||temp==-1){
  

}
//$("#header").css({" bottom":"calc("+String(headerHeight)+" / 85)"});

console.log(headerHeight)
 adjustDivs();*/
};

 function initialize(){
getColors();
//  alert("initialize");
 }

 function goToPageOne(){
 	 window.location.href = 'PageOne.html'; 
 }


/*********************************************** color elements **********************************************************/
function getColors() {

var all = document.getElementsByTagName("*");
numberOfElements = all.length;
 
   var myHex = String(getBase());
 console.log("base: "+getBase());
  for (var i = 0; i < numberOfElements; i++) {
 
  if (all[i].offsetWidth <= 0||all[i].nodeName =="LI"||all[i].nodeName =="A"||all[i].nodeName =="UL"){

continue;
i--;
}
    if (i == 0) {
      color = myHex;
    } else {
      color = generateRandomColor({
        red: 0,
        green: 0,
        blue: 0
      });
    }
    if (i == numberOfElements - 1) {
      strHexColors += color
    } else {
      strHexColors += color + ", ";
    }
    
console.log("color: "+color);
    $(all[i]).css("background-color", color);

if(all[i].id =="header"){ 
  $(all[i]).css("background-color",  String(getBase()));  
}

  }//end of for
}

 function getBase(){
  var rgb = [];
  for(var i = 0; i < 3; i++){
    rgb.push(Math.floor(Math.random() * 255));
  }
    return rgb2hex('rgb('+ rgb.join(',') + ')');
 }
 function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 

 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
 
function generateRandomColor(mix) {

  var red = 0.618033988749895 * Math.floor(Math.random() * 255) >> 0;

  var green = 0.618033988749895 * Math.floor(Math.random() * 255) >> 0;

  var blue = 0.618033988749895 * Math.floor(Math.random() * 255) >> 0;

  // mix the color
  if (mix != null) {
    red = (red + mix.red) / 2 >> 0;
    green = (green + mix.green) / 2 >> 0;
    blue = (blue + mix.blue) / 2 >> 0;
  }
  rr = red.toString(16);
  if (rr.length === 1) {
    rr = "0" + rr[0];
  }
  gg = green.toString(16);
  if (gg.length === 1) {
    gg = "0" + gg[0];
  }
  bb = blue.toString(16);
  if (bb.length === 1) {
    bb = "0" + bb[0];
  }
  return "#" + rr + gg + bb;
}

/*********************************************************************************************************/
