function scrollToSection(content) {
    var titles = document.getElementsByTagName("h3");

    for (var i = 0; i < titles.length; i++) {
        if (titles[i].innerHTML == content) {
            const y = titles[i].getBoundingClientRect().top + window.pageYOffset - 40;
            window.scrollTo({ top: y });
            break;
        }
    }
}

function scrollToId(id) {
    const y = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset - 40;
    window.scrollTo({ top: y });
}