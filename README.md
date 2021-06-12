# Sobre o Projeto


O FavMovies é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar.

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador.

## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|
 
 ## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PATCH` | Atualiza dados específicos de um registro. |
| `DELETE` | Remove um registro do sistema. |

 
 ### Requisitos 
- [x]  **"/titles/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [x]  **"/titles/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [x]  **"/titles/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [x]  **"/studios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titles**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/studios**" Deverá criar um estudio 
- [x]  "**/titles**"  Deverá criar um título 

- [x]  "/titles/:id" Deverá deletar titulo por id específico e retorna mensagem amigável
- [x]  "/studios/:id" Deverá deletar estudio por id específico e retorna mensagem amigável

- [x]  "/titles/:id" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [x]  "/studios/:id" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

### Regras de negócio

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema.

<br>

### Dados para Collection Studios

- id: autogerado e obrigatório
- name: texto e obrigatório
- createdAt: data gerada automaticamente e obrigatória

### API deve retornar seguinte JSON:

```jsx

{
    "_id": {
        "$oid": "60bd0e10aecbfd0d39c85286"
    },
    "createdAt": {
        "$date": "2021-06-06T18:03:49.571Z"
    },
    "name": "Marvel",
    "__v": 0
},
{
    "_id": {
        "$oid": "60bd21017fb0c8112714433a"
    },
    "createdAt": {
        "$date": "2021-06-06T19:21:21.877Z"
    },
    "name": "Ghibli",
    "__v": 0
},
{
    "_id": {
        "$oid": "60bd21177fb0c8112714433b"
    },
    "createdAt": {
        "$date": "2021-06-06T19:21:21.877Z"
    },
    "name": "Pixar",
    "__v": 0
}
```
<br>

### Dados para Collection Titles

- id: autogerado e obrigatório
- name: texto e obrigatório
- genre: texto e obrigatório
- description: texto e obrigatório
- createdAt: data gerada automaticamente e obrigatório
- studio: referência do estudio cadastrado previamente [obrigatório]

### API deve retornar seguinte JSON:

```jsx
{
    "_id": {
        "$oid": "60bd1f1667ae5f10815b4d7c"
    },
    "createdAt": {
        "$date": "2021-06-06T19:12:03.986Z"
    },
    "name": "A Viagem de Chihiro",
    "genre": "Fantasia",
    "description": "Chihiro e seus pais são obrigados a se mudarem para outra cidade. Durante a mudança seu pai, decide tomar um atalho para economizar tempo, porém, acabam se perdendo e chegando em um edifício com um estranho túnel no centro. Ainda que Chihiro se negue a entrar, seus pais insistem em seguir túnel adentro. Do outro lado, descobrem um povoado aparentemente abandonado; a família opta em explorar o lugar e acabam encontrando um restaurante o qual decidem parar para comer. Chihiro deixa-os para continuar investigando. Quando começa a anoitecer um misterioso jovem chamado Haku aparece e ordena que Chihiro saia do lugar antes que anoiteça completamente",
    "studio": {
        "$oid": "60bd0e10aecbfd0d39c85286"
    },
    "__v": 0
},
{
    "_id": {
        "$oid": "60bd233a8ca6581204d7fa97"
    },
    "createdAt": {
        "$date": "2021-06-06T19:31:44.969Z"
    },
    "name": "O castelo animado",
    "genre": "Fantasia",
    "description": "Uma bruxa lança uma terrível maldição sobre a jovem Sophie, transformando-a numa velha de 90 anos. Desesperada, ela embarca numa odisseia na qual acaba parando no castelo animado, onde reside um misterioso feiticeiro chamado Howl que poderá ajudá-la a reverter o feitiço.",
    "studio": {
        "$oid": "60bd21017fb0c8112714433a"
    },
    "__v": 0
}
```
