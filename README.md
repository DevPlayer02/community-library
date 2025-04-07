# Community Library

Uma aplicação para gerenciamento de biblioteca comunitária, construída utilizando Node.js e Express. O projeto oferece funcionalidades de gerenciamento de usuários, livros e empréstimos, com lembretes por e-mail para datas de devolução próximas, utilizando agendamento com **node-cron** e envio de e-mails com **nodemailer**.

## Tabela de Conteúdos

- [Recursos](#recursos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Considerações Finais](#considerações-finais)

---

## Recursos

- **Gerenciamento de Usuários:** Cadastro, autenticação e controle de acesso.
- **Gerenciamento de Livros:** Cadastro, listagem e organização dos livros da biblioteca.
- **Empréstimos:** Sistema de empréstimos para os livros da biblioteca.
- **Agendamento de Tarefas:** Verificação diária (com **node-cron**) dos empréstimos que estão próximos da data de devolução e envio de lembretes via e-mail.
- **Validação de Dados:** Utilização do **Zod** para garantir a integridade e correção dos dados.
- **Banco de Dados:** Utilização do **SQLite** para persistência dos dados.

---

## Estrutura do Projeto

    community_library/ 
    ├── node_modules/
    ├── config/ 
    │   └── database.js 
    ├── controller/ 
    │ ├── book.controllers.js 
    │ ├── loan.controllers.js 
    │ └── user.controllers.js 
    ├── middlewares/ 
    │ ├── auth.middleware.js 
    │ └── validation.middleware.js 
    ├── repositories/ 
    │ ├── book.repositories.js 
    │ ├── loan.repositories.js 
    │ └── user.repositories.js 
    ├── routes/ 
    │ ├── book.routes.js 
    │ ├── index.js 
    │ ├── loan.routes.js 
    │ └── user.routes.js 
    ├── schema/ 
    │ ├── book.schema.js 
    │ ├── loan.schema.js 
    │ └── user.schema.js 
    ├── service/ 
    │ ├── auth.service.js 
    │ ├── cron.service.js 
    │ ├── email.service.js 
    │ ├── loan.service.js 
    │ └── user.services.js 
    ├── .env 
    ├── .env.example 
    ├── library_db.sqlite 
    ├── package-lock.json 
    ├── package.json 
    └── README.md

- **config**: Armazena configurações gerais do projeto, como conexão ao banco de dados.  
- **controller**: Controladores responsáveis pela lógica das requisições e respostas para cada recurso (usuários, livros, empréstimos, etc.).  
- **middlewares**: Funções intermediárias (e.g. autenticação, validações) aplicadas antes de chegar nos controladores.  
- **repositories**: Camada de acesso aos dados, responsável por efetuar as operações no banco (CRUD).  
- **routes**: Define as rotas da API, mapeando cada endpoint para seu respectivo controlador.  
- **schema**: Utiliza o Zod para definir e validar a estrutura de dados de cada entidade (livro, usuário, empréstimo).  
- **service**: Serviços de negócio (envio de e-mails, agendamento de tarefas, lógica de empréstimo, etc.).

---

## Tecnologias Utilizadas

- **Node.js / Express**: Ambiente de execução e framework para construção de APIs.
- **SQLite3**: Banco de dados relacional leve para armazenamento dos dados.
- **nodemailer**: Módulo para envio de e-mails.
- **node-cron**: Agendamento de tarefas.
- **dotenv**: Carregamento de variáveis de ambiente.
- **bcrypt**: Criptografia de senhas.
- **jsonwebtoken**: Geração e validação de tokens para autenticação.
- **moment**: Manipulação e formatação de datas.
- **zod**: Validação e modelagem de dados.
- **nodemon**: Ferramenta para desenvolvimento (reinício automático em mudanças de código).

---

## Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org) instalado na máquina.
- [NPM](https://www.npmjs.com) (gerenciador de pacotes do Node.js).

### Passos para Configuração

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd community_library

2. **Instale as dependências:**

    ```bash
    npm install

3. **Configure as variáveis de ambiente:**

    Renomeie o arquivo .env.example para .env.

    Defina as variáveis necessárias, como:

        GMAIL_USER

        GMAIL_PASS para o envio de e-mails e outros dados sensíveis.

4. **Inicialize o banco de dados:**

    O banco de dados SQLite é armazenado no arquivo library_db.sqlite.

    Certifique-se de que a estrutura das tabelas para users, books e loans está criada e funcional.
