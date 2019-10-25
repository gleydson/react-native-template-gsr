<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">React Native Template GSR</h1>
  <!-- PROJECT SHIELDS -->

  [![npm](https://img.shields.io/npm/v/react-native-template-gsr.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-gsr)
  [![npm](https://img.shields.io/npm/dt/react-native-template-gsr.svg)](https://www.npmjs.com/package/react-native-template-gsr)
  [![GitHub issues](https://img.shields.io/github/issues-raw/gleydson/react-native-template-gsr.svg)](https://github.com/gleydson/react-native-template-gsr/issues)
  [![GitHub last commit](https://img.shields.io/github/last-commit/gleydson/react-native-template-gsr.svg)](https://github.com/gleydson/react-native-template-gsr/commits/master)
  [![NPM](https://img.shields.io/npm/l/react-native-template-gsr.svg)](https://choosealicense.com/licenses/mit)
</div>


<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
react-native-template-gsr
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── lotties/
│   ├── components/
│   ├── config/
│   │   ├── persistNavigation
│   │   │   └── index.js
│   │   ├── ReactotronConfig
│   │   │   └── index.js
│   │   └── Transitions
│   │       └── left.js
│   ├── datas/
│   ├── screens/
│   │   ├── Login/
│   │   │   ├── index.js
│   │   │   └── styled.js
│   │   └── index.js
│   ├── services/
│   │   ├── api/
│   │   │   └── base.js
│   │   └── i18n/
│   │       ├── locales/
│   │       │   └── en-US.js
│   │       │   └── pt-BR.js
│   │       └── index.js
│   ├── store/
│   │   ├── ducks/
│   │   │   ├── index.js
│   │   │   └── Login.js
│   │   ├── sagas/
│   │   │   └── index.js
│   │   └── index.js
│   ├── styles/
│   │   ├── colors.js
│   │   ├── fonts.js
│   │   ├── index.js
│   │   └── metrics.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```shell
npx react-native init AwesomeExample --template gsr
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

3. Copie o código _json_ contido no arquivo `scripts.json` (Você poderá deleter depois) e substitua os scripts existentes no `package.json`.

4. Remova o arquivo `eslint.js` e a dependência `@react-native-community/eslint-config` contida no `package.json`.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto. Após isso você poderá rodar o script `yarn android` ou `yarn ios`.

Caso ocorra algum problema com o build do ios você poderá executar o script `yarn clean:modules` e depois buildar seu projeto novamente.

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **assets** - Diretório contendo arquivos de imagem, animações em `lottie`, fonts e qualquer outro arquivo adicional como vídeo ou sons que você deseja adicionar em sua aplicação.

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **PersistNavigation** - Diretório contendo a configuração da persistencia das informações da tela que serão usados somente em modo de desenvolvimento para evitar o _reset_ total das telas ao realizar _reload_ em sua aplicação;

    - **ReactotronConfig** - Diretório contendo a configuração do Reactotron, com os Plugins `reactotron-redux` e `reactotron-redux-saga`, para ser usado na aplicação;

    - **Transitions** - Diretório contendo animações de transição entre telas, atualmente existe apenas uma animação mais você poderá criar e adicionar mais animações conforme sua necessidade.

  - **datas** - Diretório que poderá conter arquivos _.json_ que poderão ser utilizados em sua aplicação caso seja necessário;

  - **screens** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Login** - Diretório exemplo de uma página cujo nome é **Login**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, com os componentes visuais a serem renderizados e também o código para conectar o componente ao Redux para acessar o State global e as Actions criadas nos Ducks;

      - **styled.js** - Arquivo contendo toda a estilização da tela feita com `styled-components`;
  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api** - Diretório com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

    - **i18n** - Diretório contendo as configurações para tradução nas línguas que forem definidas;

        - **locales** - Diretório contendo _resources_ para traduções.

  - **store** - Diretório onde será criada toda a estrutura do Redux para a aplicação, como os **Ducks** (Reducers + Action Types + Action Creators), os **Sagas** e um arquivo para centralizar toda essa configuração e disponibilizar para o restante da aplicação;

    - **ducks** - Diretório destinado a centralizar os **Ducks** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.js** - Arquivo responsável por importar cada **Duck** criado e combiná-los em um só para serem usados no Redux através da função `combineReducers()`;

      - **Login.js** - Arquivo contendo um exemplo de um `duck` .
    - **sagas** - Diretório destinado a centralizar os **Sagas** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.js** - Arquivo responsável por relacionar as **Actions** disparadas pela aplicação às funções do **Saga**, que são Funções Generator, nele é definido os **Action Types** a serem "escutados" e qual função executar quando um Action Creator for executado;

    - **index.js** - Arquivo responsável por executar a configuração para o funcinamento do Redux + Redux Saga, dentre suas funções estão: criar um **Middleware** para monitorar as Actions disparadas na aplicação, aplicar o middleware criado juntamente com um Enhancer que monitora o fluxo de uma função do **Saga**, criar o store global da aplicação combinando os reducers existentes e exportar o state criado, além de possuir a configuração do `redux-persist` e `reactotron`;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele é inserido o HOC Provider do `react-redux` que é o responsável por disponilizar o state global para a aplicação, e dentro do Provider são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **.prettierrc.js** - Arquivo de configuração com regras do prettier para padronização do código;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `@babel/runtime`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do JavaScript no Editor, ele é o responsável por ativar o Auto Complete de códigos JavaScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

- **react-native.config.js** - Arquivo contendo algumas configurações do projeto, como a especificação do diretório contendo _fonts_ que poderão ser adicionadas no projeto.

- **scripts.json** - Arquivo temporário que conterá scripts a serem substituidos ao final da intalação do seu projeto.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureMassa`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature Massa!`)
5. Faça o Push da Branch (`git push origin feature/FeatureMassa`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Gleydson Rodrigues - [Github](https://github.com/gleydson) - **gleydsonsr@gmail.com**
