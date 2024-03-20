pipeline {
    agent any
    tools {
        gradle 'Gradle 8.5'
    }
    environment {
        DOCKER_IMAGE_NAME = 'joonseong/mancity-social'
        DOCKERFILE_PATH = './social/Dockerfile'
        CONTAINER_NAME = 'mancity-social'
        REGISTRY_CREDENTIAL = 'dockerhub_IdPwd'
        DOCKER_IMAGE = ''
        DOCKER_IMAGE_TAG = 'latest'
    }
    stages {
        stage('GitLab Clone') {
            steps {
                git branch : 'develop-be-social', credentialsId: 'gitlab_access_token', url: 'https://lab.ssafy.com/s10-ai-image-sub2/S10P22C201.git'
            }
        }
        stage('Add Env') {
            steps {
                dir('./social') {
                    withCredentials([file(credentialsId: 'skey', variable: 'skey')]) {
                        sh 'chmod -R a=rwx src/main/resources'
                        sh 'cp ${skey} src/main/resources/application-skey.yml'
                    }
                }
            }
        }
        stage('Gradle Build') {
            steps {
                echo 'Building..'
                dir('./social') {
                    sh 'chmod +x gradlew'
                    sh './gradlew clean bootjar'
                }
            }
        }
        stage('Docker Build Image') {
            steps {
                dir('./social') {
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
        stage('Delete Previous back Docker Container'){
            steps {
                script {
                    def containerInfo = sh(script: "docker inspect ${CONTAINER_NAME}", returnStatus: true)
                    if (containerInfo == 0) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "social container does not exist. Skipping deletion."
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
        stage('Docker Clean Image') {
            steps {
                echo '##### BE Clean Prev Image #####'
                script {
                    def exitedImages = sh(script: "docker images -f 'dangling=true' -q", returnStdout: true).trim()
                    if (exitedImages) {
                        sh "docker rmi ${exitedImages}"
                    } else {
                        echo "No exited containers to remove."
                    }
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
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 8082:8082 ${DOCKER_IMAGE_NAME}'
                }
            }
        }
    }
}
