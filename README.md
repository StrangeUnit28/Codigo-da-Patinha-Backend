# Código da Patinha - Backend

## Sobre

Repositório destinado a armazenar e documentar o Back-end da solução desenvolvida para a Problemática apresentada no BootCamp da Atlântico 2024.3

## Execução 

### Pré-requisitos
Node.js e npm - Certifique-se de ter o Node.js e npm instalados. Você pode verificar as versões instaladas executando:

```bash
node -v
npm -v
```

PostgreSQL - O projeto usa PostgreSQL como banco de dados. Certifique-se de que ele está instalado e rodando na sua máquina.

### Passos para Configurar o Projeto

1. Clone o Repositório
Primeiro, clone o repositório na sua máquina local:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

2. Instale as Dependências
Instale as dependências do projeto usando npm:

```bash
npm install
```
3. Configure as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como o URL de conexão com o banco de dados e a porta do servidor. O conteúdo do arquivo .env deve ser semelhante ao exemplo abaixo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
PORT=3000
```

DATABASE_URL: URL de conexão com o PostgreSQL.
PORT: Porta onde o servidor será executado (opcional, padrão é 3000).

4. Configure o Banco de Dados

   4.1. Gere as Migrações com Prisma
O projeto utiliza o Prisma como ORM para gerenciar o banco de dados. Para criar as tabelas no banco, execute:

```bash
npx prisma migrate dev --name init
```
Esse comando aplica as migrações e cria as tabelas necessárias.

4.2. Gere o Cliente Prisma
Para que o Prisma possa ser usado no código, gere o cliente Prisma:

```bash
npx prisma generate
```

5. Inicie o Servidor
Agora, o servidor está pronto para ser iniciado. Execute o comando:

```bash
node serve.js
```

O servidor será iniciado e estará disponível no endereço http://localhost:3000/ (ou na porta especificada no .env).

### Endpoints
A API principal está disponível em http://localhost:3000/api.

### Estrutura do Projeto
schema.prisma: Define o esquema do banco de dados Prisma.
serve.js: Arquivo principal do servidor Express.
routes/: Define as rotas da API.
models/: Contém os modelos do Prisma para as entidades Pets, Adotantes, e Adocoes.
controllers/: Contém a lógica de negócio para cada entidade.

## Equipe

| Ana Beatriz de Sousa Mertins | Gabriel Porto Osorio | Gian Luccas Pires Medina | Janielson Anjos da Silva | Layane Heloisa de S. B. Conceição | [Rafael Bosi](https://github.com/StrangeUnit28) |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | 
| ![Ana's Photo](https://avatars.githubusercontent.com/u/118942685?v=4) |  | ![Gian's Photo](https://avatars.githubusercontent.com/u/161531488?v=4) | ![Janielson's Photo](https://avatars.githubusercontent.com/u/72242469?v=4) | ![Layane's Photo](https://avatars.githubusercontent.com/u/143617216?v=4) | ![Rafael's Photo](https://avatars.githubusercontent.com/u/97995709?v=4) | 

## Histórico de Versão

|  Versão  | Data da alteração | Alteração | Responsável | Revisor | Data de revisão |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `1.0` | 10/11/24 | Criação do Backend | Toda a equipe | Rafael Bosi | 10/11/24 | 
