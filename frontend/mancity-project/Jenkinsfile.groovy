pipeline {
    agent any
//   tools {
//        nodejs 'NodeJS 20.11.1'
//    }
    environment {
        DOCKER_IMAGE_NAME = 'joonseong/mancity-fe'
        DOCKERFILE_PATH = './mancity-project/Dockerfile'
        CONTAINER_NAME = 'mancity-fe'
        REGISTRY_CREDENTIAL = 'dockerhub_IdPwd'
        DOCKER_IMAGE = ''
        DOCKER_IMAGE_TAG = 'latest'


    }

    stages {
        //프로젝트 클론
        stage('GitLab Clone') {
            steps {
                git branch : 'feature/FE/front_cicd', credentialsId: 'gitlab_access_token', url: 'https://lab.ssafy.com/s10-ai-image-sub2/S10P22C201.git'
            }
        }

//        //의존성 설치
//        stage('Install dependencies') {
//            steps {
//                dir('./mancity-project') {
//                    sh 'node -v'
//                    sh 'npm install'
//                    nodejs('NodeJS 20.11.1') {
//                        sh 'npm run build'
//                    }
//                }
//            }
//        }

//        //프로젝트 빌드
//        stage('Build') {
//            steps {
//                echo 'Building..'
//                dir('./mancity-project') {
//                    sh 'npm run build'
//                    nodejs('NodeJS 20.11.1') {
//                        sh 'npm run build'
//                    }
//                }
//            }
//        }

        //도커 이미지 생성
        stage('Docker Build Image') {
            steps {
                dir('./mancity-project') {
                    script {
                        DOCKER_IMAGE = docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}", "-f Dockerfile .")
                    }
                }
            }
        }

        //이미지 도커 허브에 올리기
        stage('Push Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', REGISTRY_CREDENTIAL) {
                        DOCKER_IMAGE.push()
                    }
                }
            }
        }

        stage('Docker Clean Image') {
            steps {
                dir('./mancity-project') {
                    sh 'docker rmi $DOCKER_IMAGE_NAME'
                }
            }
        }


        stage('Pull from DockerHub') {
            steps {
                script {
                    sh 'docker pull ${DOCKER_IMAGE_NAME}'
                }
            }
        }
        stage('Delete Previous back Docker Container'){
            steps {
                script {
                    def containerInfo = sh(script: "docker inspect ${CONTAINER_NAME}", returnStatus: true)
                    if (containerInfo == 0) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "Frontend container does not exist. Skipping deletion."
                    }
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE_NAME}'
                }
            }
        }

    }
}

