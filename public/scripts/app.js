const darkModeBtns = document.querySelectorAll('.darkmode-btn')
const darkModeIcons = document.querySelectorAll('.darkmode-icon')
const htmlELem = document.querySelector('html')
const submenuOpenBtn = document.querySelector('.submenu-open-btn')
const submenu = document.querySelector('.submenu')
const hamburgerMeuBtn = document.querySelector("#hamburger-meu-btn")
const hamburgerMeu = document.querySelector('#hamburger-meu')

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

    