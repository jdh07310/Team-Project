function toggleContent() {
    var content = document.querySelector('.toggle-content');
    // 내용을 펼치거나 숨기는 함수
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  }
  function toggleHistoryContent() {
    var history = document.querySelector('.toggle-history');
    // 내용을 펼치거나 숨기는 함수
    history.style.display = (history.style.display === 'none' || history.style.display === '') ? 'block' : 'none';
  }
  function toggleapplicationsContent() {
    var applications = document.querySelector('.toggle-applications');
    // 내용을 펼치거나 숨기는 함수
    applications.style.display = (applications.style.display === 'none' || applications.style.display === '') ? 'block' : 'none';
  }
  function toggleprosconsContent() {
    var proscons = document.querySelector('.toggle-pros-cons');
    // 내용을 펼치거나 숨기는 함수
    proscons.style.display = (proscons.style.display === 'none' || proscons.style.display === '') ? 'block' : 'none';
  }
  function togglefutureContent() {
    var future = document.querySelector('.toggle-future');
    // 내용을 펼치거나 숨기는 함수
    future.style.display = (future.style.display === 'none' || future.style.display === '') ? 'block' : 'none';
  }
  function togglereferencesContent() {
    var references = document.querySelector('.toggle-references');
    // 내용을 펼치거나 숨기는 함수
    references.style.display = (references.style.display === 'none' || references.style.display === '') ? 'block' : 'none';
  }
  


  
document.addEventListener('DOMContentLoaded', () => {
  // Toggle functions for content sections
  window.toggleContent = function() {
    var content = document.querySelector('#gen-ai-details');
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  };

  window.toggleHistoryContent = function() {
    var history = document.querySelector('#model-details');
    history.style.display = (history.style.display === 'none' || history.style.display === '') ? 'block' : 'none';
  };

  window.toggleapplicationsContent = function() {
    var applications = document.querySelector('#gen-ai-details');
    applications.style.display = (applications.style.display === 'none' || applications.style.display === '') ? 'block' : 'none';
  };

  window.toggleprosconsContent = function() {
    var proscons = document.querySelector('#gen-ai-details');
    proscons.style.display = (proscons.style.display === 'none' || proscons.style.display === '') ? 'block' : 'none';
  };

  window.togglefutureContent = function() {
    var future = document.querySelector('#gen-ai-details');
    future.style.display = (future.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  };

  window.togglereferencesContent = function() {
    var references = document.querySelector('#gen-ai-details');
    references.style.display = (references.style.display === 'none' || references.style.display === '') ? 'block' : 'none';
  };

  // Attach toggle functions to learn-more buttons
  const learnMoreButtons = document.querySelectorAll('.learn-more');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      if (targetId === 'gen-ai-details') {
        toggleContent();
        button.textContent = document.querySelector('#gen-ai-details').style.display === 'block' ? '숨기기' : '더 알아보기';
      } else if (targetId === 'model-details') {
        toggleHistoryContent();
        button.textContent = document.querySelector('#model-details').style.display === 'block' ? '숨기기' : '더 알아보기';
      }
    });
  });

  // Real-time clock
  const timeDisplay = document.createElement('div');
  timeDisplay.className = 'time-display';
  timeDisplay.style.cssText = 'position: absolute; top: 1rem; right: 2rem; color: #a3bffa; font-size: 1rem;';
  document.querySelector('#introduction').appendChild(timeDisplay);

  function updateTime() {
    const now = new Date();
    const kstTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    timeDisplay.textContent = `현재 시간: ${kstTime.toLocaleTimeString('ko-KR', { hour12: true })} (KST, ${kstTime.toLocaleDateString('ko-KR')})`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Allow default behavior for external page links
  const navLinks = document.querySelectorAll('.navbar a[href$=".html"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Let the browser handle navigation to .html files
    });
  });

  // Modal for intro button
  const introButton = document.querySelector('.intro-button');
  if (introButton) {
    introButton.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <h3>생성형 AI 상세</h3>
          <p>2025년 6월, Grok 3는 텍스트와 이미지 통합 처리로 1.5억 명 이상의 사용자를 보유 중입니다. xAI는 지속 가능한 AI 개발에 주력하고 있습니다.</p>
          <button class="modal-close">닫기</button>
        </div>
      `;
      document.body.appendChild(modal);
      setTimeout(() => modal.classList.add('show'), 10);

      const closeButton = modal.querySelector('.modal-close');
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          modal.classList.remove('show');
          setTimeout(() => document.body.removeChild(modal), 300);
        });
      }

      console.log('버튼 클릭됨 - 더 알아보기');
    });
  }

  // Card hover animation
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    });
  });

  // Scroll animation for sections
  const sections = document.querySelectorAll('.content-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Modal CSS
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1001;
    }
    .modal.show {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: #2a3d4f;
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
      color: #e2e8f0;
      text-align: center;
      animation: slideIn 0.3s ease-out;
    }
    .modal-close {
      background-color: #4a90e2;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      margin-top: 1rem;
    }
    @keyframes slideIn {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(modalStyle);
});


// 차트 생성 (기존 코드에서 이 부분만 교체)
const ctx1 = document.getElementById('nn-visual').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["입력층", "은닉층 1", "은닉층 2", "출력층"],
        datasets: [{
            label: "노드 수",
            data: [64, 128, 64, 10],
            backgroundColor: ["#4c566a", "#5e81ac", "#81a1c1", "#8fbcbb"],
            borderColor: ["#2e3b4e", "#3b4a5e", "#4c566a", "#5e81ac"],
            borderWidth: 1
        }]
    },
    options: {
        scales: { y: { beginAtZero: true, ticks: { color: '#e5e9f0' } } },
        plugins: { 
            legend: { labels: { color: '#e5e9f0' } },
            tooltip: { bodyColor: '#e5e9f0', titleColor: '#e5e9f0' }
        }
    }
});

const ctx2 = document.getElementById('transformer-visual').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["단어 1", "단어 2", "단어 3", "단어 4"],
        datasets: [{
            label: "Attention Score",
            data: [0.2, 0.5, 0.8, 0.3],
            borderColor: "#81a1c1",
            backgroundColor: "rgba(129, 161, 193, 0.5)",
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: { y: { beginAtZero: true, max: 1, ticks: { color: '#e5e9f0' } } },
        plugins: { 
            legend: { labels: { color: '#e5e9f0' } },
            tooltip: { bodyColor: '#e5e9f0', titleColor: '#e5e9f0' }
        }
    }
});

const ctx3 = document.getElementById('opt-visual').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["에포크 1", "에포크 2", "에포크 3", "에포크 4", "에포크 5"],
        datasets: [{
            label: "손실 값",
            data: [2.5, 1.8, 1.2, 0.9, 0.6],
            borderColor: "#8fbcbb",
            backgroundColor: "rgba(143, 188, 187, 0.5)",
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: { y: { beginAtZero: true, ticks: { color: '#e5e9f0' } } },
        plugins: { 
            legend: { labels: { color: '#e5e9f0' } },
            tooltip: { bodyColor: '#e5e9f0', titleColor: '#e5e9f0' }
        }
    }
});

const ctx = document.getElementById('application-chart').getContext('2d')
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
