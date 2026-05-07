pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/majdifkih/SpringBoot_React-App.git'
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
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                dir('backend') {
                    sh 'docker compose down || true'
                    sh 'docker compose pull'
                    sh 'docker compose up -d'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker compose down || true'
                    sh 'docker compose pull'
                    sh 'docker compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS 🚀'
        }

        failure {
            echo 'Pipeline FAILED ❌'
        }

        always {
            cleanWs()
        }
    }
}
