const $btnBacktop = document.querySelector(".footer__backtop");

$btnBacktop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});