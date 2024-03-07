# Server Facilita Jurídico

Este é o server backend construído em ***Node.js*** com ***Express.js*** para o 
gerenciamento de clientes da **Facilita Jurídico**.

---


## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

2. Clone este repositório em sua máquina local:

```
git clone https://github.com/JoaoIto/facilita-juridico_server.git
```

3. Navegue até o diretório do projeto:

```
cd facilita-juridico_server
```

4. Instale as dependências do projeto usando npm ou yarn:

```
npm install
```
ou

```
yarn install
```

## Configuração do Banco de Dados

1. Certifique-se de ter o PostgreSQL instalado em sua máquina. Você pode baixá-lo em [https://www.postgresql.org/](https://www.postgresql.org/).

2. Crie um banco de dados PostgreSQL para o projeto e configure as credenciais de acesso no arquivo `config/db.ts`.

3. Os scripts de DDL estão no **``./doc/bd/readme.md``**.


## Executando o Servidor

1. Após a instalação das dependências e a configuração do banco de dados, você pode iniciar o servidor usando o seguinte comando:

```
npm run start
```
ou

```
yarn start
```

Isso iniciará o servidor backend. Você verá uma mensagem indicando que o servidor está rodando em `http://localhost:8080`.

## Uso do Projeto

1. O servidor oferece as seguintes funcionalidades:

   - Listar os clientes: Envie uma solicitação **GET** para `http://localhost:8080/clientes` para listar todos os clientes cadastrados. 
   
   - Você também pode filtrar os clientes enviando parâmetros de consulta **GET** (por exemplo, `http://localhost:8080/clientes/filtro?nome=Joao`).
   
   - Cadastrar um novo cliente: Envie uma solicitação **POST** para `http://localhost:8080/clientes/cadastrar` com os dados do cliente no corpo da requisição no formato JSON.

   - Cálculo das rotas dos clientes **GET**: ``http:localhost:8080/clientes/rota``
---
