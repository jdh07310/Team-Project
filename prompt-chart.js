document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('prompt-chart')?.getContext('2d')
  if (!ctx) return

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['텍스트 생성', '이미지 생성', '코드 생성', '요약/번역', '기타'],
      datasets: [
        {
          data: [35, 25, 15, 15, 10],
          backgroundColor: [
            '#5e81ac',
            '#81a1c1',
            '#8fbcbb',
            '#a3be8c',
            '#b48ead',
          ],
        },
      ],
    },
    options: {
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
