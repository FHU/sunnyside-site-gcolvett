// alert("This is annoying")

// step 1 - get the things

const hamburgerMenu = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile-menu")

hamburgerMenu.addEventListener("click", (event) => {
    event.preventDefault()

    // console.log("you clicked it!")

    mobileMenu.classList.toggle("hidden")
})
