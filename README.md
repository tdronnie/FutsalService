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
