const express = require("express"); // Requerindo modulo express
const cors = require("cors");
const router = require("./router"); // Importando arquivo

const app = express(); // Instanciando objeto

app.use(express.json()); // Permite a aplicação interpretar JSON'
app.use(cors());
app.use(router);

/*
    -> Metodos HTTP
    
    GET: Buscar uma informação no back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

    -> Tipos de parametros

    Query Params: Parametros nomeados enviados na rota apos "?" (Filtro, Paginacao)
    Route Params: Parametros utilizados para identificar recursos (id)
    Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos (Cadastrar usuario)
*/

app.listen(3333);
