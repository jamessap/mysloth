 
var DebugOn =true,
toggle = true,
numberOfElements = 0,
  strHexColors = "",
  strRGBColors = "";



/*

    if(sessionStorage.getItem('SSsloths')==null){

grabSloths();
sessionStorage.setItem('SSsloths','false');
//alert(sessionStorage.getItem('SSsloths'));
} 
 

 */
 


function checkSloths(){
  try{
 
  }catch(err){alert(err.toString())} 
}




  function initializePageTwo() {  

 generateImgs();
 setHeader(); 
 sizeImgs(); 
 getColors();

  }

     function downsizeImgs(){
var bDoOnce = true;
    var minH = 0;
    var minW = 0;
 try{
 
  var randNumImgs = 0;

    var all = document.getElementsByTagName("*");
  for (var i = 0; i < all.length; i++) {
 
  if ( all[i].nodeName =="IMG"){

    if(bDoOnce){

minH = $("#"+String(all[i].id)).height();
     minW = $("#"+String(all[i].id)).width();

      bDoOnce=false;
    }

   // console.log($("#"+String(all[i].id)).width()+ " ~ " +$("#"+String(all[i].id)).height());

    if($("#"+String(all[i].id)).height() < minH){

minH = $("#"+String(all[i].id)).height();
    }



     if($("#"+String(all[i].id)).width() < minW){

minW = $("#"+String(all[i].id)).width();
    }
 
}
}// end for
 

 $(".imgsdivs,.imgsPageTwo").css({ "display":"inline-block","width":String((minH))+"px","height":String((minW))+"px"});

 
 
 // alert(minH+ " * "+minW);
} catch (err) { if (DebugOn) {alert(err.toString());}}
 }


   function resizeImgs(){

    var maxH = 0;
    var maxW = 0;
 try{
 
  var randNumImgs = 0;

    var all = document.getElementsByTagName("*");
  for (var i = 0; i < all.length; i++) {
 
  if ( all[i].nodeName =="IMG"){

    console.log($("#"+String(all[i].id)).width()+ " ~ " +$("#"+String(all[i].id)).height());

    if($("#"+String(all[i].id)).height() > maxH){

maxH = $("#"+String(all[i].id)).height();
    }

     if($("#"+String(all[i].id)).width() > maxW){

maxW = $("#"+String(all[i].id)).width();
    }

  /*  var imgDivId = String(all[i].id);

imgDivId = imgDivId.replace("img_","#imgdiv_");
document.getElementById(imgDivId).text = String(all[i].id);*/
 
}
}// end for
/*
  all = document.getElementsByTagName("*");
  for (var i = 0; i < all.length; i++) {
var imgDivId = String(all[i].id);

imgDivId = imgDivId.replace("img_","imgdiv_");*/

$(".imgsdivs").css({"color":"white", "border":"1px solid white","display":"inline-block","width":String((maxH))+"px","height":String((maxW))+"px"});


// console.log();
//  display: inline-block;
//    text-align: center;
//}

//alert(maxH+ " * "+maxW);
} catch (err) {
     if (DebugOn) {
       alert(err.toString());
     }
   }
 }


function setHeader(){
  $("#canvas-PageTwo").css({"overflow-y": "scroll","margin-top": String($("#header").height()) });
}


function arrangeElements(){
try{

  // resizeImgs();

    downsizeImgs();
  getColors();

  checkSloths();
/*
var x = calculateGoldenRatio();
$("#canvas-PageTwo").height(x.top);
 $("#canvas-PageTwo").width("100%");
*/

 

 //alert("arrangeElements")
 }catch (err) {
     if (DebugOn) {
       alert(err.toString());
     }
   }

}

  




 function sizeImgs(){
 try{
 
  var randNumImgs = 0;

    var all = document.getElementsByTagName("*");
  for (var i = 0; i < all.length; i++) {
 
  if ( all[i].nodeName =="IMG"){

     var imgHeight = ((Math.random()*500) + 50).toFixed();
 var imgWidth= ((Math.random()*500) + 50).toFixed();

    var color0 = '#'+ Math.round(0xffffff * Math.random()).toString(16);

var imgDivId = String(all[i].id);

imgDivId = imgDivId.replace("img_","imgdiv_");

 $("#"+String(all[i].id)).css({"width":String(imgWidth),"height":String(imgHeight),"border":"solid 3px "+String(color0)});

 $("#"+imgDivId).css({"width":String((imgWidth))+"px","height":String((imgHeight))+"px"});
 //console.log(imgDivId);
//alert(imgHeight+ " "+imgWidth+" " + $("#"+all[i].id).width()+" "+all[i].id);

}
}// end for


} catch (err) {
     if (DebugOn) {
       alert(err.toString());
     }
   }
 }
function generateImgs(){
     var imgs ="";
   
 try{
 randNumImgs = ((Math.random()*50) + 100).toFixed();
for(var v = 0; v < randNumImgs;v++){
  // imgs += '<img id="img_'+String(v)+'" src="http://upload.wikimedia.org/wikipedia/commons/1/18/Ocellaris_clownfish.JPG" />';

 imgs += '<div class="imgsdivs" id="imgdiv_'+String(v)+'"><img id="img_'+String(v)+'" class="imgsPageTwo" src="https://duckduckgo.com/i/8427d5d8.jpg" /></div>';

 

//  imgs += '<img  id="img_'+String(v)+'" src="http://lorempixel.com/270/360/abstract" />';

 
}

document.getElementById("canvas-PageTwo").innerHTML = imgs;
//  document.getElementById("can").innerHTML = imgs;
} catch (err) {
     if (DebugOn) {
       alert(err.toString());
     }
   }
}
function showImg(){ $("img").css("display", "inline-block");}

function hideShowImg(){


  if($('img:visible').length == 0){
$("img").css("display", "inline-block");
}else{
$("img").css("display", "none");
}


}

  function hideImg(){ $("img").css("display", "none"); }


    

   function goToPageOne(){
 // file:///C:/Users/James/Documents/PageTwo.html
 window.location.href = 'PageOne.html';
// alert("buttonTwo!!!");
  }





/*****************************************************************************************************************/

function getBaseColor(){
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
 
 
function getColors() {
try{
var all = document.getElementsByTagName("*");
numberOfElements = all.length;
 

   var myHex = String(getBaseColor());
 
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

    // rbga call
   // hexToRGB(color, i);
    $(all[i]).css("background-color", color);
   // alert(color);
 

if(all[i].id =="header"){ 
//  alert(all[i].nodeName )
  $(all[i]).css("background-color",  String(getBaseColor()));  

}

 

  }//end of for


 }catch (err) {
     if (DebugOn) {
       alert(err.toString());
     }
   }
// }
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

/*****************************************************************************************************************/


