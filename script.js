const $dark = document.querySelector(".dark-btn");
const $darkMode = document.querySelector(".data-dark");

$dark.addEventListener("click", darkMode);

function darkMode() {
    
    $darkMode.classList.toggle("dark-mode");
    
    if($darkMode.classList.contains("dark-mode")){
        $dark.innerHTML = "😎";
    } else {
        $dark.innerHTML = "🌚";
    }
};






((d)=>{
    const $btnMenu = d.querySelector(".menu-btn");
    const $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e)=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e)=>{
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");


    })

})(document)

/*Formulario*/
const d = document;

((d)=> { 
    const $form = d.querySelector(".contact-form");
    const $loaded = d.querySelector(".contact-form-loaded");
    const $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", (e)=>{
        e.preventDefault();
        $loaded.classList.remove("none");
        fetch("https://formsubmit.co/ajax/livigabriel89@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then((res)=> (res.ok ? res.json() : Promise.reject(res)))
        .then((json)=>{
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })
        .catch((err) =>{
            console.log(err);
            let message = 
            err.statusText || "Ocurrió un erro al enviar, intenta nuevamente";
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(()=>{
            $loaded.classList.add("none"); 
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);
        });
        
    });
})(document);




