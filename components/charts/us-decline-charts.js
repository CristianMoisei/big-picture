// Defaults
Chart.defaults.elements.line.borderWidth = 3;
Chart.defaults.backgroundColor = 'rgba(41, 118, 221, 1)';
Chart.defaults.elements.line.borderColor = 'rgba(41, 118, 221, 1)';
Chart.defaults.elements.point.radius = 0;
Chart.defaults.plugins.legend.labels.boxWidth = 20;
Chart.defaults.plugins.legend.align = 'end';
Chart.defaults.plugins.legend.labels.boxHeight = 1;

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

let defaultOptions = {
    plugins: {
        tooltip: {
            mode: 'nearest',
            intersect: false
        },
        filler: {
            propagate: true
        }
    },    
    responsive: true,
    scales: {
        x: { 
            grid: { 
                display:false,
            } 
        },
        y: { 
            suggestedMax: 14,
            suggestedMin: 0,
            // beginAtZero: true,
            grid: { 
                borderColor: 'white',
            } 
        }
    },
    legend: {
        labels: {
            boxWidth: 0
        }
    }


}

// GDP Chart
let usGDPPerCapita = [3131, 3188, 3242, 3186, 3183, 3251, 3310, 3343, 3107, 3262, 3352, 3420, 3360, 3398, 3463, 3449, 3310, 3306, 3314, 3310, 3289, 3340, 3433, 3395, 3488, 3564, 3590, 3604, 3604, 3485, 3738, 3967, 4111, 4255, 4053, 4206, 4268, 4133, 4096, 4295, 4083, 4001, 3964, 4028, 4247, 4312, 4337, 4451, 4567, 4448, 4467, 4647, 4885, 5218, 5232, 5119, 5225, 5112, 5138, 5275, 5414, 5304, 5470, 5822, 6014, 5704, 5658, 5844, 5924, 6080, 5908, 6050, 6140, 6294, 6107, 6279, 6211, 6271, 6395, 7030, 7695, 7770, 8066, 8068, 8023, 7902, 7960, 8139, 7930, 8248, 8197, 8378, 9009, 8406, 8008, 8806, 8469, 9110, 9135, 9790, 9886, 10788, 10682, 10998, 10656, 11219, 12276, 12239, 11040, 12052, 11853, 11975, 12271, 12433, 11189, 11272, 12573, 12016, 12880, 12853, 12488, 11900, 12312, 13618, 13686, 13714, 14327, 14185, 14085, 14704, 13155, 12215, 10308, 9899, 10661, 11907, 12999, 13893, 12947, 13741, 14766, 16671, 18290, 19742, 20909, 20267, 18232, 17603, 18123, 17462, 18745, 19834, 20226, 20808, 20310, 21365, 21398, 21409, 20844, 22017, 22210, 22355, 23340, 24002, 25043, 26310, 27711, 28096, 29140, 29760, 29468, 30005, 31259, 32720, 32332, 31926, 33281, 34441, 36022, 36837, 36422, 36969, 35928, 37094, 39453, 40618, 41636, 42718, 44111, 45210, 45488, 44851, 45806, 46447, 47733, 48450, 49708, 51319, 52979, 54828, 56440, 56430, 56908, 58004, 59646, 61075, 62103, 62609, 61839, 59597, 60598, 61100, 61985, 62561, 63547, 64687, 65208, 66430, 68062, 70543, 67731]
let gdpChartCanvas = document.getElementById('gdp-per-capita');
let gdpChart = new Chart(gdpChartCanvas, {
    type: 'line',
    data: {
        labels: range(1800, 2020),
        datasets: [{ label: 'Real GDP per capita', data: usGDPPerCapita }]
    },
    options: defaultOptions
});

// Unemployment Chart
let usUnemployment = [3.75, 6.05, 5.21, 3.28, 3.03, 2.93, 5.59, 4.37, 4.13, 4.30, 6.84, 5.45, 5.54, 6.69, 5.57, 5.64, 5.16, 4.51, 3.79, 3.84, 3.56, 3.49, 4.98, 5.95, 5.60, 4.86, 5.64, 8.48, 7.70, 7.05, 6.07, 5.85, 7.18, 7.62, 9.71, 9.60, 7.51, 7.19, 7.00, 6.18, 5.49, 5.26, 5.62, 6.85, 7.49, 6.91, 6.10, 5.59, 5.41, 4.94, 4.50, 4.22, 3.97, 4.74, 5.78, 5.99, 5.54, 5.08, 4.61, 4.62, 5.80, 9.28, 9.61, 8.93, 8.08, 7.36, 6.16, 5.28, 4.88, 4.35, 3.89, 3.68, 8.11, 5.50]
let unemploymentChartCanvas = document.getElementById('unemployment');
let unemploymentChart = new Chart(unemploymentChartCanvas, {
    type: 'line',
    data: {
        labels: range(1948, 2021),
        datasets: [
            { label: 'Unemployment %', data: usUnemployment } ]
    },
    options: defaultOptions
});