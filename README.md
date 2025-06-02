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
| ![login](https://github-production-user-asset-6210df.s3.amazonaws.com/51330232/449961520-39d4a1ee-4dba-4dec-89f1-7e70ccd33642.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250602T044411Z&X-Amz-Expires=300&X-Amz-Signature=0ad385dedc9bb9db699e98ddb53c44ec92f63b3ae430a374e5f0fe3e9b1c34f7&X-Amz-SignedHeaders=host) | ![menu](https://github-production-user-asset-6210df.s3.amazonaws.com/51330232/449960561-c660281f-abaa-4d2c-985c-eb33010f63d4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250602T044048Z&X-Amz-Expires=300&X-Amz-Signature=adbe77816735a3a1a6b580e2f5f1f318914497f5776bff7386da5c6c5df81348&X-Amz-SignedHeaders=host) | ![selected customers](https://github-production-user-asset-6210df.s3.amazonaws.com/51330232/449961245-47f67107-e7b3-43cf-bc6e-27f49329cce6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250602T044202Z&X-Amz-Expires=300&X-Amz-Signature=0996236fdee367cacbd3c9b54b09ac0a87735afd2b491f0d80692fb9d0afadba&X-Amz-SignedHeaders=host) | ![bottom sheet modal](https://github-production-user-asset-6210df.s3.amazonaws.com/51330232/449961519-2484c3ca-4213-454b-baa6-ec119488920e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250602T044327Z&X-Amz-Expires=300&X-Amz-Signature=c9dafcd4f8abaa77628285b6eb2942849ab53756e07eb2f6bc97b0e5568b0a12&X-Amz-SignedHeaders=host) |

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
