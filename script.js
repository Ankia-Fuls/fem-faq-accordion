const toggle = (header) => {
    var panel = header.parentElement.nextElementSibling;
    var image = header.getElementsByTagName("img");

    header.classList.toggle("active");

    if (header.getAttribute("aria-expanded") === "true") {
        header.setAttribute('aria-expanded', "false");
        panel.setAttribute('aria-hidden', "true");
        image[0].src = "./assets/images/icon-plus.svg";
        image[0].alt = "A purple plus icon";
    }
    else {
        header.setAttribute('aria-expanded', "true");
        panel.setAttribute('aria-hidden', "false");

        image[0].src = "./assets/images/icon-minus.svg";
        image[0].alt = "A dark purple minus icon";
    }
}
