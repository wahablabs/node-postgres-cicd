# Dockerized Node.js & PostgreSQL REST API with CI/CD Pipeline

A production-ready, fully containerized Node.js (Express) and PostgreSQL RESTful API featuring automated testing and CI/CD via GitHub Actions. Designed with modern backend architecture principles and clean code practices.

![Build Status](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Multi--stage-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)

# Getting Started (Clone the repo)
git clone https://github.com/wahablabs/node-postgres-cicd.git
cd node-postgres-cicd

#    Environment Setup
# Create a .env configuration file
cp .env.example .env
## Modify Default credentials inside .env if required.

#Run with Docker Compose
docker-compose up --build -d
# The server will be operational at http://localhost:3000
