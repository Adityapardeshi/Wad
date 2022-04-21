
const ctx = document.getElementById('CoinsChart').getContext('2d')

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {

    datasets: [
        {
            label: 'Dataset 1',
            data: [50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)'
            ],
        }
    ]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Coins : '+data.datasets[0].data,
                position: 'bottom'
            }
        }
    },
};

const coins = new Chart(ctx, config);