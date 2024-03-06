# DDL do banco de dados no PostgreesSQL

Esse é o SQL DDL de criação do banco de dados:

- **Clientes**: 
````sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    coordenada_x FLOAT NOT NULL,
    coordenada_y FLOAT NOT NULL
);

````

- Inserts base:

````sql
INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ('Cliente 1', 'cliente1@example.com', '123456789', 10, 20);
INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ('Cliente 2', 'cliente2@example.com', '987654321', 30, 40);
INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ('Cliente 3', 'cliente3@example.com', '567890123', 50, 60);
````

- **Usuários para login:**

````sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);
````

---
