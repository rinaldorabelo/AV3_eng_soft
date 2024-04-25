# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## USANDO O REPOSITÓRIO:

### PASSO 1:

ao clonar o repositório, você deve abrir o terminal de sua IDE para executar os comandos. para isso digite

`cd .\frontEnd\`

### PASSO 2:

dentro da pasta correta você deve instalar as bibliotecas necessárias para rodar o programa. para isso digite

`npm install`

### PASSO 3:

com o processo feito, você pode utilizar os comandos a seguir para utilizar o repositório

`npm run dev`: rodar a aplicação

`npm run build`

`npm test`

`npm coverage`

`npm lint`

`npm preview`

`npm commit`: fazer commit automatizado com commitzen

## USANDO COMMITIZEN

### USAR O COMMITIZEN REQUER USAR O TERMINAL, DEIXEM DE PREGUIÇA

### PASSO 1:

adicione todas as suas alterações no commit. use o comando

`git add .`

### PASSO 2:

com as alterações dentro do commit, use o código para iniciar o processo

`npm run commit`

### PASSO 3:

a ferramenta vai começar a rodar no seu terminal, com etapas de cada item do commit para ser preenchido. a seguir as etapas (em ordem)

1. tipo de commit (obrigatório)
2. título do commit (obrigatório)
3. descrição do commit (opcional)
4. se existe breaking change (opcional)
5. issues relacionadas a esse commit (opcional)

### PASSO 4: 

com tudo preenchido, a ferramenta faz o comando `git commit` sozinha e resta fazer um comando para enviar sua alteração para o repositório online

`git push`

pronto, seu commit foi feito automaticamente utilizando o commitizen
