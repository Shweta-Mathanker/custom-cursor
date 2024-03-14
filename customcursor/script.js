var crsr  = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function(dets){
 crsr.style.left =dets.x+30+"px";  //mouse move krane k liye x-axis me
 crsr.style.top =dets.y+30+"px";    //y-exis k liye
})
var h1= document.querySelector("h1")
h1.addEventListener("mouseenter",function(){
 crsr.style.scale=4
})
h1.addEventListener("mouseleave",function(){
    crsr.style.scale=1
   })