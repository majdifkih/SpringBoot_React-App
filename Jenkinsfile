pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "springboot-backend"
        FRONTEND_IMAGE = "react-frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/majdifkih/SpringBoot_React-App.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh './mvnw test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                dir('backend') {
                    sh 'docker build -t $BACKEND_IMAGE -f dockerfile .'
                }

                dir('frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE -f dockerfile .'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully 🚀'
        }

        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
