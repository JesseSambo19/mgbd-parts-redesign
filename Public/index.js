// nav box modal for small screens

      function popupToggle(){
            const html = document.querySelector('.main');
      	const popup = document.querySelector('.popup');
            const overlay = document.getElementById('overlay');
            const toTopButton = document.getElementById('btnScrollToTop');
            const logo = document.querySelector('.logo');
            const link = document.getElementById('link');
            const iframe = document.getElementById('iframe');
            const exampleInputName1 = document.getElementById('exampleInputName1');
            const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
            const exampleInputSubject1 = document.getElementById('exampleInputSubject1');
            const exampleInputMessage1 = document.getElementById('exampleInputMessage1');
            const submit = document.getElementById('submit');
            const carouselExampleControls = document.getElementById('carouselExampleControls');
            const link2 = document.getElementById('link2');
            const nav_bars = document.getElementById('nav_bars');
            const input = document.getElementById('input');
            link.classList.toggle('no-pointer');
            iframe.classList.toggle('no-pointer');
            exampleInputName1.classList.toggle('no-pointer');
            exampleInputEmail1.classList.toggle('no-pointer');
            exampleInputSubject1.classList.toggle('no-pointer');
            exampleInputMessage1.classList.toggle('no-pointer');
            submit.classList.toggle('no-pointer');
            carouselExampleControls.classList.toggle('no-pointer');
            link2.classList.toggle('no-pointer');
            input.classList.toggle('no-pointer');
            nav_bars.classList.toggle('no-pointer');
      	popup.classList.toggle('active');
            overlay.classList.toggle('active');
            html.classList.toggle('overflow');
            toTopButton.classList.toggle('no-pointer');
            logo.classList.toggle('no-pointer');
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