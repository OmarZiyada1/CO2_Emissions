// Select the :root pseudo-class
const root = document.documentElement;
var show = document.querySelector("#show");
var range = document.querySelector("#range");
var container = document.querySelector(".earth_container");

/**
 * fillEarth 
 * 
 * gives the percentage of carcentage of carbon
 * 
 */

const fillEarth = () => {
    root.style.setProperty('--circle-fill', range.value + "%");
    show.innerHTML = range.value + "%"
    //root.style.setProperty('--show-percentage', range.value + "%");
}


//chart
/**
 * chart
 * 
 * chart atribute deffirieren und intialisieren
 */




const type = 'polarArea';
const data = {
    labels: ['Fabrik', 'Verkehrsmitteln', 'Wast', 'others', 'Blue'],
    datasets: [
        {
            label: '',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }
    ]

}

const options = {
    responsive: true,
    title: {
        display: true,
        text: 'ztddztdztd',
        fontSize: 18,
        fontColor: '#333',
        padding: 20
    },
    legend: {
        position: 'bottom',
        labels: {
            fontSize: 29,
            fontColor: 'red'
        }
    },

    scales: {
        x: {
            display: false, // hier wird die x-Achse ausgeblendet
            type: 'category',
            labels: [],
            grid: {
                display: true,
                color: 'red',
            }
        },
        y: {
            display: false, // hier wird die y-Achse ausgeblendet

            ticks: {
                beginAtZero: true,
                fontColor: '#a66'
            },
            grid: {
                display: false,
                color: '#000'
            },
            scaleLabel: {
                display: true,
                labelString: 'Sales ($)',
                fontColor: '#333',
                fontStyle: 'bold',
                fontSize: 16
            }
        }
    }
}
const plugins = []

const createChart = () => {
    const ctx = document.getElementById('myChart');
    const config = {
        type: type,
        data: data,
        options: options,
        plugins: plugins,
    }
    new Chart(ctx, config);
}




const app = () => {
    range.addEventListener("input", fillEarth)
    createChart()

}
app();


