function scrollToSection(content) {
    var titles = document.getElementsByTagName("h3");

    for (var i = 0; i < titles.length; i++) {
        if (titles[i].innerHTML == content) {
            let y = titles[i].getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y });
            break;
        }
    }
}