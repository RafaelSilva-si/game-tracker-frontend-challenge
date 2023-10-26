# Game Tracker Frontend Challenge

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> Status: Finished :white_check_mark:

<img width="944" alt="image" src="https://github.com/RafaelSilva-si/game-tracker-frontend-challenge/assets/77937182/518100eb-d9d9-4122-a297-108317d86cb2">


## O desafio

[LIVE - acesse aqui](https://game-tracker-frontend-challenge-jyoimja99-rafaelsilva-si.vercel.app/)
<br>
O desafio consistiu em criar um projeto Vue que consome dados de [Cheap Shark API](https://apidocs.cheapshark.com/) e os exibe de forma organizada na interface do usuário de acordo com o [layout do figma](https://www.figma.com/file/1OChnhd0T3HQdGP1TWHNbX/Game-Tracker-Prot%C3%B3tipo?node-id=0-1&t=Ogvtm7mrA87GFhry-0). O projeto incorpora recursos como filtros para refinar os dados apresentados. Além disso, foram implementados tratamentos para lidar com possíveis erros provenientes da API e para garantir uma experiência de usuário sem interrupções. O código também inclui validações para lidar com dados que possam estar ausentes ou ser nulos, garantindo uma apresentação limpa e coerente na interface do aplicativo.

## Requisitos funcionais

* [x] O usuário deve ter acesso a uma listagem das melhores ofertas de jogos.

* [x] O usuário deve conseguir paginar a lista para encontrar novas ofertas.

* [x] O usuário deve ter acesso a uma outra página com detalhes sobre a oferta, ao clicar em um item na listagem

## Requisitos não funcionais

* [x] A aplicação deve ser desenvolvida utilizando Vue.js.

* [x] O layout e design da aplicação devem ser estritamente baseados no Figma.

* [x] A aplicação deve ser responsiva, garantindo uma experiência de usuário consistente em diferentes dispositivos.

## Extras

* [x] O usuário deve conseguir filtrar as ofertas ordenadas, com a possibilidade de trocar a forma de ordenar.
* [x] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
* [x] O usuário deve conseguir voltar para a página de listagem de ofertas com os filtros ainda ativos
* [x] O usuário deve ter feedback caso a página não exista, ou retorne erro.

## Decisões Tecnicas
   * Optei por implementar os filtros na URL em vez de manter o estado interno da aplicação. Dessa forma, os usuários terão a vantagem de ter um histórico de navegação mais claro e direto. Cada filtro aplicado será refletido na própria URL, o que facilita a compreensão e a navegação entre diferentes visualizações de ofertas. Além disso, essa abordagem torna mais fácil compartilhar links específicos ou salvar determinadas configurações para referência futura.
     
### Tecnologias
* Vuex: Escolhi Vuex para gerenciar o estado da aplicação de forma centralizada, facilitando o compartilhamento de dados entre componentes e garantindo uma gestão eficiente do estado da aplicação.
  
* Vue Router: Optei pelo Vue Router para facilitar a navegação entre diferentes páginas e componentes da aplicação, proporcionando uma experiência de usuário mais fluida e organizada.
  
* Typescript: Escolhi Typescript para adicionar tipagem estática ao Vue, tornando o código mais robusto, legível e reduzindo possíveis erros durante o desenvolvimento.
  
* Axios: Optei pelo Axios como cliente HTTP por ser uma biblioteca simples e eficiente, facilitando as requisições e o tratamento de dados provenientes da API.
  
## Instalação com Docker
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Em um terminal rode o comando `docker compose -f docker-compose.yml up`
4. Acesse http://localhost:8080/.

## Instalação Normal

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências com o comando: `npm install`.
4. Inicie o aplicativo com o comando: `npm dev`.
5. Acesse http://localhost:5173

   ![1627616883421](https://user-images.githubusercontent.com/77937182/157932279-c8aad7d0-0778-43c0-be52-b7e175d56835.gif)
