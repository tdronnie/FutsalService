pipeline {
    agent any
    environment {
        DOCKER_IMAGE_NAME = 'joonseong/mancity-flask'
        DOCKERFILE_PATH = './flask/Dockerfile'
        CONTAINER_NAME = 'mancity-flask'
        REGISTRY_CREDENTIAL = 'dockerhub_IdPwd'
        DOCKER_IMAGE = ''
        DOCKER_IMAGE_TAG = 'latest'
    }
    stages {
        stage('GitLab Clone') {
            steps {
                git branch : 'feature/BE/flask_cicd', credentialsId: 'gitlab_access_token', url: 'https://lab.ssafy.com/s10-ai-image-sub2/S10P22C201.git'
            }
        }

        stage('Docker Build Image') {
            steps {
                dir('./flask') {
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

        stage('Delete Previous flask Docker Container'){
            steps {
                script {
                    def  flaskContainer = sh(script: "docker ps -f name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (flaskContainer.isEmpty()) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "flask container does not exist. Skipping deletion."
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
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 5000:5000 ${DOCKER_IMAGE_NAME}'
                }
            }
        }
    }
}
