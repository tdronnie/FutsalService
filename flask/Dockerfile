# 빌드 관련
FROM python:3.9.12-alpine3.15


VOLUME /tmp

# 필요 패키지 목록 복사
COPY requirements.txt .

# 애플리케이션 실행에 필요한 python 패키지 설치
RUN pip install -r requirements.txt

# 소스 코드 복사
COPY . .

# 포트 번호 노출
EXPOSE 5000

# 프로젝트 실행
ENTRYPOINT ["python", "app.py"]
