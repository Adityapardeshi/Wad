
const ctx = document.getElementById('CoinsChart').getContext('2d');
const rctx = document.getElementById('RewardsChart').getContext('2d');

//coins chart
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {

    datasets: [
        {
            label: 'Dataset 1',
            data: [174],
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
            }
        }
    },
};

//rewardschart


const label = 'a';
const data2 = {
    labels: ['Jan', 'Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
        {
            label: 'Rewards Claimed',
            data: [1,2,4,5,0,2,4,1,1,2,3,1],
            borderColor:'rgba(255, 99, 132, 0.5)',
            backgroundColor: ['rgba(255, 99, 132, 0.5)','#AB46D2','#55D8C1','#FCF69C','#4B7BE5','#EDE6DB','#827397','#FEB139','#4700D8','#B4ECE3','#C65D7B'],
        }
    ]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Rewards History'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    },
};

const coins = new Chart(ctx, config);
const rewardchart = new Chart(rctx, config2);

//data-filter
$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if(value === 'all'){
            $('.single-product').show('1000');
        }else{
            $('.single-product').not('.'+value).hide('1000');
            $('.single-product').filter('.'+value).show('1000')
        }
    });

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#d').toggleClass('btn-danger')
    })
});