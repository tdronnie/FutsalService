# node:20.11.1 경량화 버전
FROM node:20.11.1-alpine

# 경로 설정하기
WORKDIR /frontend/mancity-project

# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY package*.json ./

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY . .

#RUN npm run build

# 명령어 실행 (의존성 설치)
RUN npm install

#RUN chmod 755 node_modules/.bin

# 3000번 포트 노출
EXPOSE 3000

# npm start 스크립트 실행
CMD ["npm", "run", "dev"]

# 그리고 Dockerfile로 docker 이미지를 빌드
# $ docker build .
