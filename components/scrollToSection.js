function scrollToSection(content) {
    var titles = document.getElementsByTagName("h3");
    var searchText = content;

    for (var i = 0; i < titles.length; i++) {
        if (titles[i].innerHTML == searchText) {
            let y = titles[i].getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y });
            break;
        }
    }
}