const $linkDev = document.querySelector("#dev");
const $linkRegispel = document.querySelector("#regispel");
const $linkTmkt = document.querySelector("#tmkt");

const $expDev = document.querySelector(".exp__description-dev");
const $expRegispel = document.querySelector(".exp__description-regispel");
const $expTmkt = document.querySelector(".exp__description-tmkt");

$linkDev.addEventListener("click", function(event){
    $expRegispel.classList.add("exp__description-disable");
    $expTmkt.classList.add("exp__description-disable");
    $linkDev.classList.add("dev-active");
    $linkRegispel.classList.add("exp__list-inactive");
    $linkTmkt.classList.add("exp__list-inactive");
    $expDev.classList.remove("exp__description-disable");
    $linkRegispel.classList.remove("regispel-active");
    $linkTmkt.classList.remove("tmkt-active");
    $linkDev.classList.remove("exp__list-inactive");

});

$linkRegispel.addEventListener("click", function(event) {
    $expDev.classList.add("exp__description-disable");
    $expTmkt.classList.add("exp__description-disable");
    $linkRegispel.classList.add("regispel-active");
    $linkDev.classList.add("exp__list-inactive");
    $linkTmkt.classList.add("exp__list-inactive");
    $linkDev.classList.remove("dev-active");
    $linkTmkt.classList.remove("tmkt-active");
    $linkRegispel.classList.remove("exp__list-inactive");
    $expRegispel.classList.remove("exp__description-disable");
});

$linkTmkt.addEventListener("click", function(event){
    $expDev.classList.add("exp__description-disable");
    $expRegispel.classList.add("exp__description-disable");
    $linkTmkt.classList.add("tmkt-active");
    $linkDev.classList.add("exp__list-inactive");
    $linkRegispel.classList.add("exp__list-inactive");
    $linkTmkt.classList.remove("exp__list-inactive");
    $linkDev.classList.remove("dev-active");
    $linkRegispel.classList.remove("regispel-active");
    $expTmkt.classList.remove("exp__description-disable");
});
