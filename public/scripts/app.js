const darkModeBtn = document.querySelector('#darkmode-btn')
const darkModeIcon = document.querySelector('#darkmode-icon')
const htmlELem = document.querySelector('html')

darkModeBtn.addEventListener('click' , event => {
    event.preventDefault();
    console.log();
    console.log(darkModeIcon.attributes.href);
    if (htmlELem.classList.value === "dark") {
        htmlELem.classList.remove('dark')
        darkModeIcon.setAttribute('href' , '#moon')
    }else{
        htmlELem.classList.add('dark')
        darkModeIcon.setAttribute('href' , '#sun')
    }
})
    