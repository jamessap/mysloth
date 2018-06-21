
var DebugOn = true,
numberOfElements = 0,
  strHexColors = "",
  strRGBColors = "";





  //**********************************************************KML FAB********************************************************************//

function FAButton(hide_buttons) {
    try {

    //  alert(hide_buttons);
        (function ($) {
            if (!$.kc) { $.kc = new Object(); };
            $.kc.fab = function (el, links, options) {
                // To avoid scope issues, use 'base' instead of 'this'
                // to reference this class from internal events and functions.
                var base = this;
                // Access to jQuery and DOM versions of element
                base.$el = $(el);
                base.el = el;
                // Add a reverse reference to the DOM object
                base.$el.data("kc.fab", base);
                var main_fab_btn;
                var sub_fab_btns;
                var button = null;
                var subButtonLength = 0;
                base.init = function () {
                    base.links = links;
                    if (base.links.length > 0) {
                        main_btn = base.links[0];
                        color_style = (main_btn.color) ? "color:" + main_btn.color + ";" : "";
                        bg_color_style = (main_btn.bgcolor) ? "background-color:" + main_btn.bgcolor + ";" : "";
                        main_btn_dom = "<button data-link-href='" + ((main_btn.url) ? main_btn.url : "") + "' data-link-target='" + ((main_btn.target) ? main_btn.target : "") + "' class='kc_fab_main_btn' style='" + bg_color_style + "'><span style='" + color_style + "'>" + main_btn.icon + "</span></button>";
                        sub_fab_btns_dom = "";
                        base.links.shift();
                        subButtonLength = base.links.length;
                        // Loop through the remaining links array  
                        for (var i = 0; i < subButtonLength; i++) {// sets the id of sub button 
                            color_style = (base.links[i].color) ? "color:" + base.links[i].color + ";" : "";
                            bg_color_style = (base.links[i].bgcolor) ? "background-color:" + base.links[i].bgcolor + ";" : "";

                            sub_fab_btns_dom += "<div><button id=\"FAB_" + i + "\" data-link-title='" + base.links[i].title + "' data-link-href='" + (base.links[i].url ? base.links[i].url : "") + "' data-link-target='" + ((base.links[i].target) ? base.links[i].target : "") + "' class='sub_fab_btn' style='" + bg_color_style + "'><span style='" + color_style + "'>" + base.links[i].icon + "</span></button></div>";
                            //    if (i == base.links.length - 1) {  } 
                        };//end of for 
                        sub_fab_btns_dom = "<div class='sub_fab_btns_wrapper'>" + sub_fab_btns_dom + "</div>";
                        base.$el.append(sub_fab_btns_dom).append(main_btn_dom);
                    } //else {   alert("Invalid links array param"); }
                    base.options = $.extend({}, $.kc.fab.defaultOptions, options);
                    main_fab_btn = base.$el.find(".kc_fab_main_btn");
                    sub_fab_btns = base.$el.find(".sub_fab_btns_wrapper");
                    main_fab_btn.click(function (e) {
                        if ($(this).attr('data-link-href').length > 0) {
                            if ($(this).attr('data-link-target')) {
                                window.open($(this).attr('data-link-href'), $(this).attr('data-link-target'));
                            } else {
                                window.location.href = $(this).attr('data-link-href');
                            }
                        }
                        sub_fab_btns.toggleClass('show');
                        if ($(".kc_fab_overlay").length > 0) {
                            $(".kc_fab_overlay").remove();
                            main_fab_btn.blur();
                        } else {
                            $('body').append('<div class="kc_fab_overlay" ></div>');
                        }
                        if ($(this).find(".ink").length === 0) {
                            $(this).prepend("<span class='ink'></span>");
                        } else {
                            $(this).find(".ink").remove();
                            $(this).prepend("<span class='ink'></span>");
                        }
                        ink = $(this).find(".ink");
                        if (!ink.height() && !ink.width()) {
                            d = Math.max($(this).outerWidth(), $(this).outerHeight());
                            ink.css({ height: d, width: d });
                        }
                        x = e.pageX - $(this).offset().left - ink.width() / 2;
                        y = e.pageY - $(this).offset().top - ink.height() / 2;
                        ink.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
                    });

                    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Click Events &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                  //  for (var i = 0; i < subButtonLength; i++) { document.getElementById("FAB_" + i + "").addEventListener("mousedown", set_button_click ); }
for (var i = 0; i < subButtonLength; i++) { document.getElementById("FAB_" + i + "").addEventListener("mousedown", function(){ 


var id =this.id;
  //alert(id);
 

 if(id.includes("0")==true){initMap();alert("alien!");}else if(id.includes("1")==true){alert("moon!");}else if(id.includes("2")==true){alert("mushroom!");}else if(id.includes("3")==true){alert("ghost!");}

 } ); }

               
                    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

                    // hides buttons specified  
                    var hide_me = '';
                    if (hide_buttons) {
                        var hidden_btn_arr = hide_buttons.split(',')
                        for (var i = 0; i < hidden_btn_arr.length; i++) {
                            hide_me = hidden_btn_arr[i];
                            $("#" + hide_me + "").hide();
                        }
                    }
 //---------------------------------------------------------------------------------------------------
                        //addKML("James", "http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"); }
                 /*   sub_fab_btns.find('.sub_fab_btn').on('mousedown', function (e) {
                       

                        if (DebugOn) {

                            if (this.id == 'FAB_0') { alert('FAB_0'); }

                            if (this.id == 'FAB_1') { alert('FAB_1'); }

                            if (this.id == 'FAB_2') { alert('FAB_2'); }

                            if (this.id == 'FAB_3') { alert('FAB_3'); } 
                        }
                       
                        if ($(this).attr('data-link-href').length > 0) {
                            if ($(this).attr('data-link-target')) {
                                window.open($(this).attr('data-link-href'), $(this).attr('data-link-target'));
                            } else {
                                window.location.href = $(this).attr('data-link-href');
                            }
                        }
                    });*/
                     //--------------------------------------------------------------------------------------------------- 
                    main_fab_btn.focusout(function () {
                        sub_fab_btns.removeClass('show');
                        overlay = $(".kc_fab_overlay");
                        overlay.remove();

                    });
                    // Put your initialization code here
                };
                // Sample Function, Uncomment to use: base.functionName = function(paramaters){ }; 

                // Run initializer
                base.init();
            };
            $.kc.fab.defaultOptions = {};
            $.fn.kc_fab = function (links, options) {
                return this.each(function () {
                    (new $.kc.fab(this, links, options));
                });
            };
        })(jQuery);
        var links = [{ "color": "black", "bgcolor": "white", "icon": "+" },
          { "bgcolor": "#99ddff", "color": "#fffff", "icon": "<img class='fab-imgs' src=\"images/alien.png\"   alt='alien' title=\"alien\">" },
        { "bgcolor": "#99ffbb", "color": "white", "icon": "<img  class='fab-imgs' src=\"images/moon.png\"   alt=\"Shapes\" title=\"Shapes\">" },
         { "bgcolor": "yellow", "color": "white", "icon": "<img  class='fab-imgs' src=\"images/mushroom.png\"  alt=\"test_1\" title=\"test_1\">" },
          { "bgcolor": "red", "color": "white", "icon": "<img  class='fab-imgs' src=\"images/ghost.png\"    alt=\"test_2\" title=\"test_2\">" }
        ]
        $('.kc_fab_wrapper').kc_fab(links);
    } catch (e) { if (DebugOn) { alert(e.name + " Floating Action Button " + e.message) }; }
}
function set_button_click( ) {

    try {
alert("set_button_click ");
    }catch(e){}
  }
