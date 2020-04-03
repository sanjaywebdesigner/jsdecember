// JavaScript Document
a=document.querySelectorAll("input");
		
		a[3].addEventListener("click",ss);
		a[4].addEventListener("click",ss1);
		a[5].addEventListener("click",ss2);
		a[6].addEventListener("click",ss3);
		function dd()
		{
			a1=Number(a[0].value);
			b1=Number(a[1].value);
		}
	function ss()
		{
			
			dd();
		    c1=a1+b1;
			a[2].value=c1;
		}
		function ss1()
		{
			
			dd();
		    c1=a1-b1;
			a[2].value=c1;
		}
		function ss2()
		{
			
			dd();
		    c1=a1*b1;
			a[2].value=c1;
		}
		function ss3()
		{
			
			dd();
		    c1=a1/b1;
			a[2].value=c1;
		}