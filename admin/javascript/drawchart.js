// drawChart.js
function veBieuDo() {
    const ctx = document.getElementById('myChart').getContext('2d');   
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['6/2024', '7/2024', '8/2024', '9/2024', '10/2024'],
            datasets: [{
                label: 'Doanh thu',
                data: [0, 2000000, 10000000, 11000000, 30000000],
                borderColor: '#E33D48',
                backgroundColor: '#E33D48',
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointBackgroundColor: '#E33D48',
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString('vi-VN') + ' ₫';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.parsed.y;
                            return 'Doanh thu: ' + value.toLocaleString('vi-VN') + ' ₫';
                        }
                    }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
}