function calculateGoldenRatio() {
     try{
      var width = $(document).width();
       var height = $(document).height();
       if (!width || !height) {
         return {};
       }
       return {
         height: height,
         top: Math.round(height / 1.61803),
         bottomDebugOn: height - Math.round(height / 1.61803),
         width: width,
         right: width - Math.round(width / 1.61803),
         left: Math.round(width / 1.61803),
         total: Math.round(width * 1.61803)
       };
   }catch(err){alert(err.toString());}
 }



/*********************************************** color elements **********************************************************/



function getColors() {

var bool0 = false;
var bool1 = false;
var bool2 = false;

try{
  var all = document.getElementsByTagName("*");
  numberOfElements = all.length;

  var myHex = String(getBase());
  var Red =  parseInt(myHex.substring(1, 3), 16);
  var Green =  parseInt(myHex.substring(3, 5), 16);
  var Blue =  parseInt(myHex.substring(5, 7), 16);


    // console.log("base: "+getBase()+" ***");
    for (var i = 0; i < numberOfElements; i++) {
 
 var myClass = String(all[i].className);
// button raised green
if (myClass.includes("button raised")==true){

//  alert(all[i].className)
 continue;
 //        i--;
 }else if ( all[i].className == "center" ){

 // alert(all[i].className)
    continue;
    //     i--;
 }else if(all[i].nodeName == "PAPER-RIPPLE"){
 //  alert(all[i].nodeName)
      continue;
 //        i--;
 }else if(all[i].nodeName =="LI"){ 
  // alert(all[i].nodeName)
        continue;
       //  i--;
         }else if(all[i].nodeName =="A"){
       //    alert(all[i].nodeName)
           continue;
       //  i--;
         }else if(all[i].nodeName =="UL"){
       //    alert(all[i].nodeName)
           continue;
      //   i--;
       }else if (all[i].offsetWidth <= 0  ){  
  // alert(all[i].nodeName)
        continue;
      //   i--;
      }else if (all[i].offsetHeight <= 0  ){  
   
        continue;
       //  i--;
      }else{ 

   

      //  alert(all[i].className)
      /*
      if(Red<0){Red = Red + 255;}
      if(Red == 1){if(bool0){ Red = 2;  bool0= false; } bool0 = true; }
      if(Red == 0){if(bool0){ Red = 1;  bool0= false; } bool0 = true; }
      Red = (Red-1) + (Red - 2);
      if(Red>255){Red = Red - 255;}



      if(Green<0){Green = Green + 255;}
      if(Green == 1){if(bool1){ Green = 2;  bool1= false; } bool1 = true; }
      if(Green == 0){if(bool1){ Green = 1;  bool1= false; } bool1 = true; }
      Green = (Green-1) + (Green - 2);
      if(Green>255){Green = Green - 255;}



      if(Blue<0){Blue = Blue + 255;}
      if(Blue == 1){if(bool2){ Blue = 2;  bool2= false; } bool2 = true; }
      if(Blue == 0){if(bool2){ Blue = 1;  bool2= false; } bool2 = true; }
      Blue = (Blue-1) + (Blue - 2);
      if(Blue>255){Blue = Blue - 255;} 


      color = "#"+convert(Red)+convert(Green)+convert(Blue);

      */

      color = generateRandomColor({ red: Red, green: Green, blue: Blue });



      console.log( "color: "+hexToRgbA(color,0.5));

      $(all[i]).css("background-color", hexToRgbA(color,1));


      if(all[i].id =="header"){ 
        console.log("myHex: "+hexToRgbA(myHex,1));
        $(all[i]).css("background-color",  hexToRgbA(myHex,1));  
      }

    }//end of for



  console.log("***********************************************")

}

  }catch(err){alert(err.toString());}
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

function hexToRgbA(hex, opc){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opc+')';
    }
    throw new Error('Bad Hex');
}

