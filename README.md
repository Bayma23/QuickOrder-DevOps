# QuickOrder

## Descrição

O QuickOrder é um sistema de pedidos online desenvolvido como atividade prática da disciplina de DevOps.

A aplicação é composta por:

* Frontend React
* Backend Node.js + Express
* Banco PostgreSQL
* Docker Compose
* GitHub Actions
* Jest e Supertest

---

## Arquitetura

Frontend (React)

↓

Backend (Node.js + Express)

↓

PostgreSQL

---

## Tecnologias Utilizadas

* React
* Node.js
* Express
* PostgreSQL
* Docker
* Docker Compose
* GitHub Actions
* Jest
* Supertest

---

## Como Executar

### Backend

cd backend

npm install

npm start

### Frontend

cd frontend

npm install

npm start

---

## Testes

cd backend

npm test

---

## Problemas Identificados

Durante a análise do ambiente foram identificados os seguintes problemas:

* Frontend não acessava a API
* Containers iniciavam fora de ordem
* Banco de dados não possuía persistência
* Não existiam testes automatizados
* Não existia pipeline CI/CD
* Variáveis sensíveis estavam expostas

---

## Correções Implementadas

* Integração Frontend ↔ Backend
* Endpoint de Health Check
* Persistência de dados utilizando volumes Docker
* Configuração do Docker Compose
* Testes automatizados com Jest e Supertest
* Pipeline GitHub Actions
* Utilização de variáveis de ambiente
* Documentação do projeto

---
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
POSTGRES_DB=quickorder

## Autor

Luiz Henrique Bayma Martins

