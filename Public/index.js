// nav box modal for small screens

      function popupToggle(){
            const html = document.querySelector('.main');
      	const popup = document.querySelector('.popup');
      	const pointer = document.getElementById('#pointer');
            const overlay = document.getElementById('overlay');
      	popup.classList.toggle('active');
            // pointer.style.cssText = 'pointer-events:none';
            overlay.classList.toggle('active');
            html.classList.toggle('overflow');
            // .style.pointerEvents = 'none';
            
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
  		window.scrollTo(0,0);
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