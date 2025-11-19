# YIOH 사이트 활용 가이드

## 목차
1. [새 게시물 추가하기](#1-새-게시물-추가하기)
2. [다운로드 파일 추가하기](#2-다운로드-파일-추가하기)
3. [사이트 디자인 수정하기](#3-사이트-디자인-수정하기)
4. [기본 설정 변경하기](#4-기본-설정-변경하기)
5. [일상적인 관리](#5-일상적인-관리)

---

## 1. 새 게시물 추가하기

### 방법 A: GitHub 웹에서 직접 추가 (간단)

1. **GitHub 저장소 접속**: https://github.com/jinhaslab/yioh

2. **`_posts` 폴더 클릭**

3. **"Add file" → "Create new file" 클릭**

4. **파일 이름 입력** (형식 중요!):
   ```
   2025-03-20-spring-health-seminar.md
   ```
   - 형식: `YYYY-MM-DD-영문제목.md`
   - 날짜는 세미나 개최 날짜
   - 영문 제목은 하이픈(-)으로 연결

5. **내용 작성**:

```yaml
---
layout: post
title: "봄철 직장인 건강관리 세미나"
date: 2025-03-20 14:00:00 +0900
category: seminar
downloads:
  - name: "발표자료 - 직장인 건강관리.pdf"
    url: "/assets/downloads/2025-spring-health-presentation.pdf"
    size: "2.3MB"
references:
  - name: "질병관리청 건강정보"
    url: "https://www.kdca.go.kr"
---

## 세미나 소개

봄철 직장인들의 건강관리에 대한 세미나입니다.

## 주요 내용

### 1. 봄철 건강 관리
- 황사와 미세먼지 대응
- 알레르기 예방
- 춘곤증 극복 방법

### 2. 직장 내 건강 습관
- 규칙적인 운동
- 올바른 식습관
- 스트레스 관리

## 세미나 정보

- **일시**: 2025년 3월 20일 (목) 14:00 - 16:00
- **장소**: 연세대학교 산업보건연구소
- **참가비**: 무료
- **문의**: jinhaslab@gmail.com
```

6. **"Commit changes" 클릭**
   - Commit message: `Add post: 봄철 직장인 건강관리 세미나`
   - "Commit directly to the main branch" 선택
   - "Commit changes" 확인

7. **2-3분 후 사이트에서 확인**: https://jinhaslab.github.io/yioh

### 방법 B: 로컬에서 작업 (여러 파일 수정 시)

```bash
# 1. 저장소 복제 (최초 1회만)
cd ~
git clone https://github.com/jinhaslab/yioh.git
cd yioh

# 2. 새 게시물 파일 생성
nano _posts/2025-03-20-spring-health-seminar.md
# 위의 내용 붙여넣기 후 저장 (Ctrl+O, Enter, Ctrl+X)

# 3. GitHub에 업로드
git add _posts/2025-03-20-spring-health-seminar.md
git commit -m "Add post: 봄철 직장인 건강관리 세미나"
git push
```

---

## 2. 다운로드 파일 추가하기

### 방법 A: GitHub 웹에서 업로드

1. **`assets/downloads` 폴더로 이동**

2. **"Add file" → "Upload files" 클릭**

3. **파일 드래그 앤 드롭** 또는 **"choose your files" 클릭**
   - 예: `2025-spring-health-presentation.pdf`

4. **Commit changes**:
   - Message: `Add download: 봄철 건강관리 발표자료`
   - Commit

5. **게시물에서 파일 연결**:
   - 게시물 파일 수정
   - Front Matter의 `downloads` 섹션에 추가:

```yaml
downloads:
  - name: "발표자료 - 직장인 건강관리.pdf"
    url: "/assets/downloads/2025-spring-health-presentation.pdf"
    size: "2.3MB"
```

### 방법 B: 로컬에서 작업

```bash
# 1. 파일 복사
cp ~/Downloads/presentation.pdf assets/downloads/2025-spring-health-presentation.pdf

# 2. Git에 추가
git add assets/downloads/2025-spring-health-presentation.pdf
git commit -m "Add download: 봄철 건강관리 발표자료"
git push
```

---

## 3. 사이트 디자인 수정하기

### 색상 변경

**파일**: `assets/css/style.css`

```css
/* 메인 색상 (파란색 → 다른 색으로 변경) */

/* 헤더 배경 */
.site-header {
  background: linear-gradient(135deg, #0066cc 0%, #004999 100%);
  /* 예: 초록색으로 변경 */
  background: linear-gradient(135deg, #28a745 0%, #218838 100%);
}

/* 링크 색상 */
.post-title,
.post-list-item h2 a,
.nav-list > li > a.active {
  color: #0066cc;
  /* 예: 초록색으로 변경 */
  color: #28a745;
}

/* 버튼 색상 */
.category-btn {
  border: 2px solid #0066cc;
  color: #0066cc;
  /* 예: 초록색으로 변경 */
  border: 2px solid #28a745;
  color: #28a745;
}
```

### 로고/이미지 추가

1. **로고 파일 업로드**:
   - `assets/images/` 폴더 생성
   - 로고 파일 업로드: `logo.png`

2. **헤더 수정** (`_includes/header.html`):

```html
<div class="site-title-wrapper">
  <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="YIOH Logo" style="height: 60px; margin-right: 15px;">
  <div>
    <h1 class="site-title">
      <a href="{{ '/' | relative_url }}">{{ site.title }}</a>
    </h1>
    <p class="site-subtitle">{{ site.title_en }}</p>
  </div>
</div>
```

### 폰트 변경

`assets/css/style.css` 상단에 추가:

```css
/* Google Fonts 추가 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

body {
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

---

## 4. 기본 설정 변경하기

**파일**: `_config.yml`

```yaml
# 사이트 제목 변경
title: 연세대학교 산업보건연구소
title_en: Yonsei Institute of Occupational Health

# 이메일 변경
email: jinhaslab@gmail.com

# 설명 변경
description: >-
  연세대학교 산업보건연구소의 세미나, 심포지엄, 교육 자료를 공유하는 공간입니다.

# GitHub 사용자명 (저장소 주소에 영향)
github_username: jinhaslab

# 시간대 설정
timezone: Asia/Seoul
```

**변경 후 반드시 Git에 커밋**:
```bash
git add _config.yml
git commit -m "Update site configuration"
git push
```

---

## 5. 일상적인 관리

### A. 정기적인 작업 흐름

#### 세미나 공지 (사전 작업)

1. **새 게시물 작성** (날짜는 세미나 예정일)
   ```yaml
   date: 2025-04-15 14:00:00 +0900
   ```

2. **사이트에 자동 표시**:
   - 홈페이지 "최근 게시물"에 표시
   - "일정 페이지"의 "예정된 일정"에 표시
   - 해당 카테고리 페이지에 표시

#### 세미나 후 (자료 업로드)

1. **발표자료 업로드**:
   ```bash
   # assets/downloads/ 폴더에 PDF 추가
   ```

2. **게시물 수정** (다운로드 링크 추가):
   ```yaml
   downloads:
     - name: "발표자료.pdf"
       url: "/assets/downloads/2025-04-15-presentation.pdf"
       size: "3MB"
   ```

3. **Git 업데이트**:
   ```bash
   git add .
   git commit -m "Add presentation materials for April seminar"
   git push
   ```

### B. 게시물 수정하기

1. **GitHub에서 파일 찾기**:
   - `_posts/` 폴더
   - 수정할 파일 클릭
   - 연필 아이콘(Edit) 클릭

2. **내용 수정**

3. **"Commit changes" 클릭**

### C. 게시물 삭제하기

1. **GitHub에서 파일 찾기**
2. **파일 클릭 → 쓰레기통 아이콘 클릭**
3. **"Commit changes" 확인**

### D. 카테고리 종류

현재 3가지 카테고리가 있습니다:
- `symposium`: 심포지엄 (대규모 학술 행사)
- `seminar`: 세미나 (중소규모 발표/강연)
- `education`: 교육 (교육 프로그램, 워크샵)

**새 카테고리 추가**하려면:
1. `categories/새카테고리.html` 파일 생성
2. `_includes/navigation.html`에 메뉴 추가
3. `_config.yml`의 categories에 추가

---

## 자주 사용하는 마크다운 문법

### 제목
```markdown
## 대제목
### 중제목
#### 소제목
```

### 리스트
```markdown
- 항목 1
- 항목 2
  - 하위 항목

1. 번호 항목 1
2. 번호 항목 2
```

### 링크와 이미지
```markdown
[링크 텍스트](https://example.com)
![이미지 설명](/assets/images/photo.jpg)
```

### 표
```markdown
| 항목 | 설명 |
|------|------|
| A    | 설명A |
| B    | 설명B |
```

### 강조
```markdown
**굵게**
*기울임*
`코드`
```

---

## 빠른 체크리스트

### 새 세미나/심포지엄 공지할 때:
- [ ] `_posts/` 폴더에 새 파일 생성 (날짜는 행사 예정일)
- [ ] Front Matter 작성 (title, date, category)
- [ ] 본문 작성 (행사 소개, 일시, 장소, 신청 방법)
- [ ] Git commit & push
- [ ] 사이트에서 확인

### 행사 후 자료 업로드할 때:
- [ ] PDF 파일을 `assets/downloads/`에 업로드
- [ ] 게시물 수정 (downloads 섹션 추가)
- [ ] Git commit & push
- [ ] 다운로드 링크 작동 확인

### 디자인 변경할 때:
- [ ] `assets/css/style.css` 수정
- [ ] 로컬에서 테스트 (선택사항)
- [ ] Git commit & push
- [ ] 사이트에서 확인

---

## 문제 해결

### 사이트가 업데이트되지 않을 때

1. **GitHub Actions 확인**:
   - 저장소 → Actions 탭
   - 최근 workflow 상태 확인
   - 빨간색(실패)이면 로그 확인

2. **캐시 새로고침**:
   - Ctrl + Shift + R (강력 새로고침)
   - 또는 시크릿 모드에서 확인

3. **5-10분 대기**:
   - GitHub Pages 빌드에 시간이 걸림

### 다운로드 링크가 404 에러

- 파일 경로 확인:
  ```yaml
  url: "/assets/downloads/파일명.pdf"  # 맨 앞에 / 있어야 함!
  ```
- 파일 이름 정확히 일치하는지 확인 (대소문자 구분)

### 한글이 깨질 때

- 파일을 UTF-8 인코딩으로 저장했는지 확인
- GitHub 웹 에디터 사용하면 자동으로 UTF-8

---

## 도움말

- **Jekyll 문서**: https://jekyllrb.com/docs/
- **마크다운 가이드**: https://www.markdownguide.org/
- **GitHub Pages 가이드**: https://docs.github.com/pages

궁금한 점이 있으면 jinhaslab@gmail.com으로 문의하세요!
