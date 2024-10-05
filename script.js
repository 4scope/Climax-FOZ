window.addEventListener('scroll', function(){
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)  
})

// hamburger menu

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () =>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', function(){
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

// frquently ask questions js

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
        
        // icon change
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }       
    })
})

