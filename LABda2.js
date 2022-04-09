function addData(){
	var name= document.getElementById("name").value;
	var address= document.getElementById("address").value;
	var telephone= document.getElementById("telephone").value;
	var email= document.getElementById("email").value;
	var website= document.getElementById("website").value;
	
	document.getElementById("r1c1").innerHTML=name;
	document.getElementById("r1c2").innerHTML=address;
	document.getElementById("r1c3").innerHTML=telephone;
	document.getElementById("r1c4").innerHTML=email;
	document.getElementById("r1c5").innerHTML=website;
	
}