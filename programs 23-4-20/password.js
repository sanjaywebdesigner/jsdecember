// JavaScript Document
function ss1()
{
  var num = document.getElementById("s1").value;
	if(num.length==10 || num.length==11)
	  {
		if (num==NaN)
		 {
		   document.getElementById("s2").innerHTML = "enter only numbers";
		  } 
		    else if(num.length==11)
					{
					  if(num.charCodeAt(0)==48)
						{
						  document.getElementById("s2").innerHTML = " correct";
						}
						 else{
							  document.getElementById("s2").innerHTML = " incorrect";
							 }
					}
					  else{
							document.getElementById("s2").innerHTML = "correct";
						  }
	  }
	else if(num.length==13)
		{
			if(num.charAt(0)=="+" && num.charAt(1)=="9" && num.charAt(2)=="1")
				{
				document.getElementById("s2").innerHTML = "correct";	
				}
			else{
				document.getElementById("s2").innerHTML = "incorrect";
			}
		}
		else{
			  document.getElementById("s2").innerHTML = "incorrect";
			}
					
}