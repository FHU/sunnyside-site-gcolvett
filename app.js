// alert("This is annoying")

// get the things
const hamburgerMenu = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile-menu")

// watch for click
hamburgerMenu.addEventListener("click", (event) => {
    event.preventDefault()

    // console.log("you clicked it!")

    mobileMenu.classList.toggle("hidden")
})

// close if you click outside the menu
document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target)
    const isClickOnHamburger = hamburgerMenu.contains(event.target)

    if (!isClickInsideMenu && !isClickOnHamburger) {
        mobileMenu.classList.add("hidden")
    }
})