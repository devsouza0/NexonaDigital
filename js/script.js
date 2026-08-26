// ==========================================
// NEXORA DIGITAL
// JavaScript principal
// ==========================================


// ==========================================
// CONFIGURAÇÃO DO WHATSAPP
// ==========================================

// Coloque seu número abaixo:
// 55 + DDD + número
// Exemplo fictício:
// const whatsappNumero = "5511999999999";

const whatsappNumero = "5517988232720";

const whatsappMensagem =
    "Olá! Encontrei a Nexora Digital e gostaria de saber mais sobre a criação de um site para meu negócio.";

const whatsappLink =
    `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagem)}`;


//
// BOTÃO PRINCIPAL DO WHATSAPP
//

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", function(event) {

        event.preventDefault();

        window.open(
            whatsappLink,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


// ==========================================
// OUTROS BOTÕES WHATSAPP
// ==========================================

document.querySelectorAll(".whatsapp-link").forEach(botao => {

    botao.addEventListener("click", function(event) {

        event.preventDefault();

        window.open(
            whatsappLink,
            "_blank",
            "noopener,noreferrer"
        );

    });

});


// ==========================================
// MENU MOBILE
// ==========================================

const menuMobile = document.getElementById("menuMobile");
const nav = document.getElementById("nav");

if (menuMobile && nav) {

    menuMobile.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuMobile.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuMobile.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
