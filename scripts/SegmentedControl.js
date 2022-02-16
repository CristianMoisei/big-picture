function selectElement(segments, selectedElement) {
    var chartIds = segments.split(',').filter((e,i)=>!(i%2))

    for(var i=0; i<chartIds.length; i++) {
        document.getElementById("datawrapper-chart-" + chartIds[i]).style.display = 'none'
    }

    document.getElementById("datawrapper-chart-" + selectedElement).style.display = 'inline'
}

function renderSegmentedControl(segments) {
    document.write(`<div class="segmented-control" id="${segments}">`);

    for (let s = 0; s < segments.length; s++) {
        let chartId = segments[s][0]
        let segmentTitle = segments[s][1]

        document.write(`<div>`);
        document.write(`<label><input ${s == 0 ? "checked" : ""} type="radio" id="${chartId}" onClick="selectElement('${segments}', '${chartId}')" name="radio"><span class="label">${segmentTitle}</span></label>`);
        document.write(`</div>`);
    }

    document.write(`</div>`);
}