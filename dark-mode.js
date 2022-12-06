const d = document;
const ls = localStorage;



export function darkBoton(btnDark, classDark){
    let $botonDark = d.querySelector(btnDark);
    const $selectors = d.querySelectorAll("[data-dark]");

    console.log($selectors)

    const moon = "🌚",
    sun = "🌞";

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $botonDark.textContent = moon;
        ls.setItem("theme", "light");    
    }

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $botonDark.textContent = sun;
        ls.setItem("theme", "dark");      
    }

    d.addEventListener("click", (e)=>{
        if (e.target.matches(btnDark)){
            if($botonDark.textContent == moon){
                darkMode();
            } else {
               lightMode();
            }
            
        }
    });

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(ls.getItem("theme") === null) ls.setItem("theme", "light");
        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    })
};




//lo saco 
// repasar la clase 78

/* desarmo la función entera en dos:
por un lado puso el dark y por el otro el light, guardó cada una en una
variable, invocada dentro del addEventListener. 
en la parte del index invoco a la funcion por fuera del
DomCountenLoaded porque lo llama desde acá 


creó una variable con localStorage
sacar la funcion importada en el index, porque no se puede ejecutar 
un evento del mismo tipo dentro de otro


*/