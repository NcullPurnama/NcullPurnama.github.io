/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidePerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
  });

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
    target: '.featured__card'
  },
  animation: {
    duration: 300
  }
});

/* Link active featured */ 
const linkFeature = document.querySelectorAll('.featured__item')

function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 

// const scrollUp = () =>{
// 	const scrollUp = document.getElementById('scroll-up')
//     // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
// 	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
// 						: scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== MODAL ===============*/

// const buttons = document.querySelectorAll('.popular__button');
// const modal = document.getElementById('productModal');
// const closeModal = document.getElementById('closeModal');
// const modalImage = document.getElementById('modalImage');
// const modalTitle = document.getElementById('modalTitle');
// const modalDescription = document.getElementById('modalDescription');
// const chatButton = document.getElementById('chatButton');

// // Data produk (contoh)
// const products = [
//     {
//         title: "Vespa 1",
//         description: "Deskripsi Vespa 1.",
//         image: "/assets/img/popular1.png",
//         whatsappLink: "https://wa.me/6281234567890?text=Ingin%20tahu%20lebih%20lanjut%20tentang%20Vespa%201"
//     },
//     // Tambahkan data produk lainnya
// ];

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         const product = products[index];
//         modalImage.src = product.image;
//         modalTitle.textContent = product.title;
//         modalDescription.textContent = product.description;
//         chatButton.href = product.whatsappLink;

//         modal.style.display = 'flex';
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// });
