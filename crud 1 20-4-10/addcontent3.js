// JavaScript Document

window.addEventListener("load",hh);
function hh()
{
document.getElementById("kk").addEventListener("click",ss1);
	temp=0;
}

	function ss1()
		{
		if(temp==0)
			{
				aa=document.querySelector("p");
				
				
				    ac=document.createElement("div");// long div
					ac.classList.add("s1");
					
					ac1=document.createElement("div");//small div
			        ac1.classList.add("s2");
					ac1.innerHTML="Name";
					ac.appendChild(ac1);// insert small div "Name" in long div
					
				    ac2=document.createElement("div");
			        ac2.classList.add("s2");
					ac2.innerHTML="Mobile";
					ac.appendChild(ac2);// insert small div "mobile" in long div
					
					ac3=document.createElement("div");
			        ac3.classList.add("s2");
					ac3.innerHTML="Email";
					ac.appendChild(ac3);// insert small div "Email" in long div
					
				    ac4=document.createElement("div");
			        ac4.classList.add("s2");
					ac4.innerHTML="Password";
					ac.appendChild(ac4);// insert small div "Password" in long div
					
					
			        aa.appendChild(ac);// append long div in "p"
				
				
				    // Creating small divs and adding entries into them
				    a=document.createElement("div");//long div and  class s1
					a.classList.add("s1");
					
					c1=document.createElement("div");// small div and class s2
			        c1.classList.add("s2");
					aa1=document.getElementById("a1").value;//value in small div
					c1.innerHTML=aa1;
					a.appendChild(c1);//append 1st small div into long div
					
					c2=document.createElement("div");//create small div
			        c2.classList.add("s2");
					aa2=document.getElementById("a2").value;//adding value
					c2.innerHTML=aa2;
					a.appendChild(c2);//append 2nd small div into long div
					
					c3=document.createElement("div");//create small div
			        c3.classList.add("s2");
					aa3=document.getElementById("a3").value;//adding value
					c3.innerHTML=aa3;
					a.appendChild(c3);//append 3rd small div into long div
					
					c4=document.createElement("div");//create small div
			        c4.classList.add("s2");
					aa4=document.getElementById("a4").value;//adding value
					c4.innerHTML=aa4;
					a.appendChild(c4);//append 4th small div into long div
					
			        aa.appendChild(a);// second long div added to "p"
				
				temp=1;
			}
		else   //else will ensure the first div with categories created only once
		{
			
					aa=document.querySelector("p");
				    a=document.createElement("div");
					a.classList.add("s1");
					
					c1=document.createElement("div");
			        c1.classList.add("s2");
					aa1=document.getElementById("a1").value;
					c1.innerHTML=aa1;
					a.appendChild(c1);
					
					c2=document.createElement("div");
			        c2.classList.add("s2");
					aa2=document.getElementById("a2").value;
					c2.innerHTML=aa2;
					a.appendChild(c2);
					
					c3=document.createElement("div");
			        c3.classList.add("s2");
					aa3=document.getElementById("a3").value;
					c3.innerHTML=aa3;
					a.appendChild(c3);
					
					c4=document.createElement("div");
			        c4.classList.add("s2");
					aa4=document.getElementById("a4").value;
					c4.innerHTML=aa4;
					a.appendChild(c4);
					
			        aa.appendChild(a);
		}
	}