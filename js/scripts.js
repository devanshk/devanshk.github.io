var Ring = function (r, color) {
    this.r = r;
    this.s = 10;
    this.color = color;
};

var requestAnimationFrame =  
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };

var canvas = null;
var a = 0;
var b = 0;

var r = 200;
var x = 500;
var y = 500;
var increment=Math.PI/200;
var shapeCount = 10;

window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Should do nothing if the key event was already consumed.
      }

    console.log("event.key is ");
    console.log(event.keyIdentifier);
    switch (event.keyIdentifier) {
    case "Down":
          r += 30;
      // Do something for "down arrow" key press.
      break;
    case "Up":
          r -= 30;
      // Do something for "up arrow" key press.
      break;
    case "Left":
          shapeCount /= 2;
      // Do something for "left arrow" key press.
      break;
    case "Right":
          shapeCount *= 2;
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Escape":
      // Do something for "esc" key press.
      break;
    case "U+0031":
        increment += Math.PI/10
    case "U+0032":
        increment = Math.sqrt(increment);
    default:
      return; // Quit when this doesn't handle the key event.
    }

  // Consume the event for suppressing "double action".
  event.preventDefault();
}, true);

var render = function() {
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,1000,1000);
    
    var a1 = 3*Math.PI/4;
    var a2 = Math.PI/4;
    var a3 = 7*Math.PI/4;
    var a4 = 5*Math.PI/4;
    
    ctx.beginPath();
//    console.log("before the stuff");
    
    for (i=0; i<shapeCount; i+=1){
//        console.log("during the stuff");
        a = Math.cos(a1)*r+x;
        b = Math.cos(a1)*r+x;

//        console.log("a = ");
//        console.log(a);
        a = Math.cos(a1)*r+x; b = Math.sin(a1)*r+y;
        ctx.moveTo(a,b);
        a = Math.cos(a2)*r+x; b = Math.sin(a2)*r+y;
        ctx.lineTo(a,b);
        a = Math.cos(a3)*r+x; b = Math.sin(a3)*r+y;
        ctx.lineTo(a,b);
        a = Math.cos(a4)*r+x; b = Math.sin(a4)*r+y;
        ctx.lineTo(a,b);
        a = Math.cos(a1)*r+x; b = Math.sin(a1)*r+y;
        ctx.lineTo(a,b);
        ctx.stroke();
        a1-=increment;
        a2-=increment;
        a3-=increment;
        a4-=increment;
    }
//    console.log("after the stuff");
    
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();

    // Redraw
    requestAnimationFrame(render);
};