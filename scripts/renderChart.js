function renderChart(id, hidden){
    document.write(`<iframe id="datawrapper-chart-${id}" src="https://datawrapper.dwcdn.net/${id}" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="400"></iframe>`)
    !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();

    setTimeout(function() {
        if (hidden) { document.getElementById("datawrapper-chart-" + id).style.display = 'none' }
    }, 1000);
    
}