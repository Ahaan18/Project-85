canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1width = 120;
car1height = 70;
car1img = "car1.png";
car1x = 10;
car1y = 10;
car2width = 120;
car2height = 70;
car2img = "car2.jpg";
car2x = 10;
car2y = 100;
bpicimg = "racing.jpg";
function loadimg(){
    bpicimg1 = new Image();
    bpicimg1.onload = rac;
    bpicimg1.src = bpicimg;
    car1img1 = new Image();
    car1img1.onload = carno1;
    car1img1.src = car1img;
    car2img1 = new Image();
    car2img1.onload = carno2;
    car2img1.src = car2img;
}
function rac(){
    ctx.drawImage(bpicimg1, 0, 0, canvas.width, canvas.height);
}
function carno1(){
    ctx.drawImage(car1img1, car1x, car1y, car1width, car1height);
}
function carno2(){
    ctx.drawImage(car2img1, car2x, car2y, car2width, car2height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        car1up();
        console.log("car 1 up");
    }
    if(keyPressed == '40'){
        car1down();
        console.log("car 1 down");
    }
    if(keyPressed == '39'){
        car1right();
        console.log("car 1 right");
    }
    if(keyPressed == '37'){
        car1left();
        console.log("car 1 left");
    }
    if(keyPressed == '87'){
        car2up();
        console.log("car 2 up");
    }
    if(keyPressed =='65'){
        car2left();
        console.log("car 2 left");
    }
    if(keyPressed == '83'){
        car2down();
        console.log("car 2 down");
    }
    if(keyPressed == '68'){
        car2right();
        console.log("car 2 right");
    }
    if(car1x >700){
        console.log("car1");
        document.getElementById("status").innerHTML = "Car 1 WON!";
    }
    else if(car2x >700){
        console.log("car2");
        document.getElementById("status").innerHTML = "Car 2 WON!";
    }
}
function car1up(){
    if(car1y>=0){
console.log("hi");
        car1y = car1y - 10;
        console.log(car1x, car1y);
        console.log("x position of car1=" + car1x + " | Y position of car1 " + car1y);
       rac(); carno1(); } 
        
}
function car1down(){
    if(car1y<=500){
        car1y = car1y + 10;
        console.log(car1x, car1y);
        console.log("x position of car1=" + car1x + " | Y position of car1 " + car1y);
        rac(); carno1(); } 
}
function car1left(){
    if(car1x>=0){
        car1x = car1x - 10;
        console.log("x position of car1=" + car1x + " | Y position of car1 " + car1y);
        rac(); carno1(); } 
}
function car1right(){
    if(car1x<=700){
        car1x = car1x + 10;
        console.log("x position of car1=" + car1x + " | Y position of car1 " + car1y);
        rac(); carno1();  } 
}
function car2up(){
    if(car2y>=0){
        car2y = car2y - 10;
        console.log("x position of car2=" + car2x + " | Y position of car2 " + car2y);
       rac(); carno2(); } 
        
}
function car2down(){
    if(car2y<=500){
        car2y = car2y + 10;
        console.log("x position of car2=" + car2x + " | Y position of car2 " + car2y);
        rac();  carno2(); } 
}
function car2left(){
    if(car1x>=0){
        car2x = car2x - 10;
        console.log("x position of car2=" + car2x + " | Y position of car2 " + car2y);
       rac(); carno2(); } 
}
function car2right(){
    if(car2x<=700){
        car2x = car2x + 10;
        console.log("x position of car2=" + car2x + " | Y position of car2 " + car2y);
        rac(); carno2(); } 
}