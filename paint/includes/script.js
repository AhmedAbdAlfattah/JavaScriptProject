var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var slideIndex=1;
var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CleanBtn = document.getElementById('clear');

context.lineWidth = radius*2;


var putPoint = function(e){
	if(dragging == true){
    context.lineCap = 'square';
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(0, 0, radius, 0, 2*Math.PI/2^2*5);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

function back(){
	document.getElementById("canvasimg").style.display = "none";
        document.getElementById("savetext").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("button").style.display = "none";



}

 function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
        document.getElementById("savetext").style.display = "inline";
        document.getElementById("button").style.display = "inline";
        document.getElementById("d").href = dataURL;
        
    }

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

var CleanCanvas = function(){
	context.fillStyle = 'white';
	context.fillRect(0,0, window.innerWidth, window.innerWidth);
	setSwatch({target: document.getElementsByClassName("swatch")[0]});
	document.getElementById("canvasimg").style.display = "none";

}

CleanBtn.addEventListener('click', CleanCanvas);
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseout', disengage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

var setRadius = function(newRadius){
	if(newRadius<minRad){
		newRadius = minRad;
	}else if(newRadius>maxRad){
		newRadius = maxRad;
	}
	radius = newRadius;
	context.lineWidth = radius*1;

	radSpan.innerHTML = radius;
}

var minRad = 0.5,
	maxRad = 100,
	interval = 2,
	defaultRad = 2,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');
decRad.addEventListener('click', function(){
	setRadius(radius-interval);
})

incRad.addEventListener('click', function(){
	setRadius(radius+interval);
})

setRadius(defaultRad);

var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(var i=0, n=colors.length; i<n; i++){
	var swatch = document.createElement('div');
	swatch.className = "swatch";
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName("active")[0];
	if(active){
		active.className = "swatch";
	}
}

function setSwatch(e){
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += " active";
}

setSwatch({target: document.getElementsByClassName("swatch")[0]});
var leftarrow=$('#leftarr');
var rightarrow=$('#rightarr');
leftarrow.click(function() {
    plusDivs(-1);
    context.fillStyle = 'white';
	context.fillRect(0,0, window.innerWidth, window.innerWidth);
	setSwatch({target: document.getElementsByClassName("swatch")[0]});

});
rightarrow.click(function() {
   
    plusDivs(+1);
    context.fillStyle = 'white';
	context.fillRect(0,0, window.innerWidth, window.innerWidth);
	setSwatch({target: document.getElementsByClassName("swatch")[0]});

});

showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
        var i;
        var x = $(".mySlides");
        
        if (n > x.length) {slideIndex = 1;} 
        if (n < 1) {slideIndex = x.length;} 
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        x[slideIndex-1].style.display = "block"; 
       
       

    }

    function setOverlay(){


    	var div = document.createElement("div");
    	div.innerHTML="Click to the image to download it";
    	
    	div.setAttribute("class", "overlay");
    	div.setAttribute("id", "overlay");
    	div.style.width = window.innerWidth + 'px';
    	div.style.height = window.innerHeight + 'px';
    	document.getElementById("body").insertBefore(div, document.getElementById("body").firstChild);

    	// var div2 = document.createElement("div");
    	// div2.innerHTML="Click to the image to download it";
    	// document.getElementById("body").insertBefore(div2,document.getElementById("body").firstChild);
    	// div2.setAttribute("class","click");





    }