pipeline {
    agent any
    environment {
        DOCKER_IMAGE_NAME = 'joonseong/mancity-fe'
        DOCKERFILE_PATH = './frontend/mancity-project/Dockerfile'
        CONTAINER_NAME = 'mancity-fe'
        REGISTRY_CREDENTIAL = 'dockerhub_IdPwd'
        DOCKER_IMAGE = ''
        DOCKER_IMAGE_TAG = 'latest'


    }

    stages {
        //프로젝트 클론
        stage('GitLab Clone') {
            steps {
                git branch : 'develop-fe', credentialsId: 'gitlab_access_token', url: 'https://lab.ssafy.com/s10-ai-image-sub2/S10P22C201.git'
            }
        }

        //Dockerfile로 생성된 빌드 파일로 도커 이미지 생성
        stage('Docker Build Image') {
            steps {
                dir('./frontend/mancity-project') {
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

        stage('Delete Previous frontend Docker Container'){
            steps {
                script {
                    def  frontendContainerExists = sh(script: "docker ps --filter=name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (frontendContainerExists) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "frontend container does not exist. Skipping deletion."
                    }

                    def exitedContainers = sh(script: "docker ps --filter status=exited -q", returnStdout: true).trim()
                    if (exitedContainers) {
                        sh "docker rm ${exitedContainers}"
                    } else {
                        echo "No exited containers to remove."
                    }
                }
            }
        }

        stage('Prune Image'){
            steps {
                echo '##### delete <none> TAG images #####'
                script {
                    sh "docker image prune -f"
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

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE_NAME}'
                }
            }
        }

    }
}

