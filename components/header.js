function openMenu() {
    document.getElementById('nav').style.display = 'flex'
}

function closeMenu() {
    document.getElementById('nav').style.display = 'none'
}

document.write(`
    <div id="header">
    <div id="header-container">
        <a href="index.html"><img id="logo" src="assets/logo-tagline.svg"></a>
        <div id="nav">
            <a href="">Newsletter</a>
            <a target="_blank" href="https://twitter.com/cristianmoisei">Twitter</a>
            <a target="_blank">Medium</a>
            <a id="close-button" onClick="closeMenu()">Close</a>
        </div>    
        <img id="menu" src="./assets/menu.svg" onClick="openMenu()">
    </div>
    </div>
`);