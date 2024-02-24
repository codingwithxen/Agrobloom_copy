const wrapper = document.querySelector('.wrapper');
const wrapper_container = document.querySelector('.wrapper-container')
const login = document.querySelector('.login')
const register = document.querySelector('.register')
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const blur = document.querySelector('.blur')

// // Loading url path
let urlPath = window.location.pathname

// // registerLink.addEventListener('click', () => { wrapper.classList.add('active'); });
btnPopup.addEventListener('click', () => {
    wrapper_container.style.display = "block"
    login.style.display = "block"
    register.style.display = "none"
});

loginLink.addEventListener('click', () => {
    wrapper_container.style.display = "block"
    login.style.display = "block"
    register.style.display = "none"
});

registerLink.addEventListener('click', () => {
    wrapper_container.style.display = "block"
    login.style.display = "none"
    register.style.display = "block"
});

iconClose.addEventListener('click', () => {
    wrapper_container.style.display = "none"
})


// if (urlPath == '/agrobloom/login/') {
//     console.log('in login')
//     wrapper_container.style.display = "block"
//     login.style.display = "block"
//     register.style.display = "none"
// } else if (urlPath == '/agrobloom/register') {
//     console.log('in register')
//     wrapper_container.style.display = "block"
//     login.style.display = "none"
//     register.style.display = "block"
// }

// loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });



// if (urlPath == '/agrobloom/register/') {
//     console.log(urlPath)
//     wrapper.classList.add('active');
//     wrapper.classList.add('active-popup');
//     blur.style.display = "block";


//     iconClose.addEventListener('click', () => {
//         wrapper.classList.remove('active-popup');
//         blur.style.display = "none";
//     });

// } 

const searchInput = document.querySelector('.search-input')

//Search product input field enter keypress event
searchInput.addEventListener('input',enterSearch)

function enterSearch() {
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            window.location.href = './search?product-name='+searchInput.value
        }
    })
}











// // registerLink.addEventListener('click', () => { wrapper.classList.add('active'); });
// btnPopup.addEventListener('click', () => {
//     window.location.href = '/agrobloom/register'
// });

// loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });

// // Loading url path
// let urlPath = window.location.pathname
// if (urlPath == '/agrobloom/register/') {
// console.log(urlPath)
// wrapper.classList.add('active');
// wrapper.classList.add('active-popup');
// blur.style.display = "block";

// // btnPopup.addEventListener('click', () => {
// //     wrapper.classList.add('active-popup');
// //     blur.style.display = "block";
// // });

// iconClose.addEventListener('click', () => {
//     wrapper.classList.remove('active-popup');
//     blur.style.display = "none";
// });

// }





