# 다운로드 파일 폴더

이 폴더에는 게시물에서 다운로드할 수 있는 파일들(PDF, 슬라이드 등)을 저장합니다.

## 파일 추가 방법

1. 다운로드 제공할 파일을 이 폴더에 저장합니다.
2. 게시물의 Front Matter에 다운로드 정보를 추가합니다.

## 예시

### 1. 파일 저장
```
assets/downloads/2025-seminar-presentation.pdf
assets/downloads/2025-seminar-schedule.pdf
```

### 2. 게시물에서 참조

`_posts/2025-01-15-example-seminar.md`:

```yaml
---
layout: post
title: "예시 세미나"
date: 2025-01-15 14:00:00 +0900
category: seminar
downloads:
  - name: "발표자료.pdf"
    url: "/assets/downloads/2025-seminar-presentation.pdf"
    size: "2.5MB"
  - name: "일정표.pdf"
    url: "/assets/downloads/2025-seminar-schedule.pdf"
    size: "500KB"
---
```

## 파일 명명 규칙

가독성과 관리를 위해 다음 규칙을 권장합니다:

- 날짜 포함: `YYYY-MM-DD-description.pdf`
- 영문 소문자와 하이픈 사용: `2025-01-15-seminar-presentation.pdf`
- 공백 대신 하이픈 사용
- 한글 파일명도 가능하지만 영문 권장

## 주의사항

- 큰 파일은 GitHub의 파일 크기 제한(100MB)을 초과하지 않도록 주의
- 민감한 정보가 포함된 파일은 업로드하지 않기
- 저작권이 있는 자료는 적절한 권한 확인 후 업로드
