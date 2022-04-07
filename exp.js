const $linkDev = document.querySelector("#dev");
const $linkRegispel = document.querySelector("#regispel");
const $linkTmkt = document.querySelector("#tmkt");

const $expDev = document.querySelector(".exp__description-dev");
const $expRegispel = document.querySelector(".exp__description-regispel");
const $expTmkt = document.querySelector(".exp__description-tmkt");

$linkDev.addEventListener("click", function(event){
    $expRegispel.classList.add("exp__description-disable");
    $expTmkt.classList.add("exp__description-disable");
    $expDev.classList.remove("exp__description-disable");
});

$linkRegispel.addEventListener("click", function(event) {
    $expDev.classList.add("exp__description-disable");
    $expTmkt.classList.add("exp__description-disable");
    $expRegispel.classList.remove("exp__description-disable");
});

$linkTmkt.addEventListener("click", function(event){
    $expDev.classList.add("exp__description-disable");
    $expRegispel.classList.add("exp__description-disable");
    $expTmkt.classList.remove("exp__description-disable");
});
