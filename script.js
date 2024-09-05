
//--------Menu--------Start--------//
let menu = document.querySelector('#memu-bar');
let navbar = document.querySelector('.navbar');
//--------Menu--------End--------//
//--------Menu--------Start--------//
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


//--------Login----Start------------//
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#from-close');
//--------Login----End------------//
//--------Login----Start------------//
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    favForm.classList.remove("active");
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
//--------Login----End------------//



//---------Search-----------Start-------------//
const searchForm = document.querySelector(".search-form");
const searchBtn = document .querySelector("#search-btn");
searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    favForm.classList.remove("active");
}
//---------Search-----------End-------------//



//---------Creat-----------Start-------------//
const cartBtn = document.querySelector("#cart-btn");
const shoppingCart = document.querySelector(".shopping-cart")
cartBtn.onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    favForm.classList.remove("active");
}
//---------Creat-----------End-------------//




//---------Favorit-----------Start-------------//
const favForm = document.querySelector(".fav-form");
const favBTN  = document.querySelector("#fav-btn");
favBTN.onclick = () => {
    favForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
}
//---------Favorit-----------Start-------------//




