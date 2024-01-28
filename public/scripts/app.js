const darkModeBtns = document.querySelectorAll('.darkmode-btn')
const darkModeIcons = document.querySelectorAll('.darkmode-icon')
const cartBtnMobile = document.querySelector('#cart-btn')
const mobileShoppingCart = document.querySelector('#mobile-shopping-cart')
const htmlELem = document.querySelector('html')
const submenuOpenBtn = document.querySelector('.submenu-open-btn')
const submenu = document.querySelector('.submenu')
const hamburgerMeuBtn = document.querySelector("#hamburger-menu-btn")
const hamburgerMeu = document.querySelector('#hamburger-menu')
const closeHamburgerMenuBtn = document.querySelector('#closeHamburgerMenuBtn')
const cartCloseBtn = document.querySelector('#cart-close-btn')
const overlay = document.querySelector(".overlay")

console.log(cartBtnMobile);
console.log(mobileShoppingCart);

darkModeBtns.forEach(btn => {
    btn.addEventListener('click' , event => {
        event.preventDefault();
        if (htmlELem.classList.value === "dark") {
            htmlELem.classList.remove('dark')
            darkModeIcons.forEach(item => {
                item.setAttribute('href' , '#moon')
            })
        }else{
            htmlELem.classList.add('dark')
            darkModeIcons.forEach(item => {
                item.setAttribute('href' , '#sun')
            })
        }
    })
})

submenuOpenBtn.addEventListener('click' , event => {
    submenuOpenBtn.classList.toggle('rotate-90')
    event.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle('submenu--open')

})

hamburgerMeuBtn.addEventListener('click' , event => {
    event.preventDefault()
    hamburgerMeu.classList.remove('hidden')
    hamburgerMeu.classList.add('fixed')
    overlay.classList.remove('hidden')
})

closeHamburgerMenuBtn.addEventListener('click' , event => {
    event.preventDefault()
    hamburgerMeu.classList.remove('fixed')
    hamburgerMeu.classList.add('hidden')
    overlay.classList.add('hidden')
})

cartBtnMobile.addEventListener('click' , event => {
    event.preventDefault()
    mobileShoppingCart.classList.remove('hidden')
    mobileShoppingCart.classList.add('flex')
    overlay.classList.remove('hidden')
})

cartCloseBtn.addEventListener('click' , event => {
    event.preventDefault()
    mobileShoppingCart.classList.remove('flex')
    mobileShoppingCart.classList.add('hidden')
    overlay.classList.add('hidden')

})

