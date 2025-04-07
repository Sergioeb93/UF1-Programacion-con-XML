const menutreslineas = document.querySelector(".menu-treslineas")
const menu = document.querySelector(".menu-navegacion")

console.log(menu)
console.log(menutreslineas)

menutreslineas.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
        && e.target != menu && e.target != menutreslineas  ){
            menu.classList.toggle("spread")
    }
})