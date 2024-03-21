pipeline {
    agent any
    tools {
        gradle 'Gradle 8.5'
    }
    environment {
        DOCKER_IMAGE_NAME = 'joonseong/mancity-user'
        DOCKERFILE_PATH = './user/Dockerfile'
        CONTAINER_NAME = 'mancity-user'
        REGISTRY_CREDENTIAL = 'dockerhub_IdPwd'
        DOCKER_IMAGE = ''
        DOCKER_IMAGE_TAG = 'latest'
    }
    stages {
        stage('GitLab Clone') {
            steps {
                git branch : 'develop-be-user', credentialsId: 'gitlab_access_token', url: 'https://lab.ssafy.com/s10-ai-image-sub2/S10P22C201.git'
            }
        }
        stage('Gradle Build') {
            steps {
                echo 'Building..'
                dir('./user') {
                    sh 'chmod +x gradlew'
                    sh './gradlew clean bootjar'
                }
            }
        }
        stage('Docker Build Image') {
            steps {
                dir('./user') {
                    script {
                        DOCKER_IMAGE = docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}", "-f Dockerfile .")
                    }
                }
            }
        }
        stage('Push Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', REGISTRY_CREDENTIAL) {
                        DOCKER_IMAGE.push()
                    }
                }
            }
        }
        
        stage('Delete Previous user Docker Container'){
            steps {
                script {
                    def  userContainerExists = sh(script: "docker ps --filter=name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (userContainerExists) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "user container does not exist. Skipping deletion."
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
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 8081:8081 ${DOCKER_IMAGE_NAME}'
                }
            }
        }
    }
}
