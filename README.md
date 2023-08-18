# Pokedéx 

Seja bem-vindo(a) à Pokedéx, a sua central para explorar o mundo dos Pokémon! 🌟

Neste repositório, você encontrará detalhes sobre a criação desta aplicação incrível que traz a magia dos Pokémon para a sua tela. A Pokedéx é um projeto que surgiu como parte do curso DevQuest, desenhado para avaliar habilidades adquiridas durante os estudos e testar competências que vão desde a usabilidade e criatividade até a tomada de decisões técnicas.

## Índice 🗂️

- Visão Geral
  - Screenshot
  - Link Deploy
- Sobre
  - Propósito
  - Funcionalidade
- Meu processo
  - Ferramentas
  - Decisões
- Como rodar o código 
  - Pré requisitos
  - Instalação
  - Execução
- Autor

## Visão Geral 👀

### Screenshot

#### Desktop

![](./design/Pokedex-Desktop.gif)

#### Mobile

![](./design/Pokedex-Mobile.gif)

### Link Deploy

## Sobre 📖

## Propósito

Este desafio faz parte do curso DevQuest e tem como propósito avaliar as habilidades adquiridas durante os estudos. Os participantes recebem requisitos e demandas para implementar na aplicação. Além de testar conhecimentos técnicos, a aplicação também avalia usabilidade, criatividade, boas práticas de código, organização e capacidade de tomar decisões técnicas. Em suma, é uma oportunidade abrangente para demonstrar competências diversas no desenvolvimento de soluções.

## Funcionalidade

A aplicação consiste em uma Página Inicial que utiliza uma API para exibir uma lista inicial de 10 Pokémon. Um botão está disponível para adicionar mais 10 Pokémon à lista existente a cada clique.

Cada Pokémon na lista é interativo, permitindo que os usuários cliquem neles para acessar uma nova página com detalhes abrangentes, incluindo status, habilidades e movimentos do Pokémon selecionado.

Além disso, a aplicação possui uma funcionalidade de "toggler" que alterna o tema da página. Isso se aplica tanto à página principal quanto à página de detalhes dos Pokémon. O tema escolhido é armazenado, persistindo mesmo quando a página é fechada e reaberta posteriormente.

## Meu processo 🔨

## Ferramentas

* Figma: O design da aplicação foi criado utilizando a ferramenta Figma, que possibilitou a elaboração visual e organização estrutural do projeto de forma eficiente e colaborativa.

* React.js: A aplicação foi construída usando o React.js, uma biblioteca JavaScript de código aberto amplamente adotada para criar interfaces de usuário interativas e reativas de maneira eficiente.

* Context API: A Context API do React foi empregada para gerenciar a troca de temas na aplicação. Essa funcionalidade permite alternar a aparência da página de maneira suave e eficiente, oferecendo uma experiência de usuário mais personalizada.

* Styled-components: Utilizado para estilização de componentes, essa ferramenta me possibilita usar estilização dentro de um arquivo .js podendo ser criada junto ao componente além de facilitar a interação com contextos, variáveis e trabalhar com condicionais.

* React-router: Utilizado para a criação de rotas, podendo assim navegar entre as páginas sem a necessidade de um novo carregamento assim tornando a aplicação mais fluida. 

Todas essas ferramentas foram requeridas para realização desse desafio(exercício)

Além dessas também foram usadas:

* react-google-font-loader: 
Para simplificar a inclusão de fontes do Google Fonts, o projeto utiliza a biblioteca react-google-font-loader. Isso permite a incorporação fácil e gerenciamento de fontes personalizadas em toda a aplicação, contribuindo para a estilização visual consistente.

* LocalStorage: Para preservar o tema selecionado entre sessões, a aplicação utiliza o LocalStorage. Isso permite salvar e recuperar informações localmente no navegador do usuário, garantindo que o último tema escolhido seja mantido, mesmo após fechar e reabrir a página. Isso contribui para uma experiência mais consistente e personalizada.

## Decisões

Uma escolha importante que fiz foi dedicar tempo para criar o design no Figma. Isso me permitiu ter uma ideia clara de como o projeto iria se parecer antes de começar a escrever código. Investi bastante tempo na parte visual antes de me aprofundar na programação.

Outra decisão que tomou bastante sentido foi começar pela parte visual antes de adicionar todas as funcionalidades e ações da página. Mesmo que eu tenha passado um tempo considerável entendendo como as partes técnicas funcionam, como os pontos de conexão e os elementos do React, essa abordagem realmente me ajudou a aprender mais e a progredir ao longo do processo.

## Como rodar o código 💻

### pré requisitos:
Antes de começar, verifique se você tem um gerenciador de pacotes instalado em sua máquina. Se não tiver, você pode instalar o NPM digitando o seguinte comando em seu terminal:

````
 npm install npm@latest -g

````
### Instalação:

1 - Baixe o arquivo ZIP do projeto e extraia-o em uma pasta de sua escolha.

2 - Navegue até a pasta raiz do projeto usando o terminal. Você pode fazer isso digitando o seguinte comando (substitua "diretório da pasta" pelo caminho real):

````
cd caminho/para/pasta/do/projeto
````

3 - No terminal, execute o seguinte comando para instalar as dependências necessárias:
````
npm install
````

### Execução:
4 - Depois de concluir a instalação das dependências, inicie a aplicação usando o comando:
````
npm start
````

Agora você poderá ver o resultado em um ambiente de desenvolvimento através do seu navegador.

#### Também é possível usar o Git Clone:

1 - Em uma pasta de sua escolha, abra o terminal e digite o seguinte comando:
````
git clone https://github.com/Robson-Jorge/projeto-pokedex.git
````
Isso clonará o repositório para o diretório atual.

## Autor

Linkedin - [Robson Souza Jorge](https://www.linkedin.com/in/robson-jorge-62a12a26a/)
