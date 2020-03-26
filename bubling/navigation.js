// ================ navigation ===================
const nav = document.querySelector('.nav');
nav.querySelector(".navLink a").classList.add("activeLink")
nav.addEventListener("click", navHandler);
function navHandler(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) { return }
    const activeLink = nav.querySelector('.activeLink');
    (activeLink) && activeLink.classList.remove('activeLink')
    e.target.classList.add("activeLink");
}







