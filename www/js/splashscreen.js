
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

document.getElementById("navbar").style.display = "none";

window.addEventListener('DOMContentLoaded', () => {
	
	
	setTimeout(() => {
	
	
		
	})	//end of first timeout
	
	
	
	
	
	setTimeout(()  => {
	
	logoSpan.forEach((span,idx)=>{
		setTimeout(()=>{
			span.classList.add('active');
			
		},(idx+1) * 400)
		
		});
		
		setTimeout(() => {
		logoSpan.forEach((span,idx)=>{
		
		setTimeout(()  => {
			span.classList.remove('active');
			span.classList.add('fade')
		},(idx+1) * 50)
		})
		},2000);
			
		
		
		setTimeout(()=>{
			intro.style.top = '-100vh';

			  window.location.replace("noConnection.html");
			  

		}, 2400)
		
		
	})	//end of first timeout
	
	
})	//end of eventListener