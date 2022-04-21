const ctx = document.getElementById('myChart').getContext('2d')
const ctx2 = document.getElementById('myChart2').getContext('2d')

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  var options = {
    
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
}

  const data = {
    labels: labels,
    datasets: [{
      label: 'Transactions',
      backgroundColor: '#F4BBBB',
      borderColor: '#F4BBBB',
      data: [0, 10, 5, 2, 20, 30, 35, 20],
      tension : 0.3,
    },
    {
      label: 'Spending',
      backgroundColor: '#F1E1A6',
      borderColor: '#F1E1A6',
      data: [0, 2, 7, 2, 30, 40, 15, 22],
      tension : 0.3,
    }]
  }

  const data2 = {
    labels: labels,
    datasets: [{
      label: 'Transactions',
      backgroundColor: '#F4BBBB',
      borderColor: '#F4BBBB',
      data: [7, 5, 3, 8, 6, 4, 5, 2],
      tension : 0.3,
    },
    {
      label: 'Rewards',
      backgroundColor: '#F1E1A6',
      borderColor: '#F1E1A6',
      data: [4, 5, 2, 6, 3, 2, 3, 2],
      tension : 0.3,
    }]
  }

  
  const config = {
    type: 'line',
    data: data,
    options: options
  };

  const config2 = {
    type: 'bar',
    data: data2,
    options: options
  };

  const myChart = new Chart(ctx, config)
  const myChart2 = new Chart(ctx2, config2)