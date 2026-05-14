pipeline {
    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    environment {
        COMPOSE_DOCKER_CLI_BUILD = '1'
        DOCKER_BUILDKIT = '1'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/majdifkih/SpringBoot_React-App.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Build & Test') {
            parallel {

                stage('Backend') {
                    stages {

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
                    }
                }

                stage('Frontend') {
                    stages {

                        stage('Test Frontend') {
                            steps {
                                dir('frontend') {
                                    sh 'npm run test'
                                }
                            }
                        }

                        stage('Build Frontend') {
                            steps {
                                dir('frontend') {
                                    sh 'npm run build'
                                }
                            }
                        }
                    }
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