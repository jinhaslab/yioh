---
layout: default
title: 홈
---

# 연세대학교 산업보건연구소

연세대학교 산업보건연구소(Yonsei Institute of Occupational Health)의 세미나, 심포지엄, 교육 자료를 공유하는 공간입니다.

## 최근 게시물

<div class="post-list">
{% assign recent_posts = site.posts | limit: 5 %}
{% for post in recent_posts %}
  <div class="post-list-item">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <div class="post-meta">
      <time>{{ post.date | date: "%Y년 %m월 %d일" }}</time>
      {% if post.category %}
      <span class="post-category">
        {% if post.category == 'symposium' %}심포지엄
        {% elsif post.category == 'seminar' %}세미나
        {% elsif post.category == 'education' %}교육
        {% endif %}
      </span>
      {% endif %}
    </div>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </div>
{% endfor %}
</div>

## 카테고리별 보기

<div class="category-filter">
  <a href="{{ '/categories/symposium.html' | relative_url }}" class="category-btn">심포지엄</a>
  <a href="{{ '/categories/seminar.html' | relative_url }}" class="category-btn">세미나</a>
  <a href="{{ '/categories/education.html' | relative_url }}" class="category-btn">교육</a>
  <a href="{{ '/board.html' | relative_url }}" class="category-btn">전체보기</a>
</div>

## 다가오는 일정

최신 일정은 [일정 페이지]({{ '/schedule.html' | relative_url }})에서 확인하실 수 있습니다.
