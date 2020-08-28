function checkfunction1()
 {
	var field = document.getElementById("FN").value;
	var regex = /[A-Za-z]/;
	
	if (regex.test(field))
	{
		document.getElementById("message1").style.color = "green"
		document.getElementById("message1").innerHTML = "Valid";
	}
	else if(field == "")
	{
		document.getElementById("message1").style.color = "red"
		document.getElementById("message1").innerHTML = "This field cannot be empty";
	}
	else
	{
		document.getElementById("message1").style.color = "red"
		document.getElementById("message1").innerHTML = "Invalid! You can use only letters";
	}
 }
  function checkfunction2()
 {
	var field = document.getElementById("LN").value;
	var regex = /[A-Za-z]/;
	
	if (regex.test(field))
	{
		document.getElementById("message2").style.color = "green"
		document.getElementById("message2").innerHTML = "Valid";
	}
	else if(field == "")
	{
		document.getElementById("message2").style.color = "red"
		document.getElementById("message2").innerHTML = "This field cannot be empty";
	}
	else
	{
		document.getElementById("message2").style.color = "red"
		document.getElementById("message2").innerHTML = "Invalid! You can use only letters";
	}
 }
  function checkfunction3()
 {
	var field = document.getElementById("EA").value;
	var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	
	if (regex.test(field))
	{
		document.getElementById("message3").style.color = "green"
		document.getElementById("message3").innerHTML = "Valid";
	}
	else if(field == "")
	{
		document.getElementById("message3").style.color = "red"
		document.getElementById("message3").innerHTML = "This field cannot be empty";
	}
	else
	{
		document.getElementById("message3").style.color = "red"
		document.getElementById("message3").innerHTML = "Invalid! Make sure you include @";
	}
 }
  function checkfunction4()
 {
	var field = document.getElementById("Nr").value;
	var regex = /[0-9]+/;
	
	if (regex.test(field))
	{
		document.getElementById("message4").style.color = "green"
		document.getElementById("message4").innerHTML = "Valid";
	}
	else if(field == "")
	{
		document.getElementById("message4").style.color = "red"
		document.getElementById("message4").innerHTML = "This field cannot be empty";
	}
	else
	{
		document.getElementById("message4").style.color = "red"
		document.getElementById("message4").innerHTML = "Invalid! Please enter a phone number";
	}
 }
  function checkfunction5()
 {
	var field = document.getElementById("specialization").value;
	var regex = /[A-Za-z]/;
	
	if (regex.test(field))
	{
		document.getElementById("message5").style.color = "green"
		document.getElementById("message5").innerHTML = "Valid";
	}
	else if(field == "")
	{
		document.getElementById("message5").style.color = "red"
		document.getElementById("message5").innerHTML = "This field cannot be empty";
	}
	else
	{
		document.getElementById("message5").style.color = "red"
		document.getElementById("message5").innerHTML = "Invalid! You can use only letters";
	}
 }
	function buttonfunction()
 {
	alert("You will achieve an email with job offers within 24 hours")
 }