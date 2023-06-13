console.log("Hello World!");

const TEMPERATURA_BASE = 26;

// let span = document.querySelector('.temp');

// let temperatura = window.prompt("Qual a temperatura hoje?");

let h1 = document.querySelector(`h1`);
//

let pergunta = document.querySelector(".pergunta");

pergunta.classList.add('active');

// 

let form = documet.querySelector(`form`);
form.onsubmit = function(){
    event.preventDefault();
    if (temperatura.value < TEMPERATURA_BASE) {
        span.innerText = `frio`;
    } else if (temperatura.value > TEMPERATURA_BASE) {
        span.innerText = `quente`;
    }
    else {
        span.innerText = `ameno`;
    };
    h3.style.display = `block`;
}
