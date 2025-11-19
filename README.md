# 연세대학교 산업보건연구소 (YIOH)

연세대학교 산업보건연구소의 세미나, 심포지엄, 교육 자료를 공유하는 GitHub Pages 사이트입니다.

## 사이트 주소

배포 후: https://jinhaslab.github.io/yioh

## 프로젝트 구조

```
yioh/
├── _config.yml           # Jekyll 사이트 설정
├── _layouts/             # 페이지 레이아웃 템플릿
│   ├── default.html
│   └── post.html
├── _includes/            # 재사용 가능한 컴포넌트
│   ├── header.html
│   ├── footer.html
│   └── navigation.html
├── _posts/               # 게시물 (마크다운 파일)
│   └── YYYY-MM-DD-title.md
├── assets/               # CSS, JS, 다운로드 파일
│   ├── css/
│   ├── js/
│   └── downloads/
├── categories/           # 카테고리별 페이지
│   ├── symposium.html
│   ├── seminar.html
│   └── education.html
├── index.md              # 홈페이지
├── board.html            # 전체 게시판
└── schedule.html         # 일정 페이지
```

## 로컬 개발 환경 설정

### 1. Ruby 설치 (필요한 경우)

Jekyll은 Ruby로 작성되어 있으므로 Ruby가 필요합니다.

**Ubuntu/Debian:**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

**macOS:**
```bash
brew install ruby
```

### 2. Jekyll 설치

```bash
# 의존성 패키지 설치
bundle install

# 또는 직접 설치
gem install jekyll bundler
```

### 3. 로컬 서버 실행

```bash
# 사이트 빌드 및 로컬 서버 시작
bundle exec jekyll serve

# 또는
jekyll serve
```

사이트는 http://localhost:4000/yioh 에서 확인할 수 있습니다.

### 4. 자동 재빌드 옵션

```bash
# 파일 변경 시 자동 재빌드
bundle exec jekyll serve --livereload
```

## 새 게시물 작성하기

### 1. 파일 생성

`_posts` 폴더에 다음 형식으로 파일을 만듭니다:

```
_posts/YYYY-MM-DD-제목.md
```

예: `_posts/2025-03-15-spring-seminar.md`

### 2. Front Matter 작성

파일 상단에 다음과 같은 메타데이터를 추가합니다:

```yaml
---
layout: post
title: "세미나 제목"
date: 2025-03-15 14:00:00 +0900
category: seminar  # symposium, seminar, education 중 선택
downloads:
  - name: "발표자료.pdf"
    url: "/assets/downloads/presentation.pdf"
    size: "2.5MB"
references:
  - name: "참고 링크 이름"
    url: "https://example.com"
---
```

### 3. 본문 작성

Front Matter 아래에 마크다운 형식으로 본문을 작성합니다:

```markdown
## 제목

본문 내용...

### 소제목

- 리스트 항목 1
- 리스트 항목 2
```

## 다운로드 파일 추가하기

### 1. 파일 업로드

다운로드할 파일을 `assets/downloads/` 폴더에 저장합니다:

```bash
assets/downloads/2025-seminar-presentation.pdf
```

### 2. 게시물에서 참조

게시물의 Front Matter에 다운로드 정보를 추가합니다:

```yaml
downloads:
  - name: "발표자료 - 제목.pdf"
    url: "/assets/downloads/2025-seminar-presentation.pdf"
    size: "2.5MB"
  - name: "프로그램 일정표.pdf"
    url: "/assets/downloads/2025-seminar-schedule.pdf"
    size: "500KB"
```

## 카테고리

게시물은 세 가지 카테고리로 분류됩니다:

- `symposium`: 심포지엄
- `seminar`: 세미나
- `education`: 교육

각 게시물은 Front Matter에서 하나의 카테고리를 지정해야 합니다.

## 검색 기능

사이트 헤더의 검색창을 통해 게시물을 검색할 수 있습니다. 검색은 제목, 내용, 발췌문을 대상으로 수행됩니다.

## GitHub Pages 배포

### 1. Git 초기화 및 커밋

```bash
git init
git add .
git commit -m "Initial commit: YIOH website"
```

### 2. GitHub 저장소 연결

```bash
git branch -M main
git remote add origin https://github.com/jinhaslab/yioh.git
git push -u origin main
```

### 3. GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. Settings > Pages 메뉴 선택
3. Source: `Deploy from a branch` 선택
4. Branch: `main` 선택, 폴더: `/ (root)` 선택
5. Save 클릭

몇 분 후 https://jinhaslab.github.io/yioh 에서 사이트를 확인할 수 있습니다.

## 사이트 업데이트

새 게시물을 추가하거나 내용을 수정한 후:

```bash
git add .
git commit -m "Add new post: [게시물 제목]"
git push
```

GitHub Actions가 자동으로 사이트를 빌드하고 배포합니다.

## 문의

- Email: jinhaslab@gmail.com
- GitHub: [@jinhaslab](https://github.com/jinhaslab)

## 라이선스

이 프로젝트는 연세대학교 산업보건연구소의 자료입니다.
