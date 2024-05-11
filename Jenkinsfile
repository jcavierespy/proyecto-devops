pipeline {
    agent any
    stages {
        stage('node pipeline') {
            agent {
                docker { 
                    image 'node:20.11.1-alpine3.19' 
                    reuseNode true
                }
            }
            stages {
                stage('checkout scm') {
                    steps {
                        checkout scm
                    }
                }
                stage('Instalar dependencias') {
                    steps {
                        echo 'Instalando dependencias'
                        sh 'npm install'
                    }
                }
                stage('Pruebas unitarias') {
                    steps {
                        echo 'Ejecutando pruebas unitarias'
                        sh 'npm run test'
                    }
                }
                stage('Traspilar') {
                    steps {
                        echo 'Traspilando proyecto'
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Construir imagen docker') {
            steps {
                script {
                    docker.withRegistry('http://localhost:8082', nexus-key) {
                        echo 'Construyendo imagen docker'
                        sh 'docker build -t localhost:8082/mi-proyecto-devops .'
                        sh "docker tag localhost:8082/mi-proyecto-devops localhost:8082/mi-proyecto-devops:${env.BUILD_NUMBER}"
                        sh 'docker push localhost:8082/mi-proyecto-devops'
                        sh "docker push localhost:8082/mi-proyecto-devops:${env.BUILD_NUMBER}"
                    }
                }
            }    
        }
    }
}
