# Desafio técnico web (Front-end)

## O Projeto
PWA que permite ao usuário pesquisar filmes por nome, ano e gênero e ver detalhes como idioma, duração, orçamento e sinopse.

## Desenvolvimento
O projeto foi desenvolvido com a biblioteca ReactJS, tendo como linguagem de desenvolvimento o TypeScript e utilizando a biblioteca de gerenciamento de estados Mobx.

Os estilos foram aplicados no projeto através da plataforma SCSS, sem auxilio de qualquer framework CSS.

Testes unitários implementados através do framework Jest.

## Execução do projeto
Para executar o projeto é necessário seguir os seguintes passos:

Instalar as dependências:

`npm install`

Executar o projeto localmente (localhost:8080 abrirá automáticamente): 

`npm start`

Para buildar e executar o projeto como um PWA:

`npm run start-sw`

Após esse comando ser executado é necessário que o usuário acesse uma das rotas disponibilizadas no terminal. Caso nenhuma sujestão de rota apareça, é necessário acessar pelo IP do usuário seguido da porta 8080.

Ao acessar a rota da aplicação após a execução do comando acima, é possível navegar na aplicação de modo offline, além de, no smartphone (só foram feitos testes em Android), salvar o atalho para a aplicação na tela inicial, basta acessar as configurações (três pontos na barra superior do navegador Chrome Mobile) e selecionar a opção "Adicionar à tela inicial".

Executar os testes: 

`npm run test`

## Docker
Para executar a aplicação através do Docker
(Testado em ambiente Windows):

`docker build -t sample:dev .`

Em seguida, execute o seguinte comando substituindo "caminho" pelo path que está localizado o projeto (ex: \Usuario\bruno.almeida\challenge_movies):

`docker run -v %cd%:caminho -v /app/node_modules -p 3001:3000 --rm sample:dev`

Após a execução, acessar http://localhost:3001/

