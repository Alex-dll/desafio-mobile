# Be Mobile - Desafio Mobile
O desafio Mobile da Be consiste em montar uma tabela com as informações que virão por uma API simulada escrita em json-server. 
A tabela deve conter as seguintes colunas: imagem e nome.
Quando abrir mais informações mostrar: cargo, data de admissão e telefone, com todos os dados devidamente formatados e apresentados como está no figma. Além disso, deve ter a possibilidade de realizar uma pesquisa na tabela por um input. Obs: 
[acesse aqui o figma do projeto](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste---Be-mobile?node-id=0%3A1).

Condições
Deve-se utilizar React Native para construir o app, podendo usar expo. O arquivo app.json deve estar devidamente configurado (splash, icon e demais informações do app). O app deve estar configurado para rodar no ios e android (não tem problema caso não consiga testar em um dos dois, desde que ambos estejam configurados no arquivo app.json). O input de pesquisa deve filtrar por Cargo, Nome e Telefone. As datas e telefones devem ser formatadas no front e não na API. É permitido utilizar libs externas, mas recomenda-se que seja o mínimo possível para que consigamos avaliar melhor o seu teste.

<div align="center">


https://user-images.githubusercontent.com/54038618/195389649-afed2cf0-6835-495e-acdc-cb51425681c1.mp4


</div>

---

## Pré-requisitos 
Caso não tenha o seu ambiente de desenvolvimento em react native configurado verifique junto da [Documentação Oficial do React Native ](https://reactnative.dev/docs/environment-setup) e a [Documentação Oficial do Expo](https://docs.expo.dev/get-started/installation/) em como realizar a configuração do seu ambiente

Eu particulamente uso o [Guia De Ambiente React Native da Rocketseat](https://react-native.rocketseat.dev/)

---

## Rodando a aplicação

Clone esse repositorio

```bash
  git clone https://github.com/Alex-dll/desafio-mobile
```

Va para a pasta do projeto

```bash

  cd desafio-mobile
```

Instale as dependencias

```bash
  yarn | yarn install
```
Modifique o endereço de IP nos arquivos 

```plaintext
.
├─ src
│   ├─ services
│   │  ├─ api.ts   # Modifique na variavel BASE_URL o ip 192.168.10.2 para o seu endereço de IP atual
.
.
├─ package.json    # Modifique no script "server" o ip 192.168.10.2 para o seu endereço de IP atual
.
```

Abra um novo terminal no diretorio da aplicação e inicie o servidor em [json-server](https://github.com/typicode/json-server)

```bash
  yarn server
```

Inicie a Aplicação

```bash
 npx expo start
```

---

## Ferramentas utilizadas 🧰

- [x] typescript
- [x] react-native
- [x] react-native-reanimated
- [x] styled-components
- [x] expo
- [x] date-fns
- [x] json-server
- [x] axios
- [x] eslint
- [x] prettier
---
