const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 80;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', resumeActive);


let filterItems = document.querySelectorAll('.portofolio_filters li');

function activePortofolio() {
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortofolio);
})

let mixerPortofolio = mixitup('.portofolio_wrap-container', {
    selectors: {
        target: '.portofolio_item'
    },
    animation: {
        duration: 300
    }
})


var swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidespPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidespPerView: 2,
        }
    }
});

let modalBtns = document.querySelectorAll('.services_button');
    modalViews = document.querySelectorAll('.services_modal');
    modalClose = document.querySelectorAll('.modal_close-icon');

    let modal = function(modalClick) {
        modalViews[modalClick].classList.add('active-modal');
    }

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i)
        })
    })

    modalClose.forEach(el => {
        el.addEventListener('click', () => {
            modalViews.forEach(modalView => {
                modalView.classList.remove('active-modal');
            })
        })
    })



    document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tamzidanasszz8@gmail.com",
        Password : "D4350FE08B5AD8B97424431C70FC1410BB8B",
        To : 'tamzidanasszz8@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}























