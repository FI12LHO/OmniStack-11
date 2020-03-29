const crypto = require("crypto"); // Requerindo modluo crypto (Modulo para criptografia)
const connection = require("../database/connection");

module.exports = {
    async create(request, response){
        const id = crypto.randomBytes(4).toString("HEX");

        const {name, email, whatsapp, city, uf} = request.body;

        // Enviando dados
        await connection("ongs").insert({id, name, email, whatsapp, city, uf});

        // O return so sera executado apos o comando insert terminar
        return response.json({"id": id});

    },

    async index(request, response){
        const ongs = await connection("ongs").select("*");
        return response.json(ongs);

    }
};