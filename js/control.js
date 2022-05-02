// JavaScript Document
//contact start


 function cntname(){
	 var cntname = document.getElementById("cntname");
	 cntname.classList.toggle("toggleClass");
	 
	 }
	  function cntfrm(){
		  var cntfrm = document.getElementById("cntfrm");
	 cntfrm.classList.toggle("toggleClass");
	 
	 }
// contact end
document.addEventListener("click", function(){
 
  var xy = document.getElementById("favorite");
    xy.classList.toggle("myfav");
});
function fav(){
	
	}
$("#work").click(function() {
  window.location.replace("index.html");
  var err2= document.getElementById('ee2');
		err2.style.display = 'block';
  
});
function myreview(){
	var one = document.getElementById("onem");
	var two = document.getElementById("twom");
	var three = document.getElementById("threem");
	var four = document.getElementById("fourm");
	var err= document.getElementById('ee');
	var err1= document.getElementById('ee1');
	if(one.value != "" && two.value !="" && fourm.value!=""){
		
	
		err.style.display = 'block';
		}
		else{
			err1.style.display = 'block';
			}
		
		
}

 function myprofile() {
    var x = document.getElementById('drop1');
    x.classList.toggle("drop1");
	
}
window.onclick = function(event) {
  if (!event.target.matches('.my_1')) {
    var dropdowns = document.getElementsByClassName("drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('drop1')) {
        openDropdown.classList.remove('drop1');
      }
    }
  }

  if (!event.target.matches('.color_setting')) {
    var dropdowns = document.getElementsByClassName("color");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropc')) {
        openDropdown.classList.remove('dropc');
      }
    }
  }
  if (!event.target.matches('.color_setting1')) {
    var dropdowns = document.getElementsByClassName("color1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropc1')) {
        openDropdown.classList.remove('dropc1');
      }
    }
  }
}



function desf() {
    
	var myinput = document.getElementById("myinput");
	var err= document.getElementById('ee');
	var err1= document.getElementById('ee1');
	if(myinput.value=="abc"){
		err.style.display = 'block';
		}
		else{
			err1.style.display = 'block';
			}
	
	
}
function desfc() {
  var x = document.getElementById('des');
	var err= document.getElementById('ee');
	
	err.style.display='none';
	x.style.display='block';
	
   
	
}
function mycolor() {
    var x = document.getElementById('color');
  
     x.classList.toggle("dropc");
}



function mycolor1() {
    var x = document.getElementById('color1');
  
     x.classList.toggle("dropc1");
}
function decidecolor(cl){
	var table=document.getElementById('table');
	table.style.background="cl";
}

var header = document.getElementById("myslide");
var btns = header.getElementsByClassName("myslidemenu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
 if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
	
  }
  this.className += " active";
  });
}