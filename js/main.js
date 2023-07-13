window.onscroll = function(){
    sec.classList.remove("active-search");
    sec2.classList.remove("active-shop");
    sec3.classList.remove("active-login");

}
// search
let search = document.getElementById("search");
let sec = document.getElementById("section-search");

search.onclick = function(){
    if(sec.classList.contains("active-search")){
        sec.classList.remove("active-search");
    }else{
        sec.classList.add("active-search");
        sec2.classList.remove("active-shop");
        sec3.classList.remove("active-login");
    }
};

// cart-shopping
let sec2 = document.getElementById("section-shop");
let shop = document.getElementById("shop");

shop.onclick = function(){
    if(sec2.classList.contains("active-shop")){
        sec2.classList.remove("active-shop");
    }else{
        sec2.classList.add("active-shop");
        sec.classList.remove("active-search");
        sec3.classList.remove("active-login");
    }
};
// login
let sec3 = document.getElementById("login-btn");
let user = document.getElementById("user");

user.onclick = function(){
    if(sec3.classList.contains("active-login")){
        sec3.classList.remove("active-login");
    }else{
        sec3.classList.add("active-login");
        sec.classList.remove("active-search");
        sec2.classList.remove("active-shop");
    }
};

// theme-btn
let theme = document.getElementById("theme");

theme.onclick = ()=>{
    console.log("clicked");
    theme.classList.toggle("fa-sun");
    if(theme.classList.contains("fa-sun")){
        document.body.classList.add("active-theme");
    }else{
        document.body.classList.remove("active-theme");
    }
}
// upToggle
let upToggle = document.querySelector(".upToggle");

window.onscroll = function(){
    if(scrollY >=1350){
        upToggle.style.right = "20px";
    }else{
        upToggle.style.right = "-105%";
    }
}

upToggle.onclick = function(){
    console.log("go up");
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
// bars menu
let barMenu = document.getElementById('bars-menu');
let ulMenu = document.querySelector('.menu');
console.log(ulMenu);

barMenu.addEventListener('click',()=>{
    console.log('clicked');
    barMenu.classList.toggle("fa-times");
    if(barMenu.classList.contains("fa-times")){
        barMenu.classList.add("fa-bars");
        ulMenu.classList.add("active-menu");
    }else{
        barMenu.classList.remove("fa-times");
        ulMenu.classList.remove("active-menu");
    }
})