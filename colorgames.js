var Red = Math.floor(Math.random() * 255);
var Green = Math.floor(Math.random() * 255);
var Blue = Math.floor(Math.random() * 255);

var Red1 = Math.floor(Math.random() * 255);
var Green1 = Math.floor(Math.random() * 255);
var Blue1 = Math.floor(Math.random() * 255);

var Red2 = Math.floor(Math.random() * 255);
var Green2 = Math.floor(Math.random() * 255);
var Blue2= Math.floor(Math.random() * 255);

var Red3 = Math.floor(Math.random() * 255);
var Green3 = Math.floor(Math.random() * 255);
var Blue3= Math.floor(Math.random() * 255);

var Red4 = Math.floor(Math.random() * 255);
var Green4 = Math.floor(Math.random() * 255);
var Blue4 = Math.floor(Math.random() * 255);

var Red5 = Math.floor(Math.random() * 255);
var Green5 = Math.floor(Math.random() * 255);
var Blue5= Math.floor(Math.random() * 255);

var randomArray = Math.floor(Math.random() * 5);


var color1 = Red + ', '+Green+', '+Blue;
var color2 = Red1 + ', '+Green1+', '+Blue1;
var color3 = Red2 + ', '+Green2+', '+Blue2;
var color4 = Red3 + ', '+Green3+', '+Blue3;
var color5 = Red4 + ', '+Green4+', '+Blue4;
var color6 = Red5 + ', '+Green5+', '+Blue5;


var colors = [color1,color2,color3,color4,color5,color6];


var square = document.querySelectorAll(".square");
var seletedcolor = document.querySelector(".selectedcolor");
var winner = document.querySelector(".winner");
var wrap = document.querySelector(".wrap");


for(var i = 0 ; i < square.length; i++){


square[i] = square[i].style.background = color1;

 square[i].style.background = 'rgb('+colors[i]+')';

}

var select = seletedcolor.textContent = "rgb("+ colors[randomArray] + ");";




square.forEach(function(click){

 
 click.addEventListener('click',function(){



 	if(this.getAttribute("style") == "background: "+select+""){

    winner.textContent = "You Have Selected the Corret Color";

    winner.style.color = "#fff";

    wrap.style.backgroundColor = "rgb("+colors[randomArray]+")";
    wrap.style.backgroundImage = "none";


    square.forEach(function(index){

     index.classList.remove("hides");
     index.classList.add("show");

    index.style.backgroundColor = "rgb("+colors[randomArray]+")";



    });



 	}else{

            this.classList.add("hides"); 		

 		    winner.textContent = "Please Try Again";


 	}


console.log(this.getAttribute("style"));

 });


});



