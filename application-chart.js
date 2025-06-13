document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('application-chart')?.getContext('2d')
  if (!ctx) {
    console.error("📛 'application-chart' 캔버스를 찾을 수 없습니다.")
    return
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['예술', '교육', '의료', '엔터테인먼트', '금융'],
      datasets: [
        {
          label: 'AI 활용 비율 (%)',
          data: [30, 25, 20, 15, 10],
          backgroundColor: '#5e81ac',
          borderRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#e5e9f0' },
        },
        x: {
          ticks: { color: '#e5e9f0' },
        },
      },
      plugins: {
        legend: {
          labels: { color: '#e5e9f0' },
        },
        tooltip: {
          bodyColor: '#e5e9f0',
          titleColor: '#e5e9f0',
        },
      },
    },
  })
})
