const toggle = (header) => {
    var panel = header.parentElement.nextElementSibling;
    header.classList.toggle("active");

    if (header.getAttribute("aria-expanded") === "true") {
        header.setAttribute('aria-expanded', "false");
        panel.setAttribute('aria-hidden', "true");

    }
    else {
        header.setAttribute('aria-expanded', "true");
        panel.setAttribute('aria-hidden', "false");

        header.lastChild.
    }

    console.log(header.firstChild)
}