function convert(integer) {
    var str = Number(integer).toString(16);
    return str.length == 1 ? "0" + str : str;
};
 
 
function generateRandomColor(mix) {
 
  var red = Math.floor(Math.random() * 255) >> 0;

  var green = Math.floor(Math.random() * 255) >> 0;

  var blue = Math.floor(Math.random() * 255) >> 0;
 
  
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




 

   
  /*
if(Red<0){Red = Red + 255;}
if(Red == 1){if(bool0){ Red = 2;  bool0= false; } bool0 = true; }
 if(Red == 0){if(bool0){ Red = 1;  bool0= false; } bool0 = true; }
 Red = (Red-1) + (Red - 2);
if(Red>255){Red = Red - 255;}

   
  
if(Green<0){Green = Green + 255;}
if(Green == 1){if(bool1){ Green = 2;  bool1= false; } bool1 = true; }
if(Green == 0){if(bool1){ Green = 1;  bool1= false; } bool1 = true; }
 Green = (Green-1) + (Green - 2);
if(Green>255){Green = Green - 255;}


 
if(Blue<0){Blue = Blue + 255;}
if(Blue == 1){if(bool2){ Blue = 2;  bool2= false; } bool2 = true; }
if(Blue == 0){if(bool2){ Blue = 1;  bool2= false; } bool2 = true; }
 Blue = (Blue-1) + (Blue - 2);
if(Blue>255){Blue = Blue - 255;}*/
 

// color = "#"+convert(Red)+convert(Green)+convert(Blue);
 // console.log(color);//Red+ " "+Green+ " " +Blue);
// console.log(Red+ " "+Green+" "+Blue+" "+color)
