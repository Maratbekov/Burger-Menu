const burger = document.querySelector(".burger")
const topMenu = document.querySelector(".top-menu")


burger.addEventListener("click", ()=> {
    burger.classList.toggle("show-menu")
    topMenu.classList.toggle("show")
})