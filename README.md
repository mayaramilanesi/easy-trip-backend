# Easy Trip Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descrição

Este é um projeto backend para um sistema de gerenciamento de viagens, construído com o framework [NestJS](https://nestjs.com). Ele utiliza TypeORM para interagir com um banco de dados MySQL.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MySQL](https://www.mysql.com/)

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/easy-trip-backend.git
   cd easy-trip-backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USER=seu_usuario
   MYSQL_PASSWORD=sua_senha
   MYSQL_DATABASE=nome_do_banco
   ```

   Certifique-se de substituir os valores acima pelos dados do seu banco de dados MySQL.

## Compilar e Executar o Projeto

Para compilar e executar o projeto, utilize os seguintes comandos:

- **Modo de desenvolvimento:**

   ```bash
   npm run start:dev
   ```

- **Modo de produção:**

   ```bash
   npm run start:prod
   ```

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
  - `app.module.ts`: Módulo principal da aplicação.
  - `app.controller.ts`: Controlador principal.
  - `app.service.ts`: Serviço principal.
  - `trips/`: Módulo relacionado a viagens.
    - `trips.controller.ts`: Controlador para gerenciar viagens.
    - `trips.service.ts`: Serviço para lógica de negócios de viagens.
    - `trip.entity.ts`: Entidade que representa uma viagem.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com o autor [Mayara Milanesi].
