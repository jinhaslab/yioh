---
layout: default
title: 홈
---

<section class="home-hero">
  <div class="hero-content reveal">
    <div class="logo-wrapper">
      <img src="{{ '/assets/images/연세대마크.png' | relative_url }}" alt="연세대학교 로고" class="hero-logo">
    </div>
    <h1 class="hero-title">연세대학교 <br><span>산업보건연구소</span></h1>
    <p class="hero-subtitle">Yonsei Institute of Occupational Health</p>
    <p class="hero-desc">
      연구와 실천을 통해 건강한 노동 환경을 만들어갑니다.<br>
      심포지엄, 세미나, 교육 자료를 한곳에서 만나보세요.
    </p>
  </div>
</section>

<section class="home-section">
  <div class="section-header reveal">
    <h2>주요 활동</h2>
    <p>연구소의 핵심 활동 분야를 선택하세요.</p>
  </div>
  
  <div class="category-grid reveal">
    <a href="{{ '/categories/symposium.html' | relative_url }}" class="cat-card symp">
      <div class="cat-icon">🏛️</div>
      <h3>심포지엄</h3>
      <p>대규모 학술 행사 및 컨퍼런스 자료</p>
      <span class="btn-text">바로가기 →</span>
    </a>

    <a href="{{ '/categories/seminar.html' | relative_url }}" class="cat-card semi">
      <div class="cat-icon">🌿</div>
      <h3>세미나</h3>
      <p>정기 연구 발표 및 전문가 초청 강연</p>
      <span class="btn-text">바로가기 →</span>
    </a>

    <a href="{{ '/categories/education.html' | relative_url }}" class="cat-card edu">
      <div class="cat-icon">📙</div>
      <h3>교육</h3>
      <p>실무 역량 강화를 위한 교육 프로그램</p>
      <span class="btn-text">바로가기 →</span>
    </a>

    <a href="{{ '/categories/forum.html' | relative_url }}" class="cat-card forum">
      <div class="cat-icon">🚩</div>
      <h3>포럼</h3>
      <p>주요 현안에 대한 심층 토론과 논의</p>
      <span class="btn-text">바로가기 →</span>
    </a>
  </div>
</section>

<section class="home-section bg-light">
  <div class="section-header reveal">
    <h2>최신 연구 소식</h2>
    <div class="header-link">
      <a href="{{ '/board.html' | relative_url }}">전체보기 +</a>
    </div>
  </div>

  <div class="recent-list">
    {% assign recent_posts = site.posts | limit: 5 %}
    {% for post in recent_posts %}
    <a href="{{ post.url | relative_url }}" class="recent-item reveal">
      <div class="item-date">
        <span class="day">{{ post.date | date: "%d" }}</span>
        <span class="month">{{ post.date | date: "%Y.%m" }}</span>
      </div>
      <div class="item-content">
        <div class="item-badges">
          {% if post.category == 'symposium' %}
            <span class="mini-badge b-symp">심포지엄</span>
          {% elsif post.category == 'seminar' %}
            <span class="mini-badge b-semi">세미나</span>
          {% elsif post.category == 'education' %}
            <span class="mini-badge b-edu">교육</span>
          {% elsif post.category == 'forum' %}
            <span class="mini-badge b-forum">포럼</span>
          {% endif %}
        </div>
        <h3 class="item-title">{{ post.title }}</h3>
        <p class="item-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
      </div>
      <div class="item-arrow">→</div>
    </a>
    {% endfor %}
  </div>
</section>

<section class="schedule-banner reveal">
  <div class="banner-content">
    <h2>다가오는 일정 확인하기</h2>
    <p>연구소의 향후 계획과 행사를 놓치지 마세요.</p>
    <a href="{{ '/schedule.html' | relative_url }}" class="banner-btn">일정표 보기</a>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = function() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  // 초기 로드시 실행
  revealOnScroll();
});
</script>