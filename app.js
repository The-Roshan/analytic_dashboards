// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Chart.js Charts Initialization

// Analytics Chart
const ctxAnalytics = document.getElementById('analyticsChart').getContext('2d');
const analyticsChart = new Chart(ctxAnalytics, {
  type: 'line',
  data: {
    labels: [], // Empty initially, will be filled dynamically
    datasets: [{
      label: 'Active Users',
      data: [],
      backgroundColor: 'rgba(255, 107, 107, 0.2)',
      borderColor: 'rgba(255, 107, 107, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Users'
        }
      }
    }
  }
});

// Detailed Chart
const ctxDetailed = document.getElementById('detailedChart').getContext('2d');
const detailedChart = new Chart(ctxDetailed, {
  type: 'bar',
  data: {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
      label: 'Sales',
      data: [120, 190, 300, 500],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54,162,235,1)',
        'rgba(255,206,86,1)',
        'rgba(75,192,192,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      x: {
        display: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
});

// Simulate Real-Time Data Update for Analytics Chart
function updateAnalyticsChart() {
  const currentTime = new Date().toLocaleTimeString();
  const randomValue = Math.floor(Math.random() * 100) + 50; // Random user count between 50 and 150

  // Limit data points to 20
  if (analyticsChart.data.labels.length >= 20) {
    analyticsChart.data.labels.shift();
    analyticsChart.data.datasets[0].data.shift();
  }

  analyticsChart.data.labels.push(currentTime);
  analyticsChart.data.datasets[0].data.push(randomValue);
  analyticsChart.update();
}

// Update every 2 seconds
setInterval(updateAnalyticsChart, 2000);
