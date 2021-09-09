// nav box modal for small screens

      function popupToggle(){
      	const popup = document.querySelector('.popup');
      	const body = document.querySelector('body');
      	popup.classList.toggle('active');
      }

// fixed nav bar

const nav = document.querySelector('nav');
const section = document.getElementById('about');

  	window.addEventListener('scroll', ()=>{
  		const currentScroll = window.pageYOffset;
  		

  		if (Math.ceil(currentScroll) > 650) {
  			nav.classList.add("position");
  			section.classList.add("margin-top");
  		}

  		else {
  			nav.classList.remove("position");
  			section.classList.remove("margin-top");
  		}
  	})

  	// btn scroll button

  	const btnScrollToTop = document.getElementById('btnScrollToTop');

  	btnScrollToTop.addEventListener("click", function () {
  		window.scrollTo(50,0);
  	})

  	const toTop = document.querySelector("#btnScrollToTop");
  	window.addEventListener("scroll", ()=>{
  		if (window.pageYOffset > 100) {
  			toTop.classList.add("active");
  		}
  		else{
  			toTop.classList.remove("active");
  		}
  	})

