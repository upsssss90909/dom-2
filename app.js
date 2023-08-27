let container = document.querySelector("#container")
let icon = document.querySelector("i")

container.addEventListener('dblclick' , function() {
    icon.style.transform = "translate(-50% , -50%) scale(1)"
    icon.style.opacity = ".9"

    setTimeout(() => {
        icon.style.transform = "translate(-50% , -50%) scale(0)"
        icon.style.opacity = "0"
    }, 500);


})


