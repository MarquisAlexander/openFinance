<h1 align="center"></h1>

<h2 align="center">
  🚀 Open Finance
</h2>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-informações">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-download-do-app">Download do app</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodar-o-app-local">Rodar o app local</a>
</p>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://facebook.github.io/react-native/)
- [Async Storage](https://github.com/react-native-async-storage/async-storage)
- [Jest](https://jestjs.io/pt-BR/)

Extras:

- Main Libs
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [React Navigation](https://reactnavigation.org/)
  - [React navite Vector icons](https://github.com/oblador/react-native-vector-icons)

## 💻 Projeto

- Aplicativo React Native para gerenciamento de clientes, usando Context API, AsyncStorage para persistência local e testes unitários com Jest e Testing Library.

## 🤔 Informações

- Pré-requisitos
  - Node.js (versão recomendada: >=16)
  - npm
  - Android Studio / Xcode configurados para emulação (ou dispositivo físico)
  - React Native CLI instalado globalmente (npm install -g react-native-cli)
  - Dependências do projeto instaladas

## 📲 Download do app

- **obs** Não foi possível disponibilizar o app nas lojas(google play/app store) por alguns motivos, minha conta para acessar o google play console está desativada, e não tenho fácil acesso ao mac para gerar um build do app para o ios.
- Você pode baixar o apk [clicando aqui](https://1drv.ms/u/c/1823f16959aaf7cf/ETdaCHv7spRJpdnHbXXKXRwBECieXTYO_DNJWuZ_-lQ-3g?e=9oNUFR).

## 🖼 Layout

|                                                                                                                                                                                                    print                                                                                                                                                                                                     |                                                                                                                                                                                                    print                                                                                                                                                                                                    |                                                                                                                                                                                                           print                                                                                                                                                                                                           |                                                                                                                                                                                                           print                                                                                                                                                                                                           |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|![Screenshot_1748839369](https://github.com/user-attachments/assets/869c5522-2b94-4bbd-8847-fb21d8b8bce3) | ![Screenshot_1748839299](https://github.com/user-attachments/assets/e887abac-f965-4079-950a-1bbd422806fd) | ![Screenshot_1748839179](https://github.com/user-attachments/assets/830074a8-bda9-419a-bdcb-a0ce984d836a) |![Screenshot_1748839382](https://github.com/user-attachments/assets/05d1e834-8201-47a9-801d-ce5f110872e2) |

## 🧪 Rodar o app local

- ## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/MarquisAlexander/openFinance.git
cd openfinance
```

2. Instale as dependências:

```bash
yarn install
```

3. Instale pods (iOS):

```bash
cd ios && pod install && cd ..
```

4. Executando o app

- android

```bash
npx react-native run-android
```

- ios

```bash
npx react-native run-ios
```

## Para rodar os testes unitários:

```bash
npm test
```

- Observações para testes
  - Ícones e arquivos de fontes estão mockados para evitar erros no Jest
  - Testes foram feitos com @testing-library/react-native para testar renderização e interação
  - Para evitar erros com módulos nativos (como react-native-gesture-handler), rode testes em ambiente configurado para React Native

README feito com ❤️ by **MarquisAlexander**
