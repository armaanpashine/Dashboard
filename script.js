let w = 0
let h = 0

document.addEventListener("mousemove", (e) => {
    console.log(e)
    w = e.x/2
    h = e.y/2
    document.querySelector(".king").style.width = w + "px"
    document.querySelector(".king").style.height = h + "px"
    document.querySelector(".king").style.borderRadius = w/10 + "%"
})