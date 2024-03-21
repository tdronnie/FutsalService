# 중간 진행 상황(24.03.22)
## Frontend
### Progress
- 

### Troubleshooting
- Tailwind `className`를 동적으로 활용하려는 부분에서 문제 발생.
  <br>
  atomic 구조로 컴포넌트를 관리하다보니, 같은 색상인데 각자 따로 prop하는 것이 비효율적이라 생각함.
   <br>
   예를 들어, 버튼에서 배경 색상과 호버 했을 때 반전된 글자 색상이 같은 red일 때, 한 번에 묶어서 prop 하고싶어서 `text-${color}` 형태로 만들었더니 인식을 하지 못하는 문제가 발생함.
   <br>
   이유는, Tailwind는 사용되지 않는 CSS를 제거하는데, 코드 컴파일시에 존재하는 `className`만을 수정할 수 있는 값으로 인지하기 때문에 `text-${color}` 형태는 처음에 text- 로 인식되어 지워져서 수정할 수 없는 상황에 부딛히는 것이었음.
   <br>
   결론
   <br>
   prop을 사용할 때는 아무리 귀찮더라도 온전한 className을 내려보낼 것.
   <br> 

- Storybook에서 router 오류 발생
  <br>
  atomic 구조를 활용하기 위해 Storybook을 도입했는데, router를 사용하는 부분에서 오류 발생함.
  <br>
  Storybook에서 plugin, 또는 라이브러리 역할을 하는 addon이 존재함.
  <br>
  "@storybook-addon-react-router"를 사용하면 된다고 파악했으나, 현재 이 addon은 storybook 7버전까지 지원해서 버전 충돌이 발생함. (현재 storybook v.8 사용함)
  <br>
  storybook 페이지를 찾아본 결과, 같은 제작자가 addon-remix-react-router를 만들었는데, react-router를 업그레이드해서 만든 버전이라고 함.
  <br>
  현재 프로젝트에서는 remix를 사용하지 않아서 호환이 될까 걱정했으나, 다행히 addon이 정상작동해서 storybook에서 router를 사용한 컴포넌트도 에러 없이 불러올 수 있게 됨.

- Storybook에서 router 적용 방법
  <br>
  이전에는 router를 하나의 컴포넌트의 stories 에서 적용함.
  <br>
  이 때, 매번 같은 코드가 중복되고, 작업이 반복되는 것을 느꼈고, 전역적으로 적용하는 방법을 찾아봄.
  <br>
  찾아본 결과, storybook의 `decorators`와 `parameters`는 세가지 위치에서 적용 가능하다는 것을 알게 됨.
  <br>
  첫 번째는 story 내부에서 가능함. Story는 하나의 컴포넌트에서 나오는 Stories에 존재하는 하나의 예시임.
  <br>
  두 번째는 stories 에서 가능함. 하나의 컴포넌트에서 파생된 Stories에서 적용하면 하위 Story에 모두 적용됨.
  <br>
  세 번째는 Global로, 설정 페이지인 `.storybook/preview.tsx`에서 적용 가능함.
  <br>
  이로 인해, Storybook을 더욱 효율적으로 사용할 수 있게 됨.

## Backend
### Progress
- 

### Troubleshooting
- 

## AI
### Progress
- 

### Troubleshooting
- 


## [✨team BABOO notion✨](https://leeseny.notion.site/2024-1f665d712e7a4cef98bbc8be9050c0b7?pvs=4)

## Git Commit Convention

### Commit Message 구조
type : 어떤 의도로 커밋했는지를 type 에 명시(ex. Feat, Fix, Docs)

Subject : 제목. 코드 변경사항에 대한 짧은 요약

body : 긴 설명이 필요한 경우, 어떻게 작성했는지가 아닌 무엇을 왜 했는지 를 작성(부연설명 혹은 커밋이유)

footer : issue tracker ID 를 명시하고 싶은 경우에 작성

### 타입(Commit Type)

- 태그(tag) + 제목(subject) 형식
- 첫 문자만 대문자
- "태그: 제목" 의 형태이며, ":" 뒤에 space 가 있음에 유의[ex) Feat: 회원가입 api (Feat 가 태그이고, 회원가입 api 가 제목)]

### 태그 종류

- Feat:	기능 추가, 삭제, 변경
- Fix:	버그, 오류 수정
- Docs:	README.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)
- Style:	CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)
- Refactor:	코드 리팩토링
- Test:	테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)
- Config:	npm 모듈 설치 등
- Chore:	패키지 매니저 설정할 경우, etc 등 (ex. gitignore)
- Comment:	필요한 주석 추가 및 변경
- Rename:	파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
- Remove:	파일을 삭제하는 작업만 수행한 경우

### 제목

- 제목은 최대 50글자가 넘지 않고, 마침표 및 특수기호는 사용 금지
- 동사(원형)를 가장 앞에 두고 첫 글자는 대문자로 표기
- 제목은 개조식 구문으로 작성 --> 완전한 서술형 문장이 아니라, 간결하고 요점적인 서술을 의미.

* Fixed --> Fix
* Added --> Add
* Modified --> Modify

### 본문(Body)

- 본문은 한 줄 당 72자 내로 작성
- 본문 내용은 양에 구애받지 않고 최대한 상세히 작성
- 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명

### 꼬릿말(Footer)

- 꼬리말은 선택사항, 이슈 트래커 ID 작성
- "유형: #이슈 번호" 형식으로 사용
- 여러 개의 이슈 번호를 적을 때는 쉼표(,)로 구분
- 이슈 트래커 유형은 다음 중 하나를 사용

1. Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
2. Resolves: 이슈를 해결했을 때 사용
3. Ref: 참고할 이슈가 있을 때 사용
4. Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
   ex) Fixes: #45 Related to: #34, #23
