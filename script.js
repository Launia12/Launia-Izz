// Chart for Income vs Expense
var ctx = document.getElementById('incomeExpenseChart').getContext('2d');
var incomeExpenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [1000, 3000, 3000, 5000, 1000, 6000, 2000, 3000, 1000, 5000, 6000, 1000],
            backgroundColor: '#000000'
        },
        {
            label: 'Expense',
            data: [2000, 3000, 1500, 3500, 500, 1500, 7000, 3500, 2000, 6000, 2500, 3000],
            backgroundColor: '#FF6384'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                }
            }
        }
    }
});
