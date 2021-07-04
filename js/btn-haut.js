const btn = document.querySelector(".btn-haut-page");

btn.addEventListener('click', () =>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})