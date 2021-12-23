

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

var categories = [

    new Category("1. Economic factors", [      
        new Section("GDP"), 
        new Section("Share of global GDP"), 
        new Section("GDP per capita"), 
        new Section("National debt"), 
        new Section("Government spending"), 
        new Section("Inflation rate"), 
        new Section("Unemployment"), 
        new Section("Percentage of people living below the poverty line"), 
        new Section("Taxes at each bracket"), 
        new Section("Wage growth"),
        new Section("Affordability ratios", ["Substinence (how much it costs to survive)", "House", "Car", "Vacation", "Healthcare"]), 
        new Section("Credit rating"), 
        new Section("Trade balance")
    ]),

    new Category("2. Health", [      
        new Section("Life expectancy"),
        new Section("Percentage of people with mental health issues"),
        new Section("Suicide rates"),
        new Section("Child mortality rate"),
        new Section("Number of doctors"),
        new Section("Health expenditure per capita")
    ]),

    new Category("3. Education", [      
        new Section("NCES - https://nces.ed.gov"),
    ]),

    new Category("4. Social factors", [      
        new Section("Inequality (GINI coeficient)"),
        new Section("Welfare spending"),
        new Section("Homelessness rate"),
        new Section("Crime rate (violent and non violent)"),
        new Section("Racism (institutionalised and normal)")
    ]),

    new Category("5. Infrastructure", [      
        new Section("Internet coverage and speeds"),
        new Section("Km of highway"),
        new Section("Energy sources")
    ]),

    new Category("6. Politics", [      
        new Section("Presidential approval ratings"),
        new Section("Senate approval ratings"),
        new Section("Political donations andl lobying expenditure"),
        new Section("Number of countries the US has diplomatic relations with"),
        new Section("Perception, trust of Americans")
    ]),

    new Category("7. Demographics", [      
        new Section("Birth rate"),
        new Section("Median age"),
        new Section("Marriage rate"),
        new Section("Single parent families"),
        new Section("Ratio of old to young people"),
        new Section("Church membership"),
        new Section("Population"),
        new Section("Population density (nationally and for the major cities)")
    ]),

    new Category("8. Military", [      
        new Section("Military bases"),
        new Section("Any score for military power?"),
        new Section("Innovation score?"),
        new Section("Military spending"),
        new Section("Active personnel")
    ]),

    new Category("9. Business", [      
        new Section("Ease of doing business"),
        new Section("Number of small businesses"),
        new Section("Innovation index"),
        new Section("Total private sector valuation")    
    ])
]


function scrollToName(id) {
    let element = document.getElementById(id);
    let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function generateTableOfContents() {

    document.write(`<div class="table-of-contents"><h2>Table of contents</h2>`)

    for (let a = 0; a < categories.length; a++) {
        let category = categories[a]
        let categoryId = category.name.replace(/\s/g, '')
        document.write(`<ul>`)
        document.write(`<h4 id="${categoryId}">${category.name}</h4>`)
        for (let b = 0; b < category.sections.length; b++) {
            let section = category.sections[b]
            let sectionId = section.name.replace(/\s/g, '')
            document.write(`<li id="${sectionId}">${section.name}</li>`)
            if (section.subsections) {
                document.write(`<ul class="sub-section">`)
                for (let c = 0; c < section.subsections.length; c++) {
                    let subsection = section.subsections[c]
                    let subsectionId = subsection.replace(/\s/g, '')
                    document.write(`<li id="${subsectionId}">${subsection}</li>`)
                }
                document.write(`</ul>`)
            }
        }
        document.write(`</ul>`)
    }        

    document.write(`</div>`)

}