

class Category {
    constructor(name, sections) {
        this.name = name;
        this.sections = sections;
    }
}

class Section {
    constructor(name, subsections) {
        this.name = name;
        this.subsections = subsections;
    }
}

function scrollToId(id) {
    let element = document.getElementById(id);
    let y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y });
}

function generateTableOfContents(categories) {

    document.write(`<div class="table-of-contents"><h2>Table of contents</h2>`)

    for (let a = 0; a < categories.length; a++) {
        let category = categories[a]
        document.write(`<ul>`)
        document.write(`<h4 onClick="scrollToId('category-${a}')">${category.name}</h4>`)
        for (let b = 0; b < category.sections.length; b++) {
            let section = category.sections[b]
            document.write(`<li onClick="scrollToId('section-${b}')">${section.name}</li>`)
            if (section.subsections) {
                document.write(`<ul class="sub-section">`)
                for (let c = 0; c < section.subsections.length; c++) {
                    let subsection = section.subsections[c]
                    document.write(`<li onClick="scrollToId('subsection-${c}')">${subsection}</li>`)
                }
                document.write(`</ul>`)
            }
        }
        document.write(`</ul>`)
    }

    document.write(`</div>`)
}