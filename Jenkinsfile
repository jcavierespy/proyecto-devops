pipeline {
    agent any
    stages {
        stage('node pipeline') {
            agent {
                docker { image 'node:20.11.1-alpine3.19' }
            }
            stages {
                sstage('checkout scm') {
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
    }
}