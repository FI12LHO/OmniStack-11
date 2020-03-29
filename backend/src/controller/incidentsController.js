const connection = require("../database/connection");

module.exports = {
    async create(request, response){
        const { title, description, value } = request.body;
        const ongId = request.headers.authorization;

        await connection("incidents").insert({title, description, value, ongId});

        return response.json({
            "Title": title,
            "Description": description,
            "Value": value,
            "ID ong": ongId
        });
    },

    async index(request, response){
        const { page = 1 } = request.query;
        const [ count ] = await connection("incidents").count();

        response.header("X-Total-Count", count["count(*)"]);

        const incidents = await connection("incidents")
        .join("ongs", "ongs.id", "=", "incidents.ongId") // Inclui dados da tabela ongs onde o campo ong id seja igual o campo ongId da tabela incidents
        .limit(5)
        .offset((page - 1) * 5)
        .select(["incidents.*", "ongs.name", "ongs.email", "ongs.whatsapp", "ongs.city", "ongs.uf"]);

        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params; // O parametro vem como um objeto
        const idOng = request.headers.authorization;

        const incidents = await connection("incidents").where("id", id).select("*").first();

        if(incidents.ongId != idOng){
            return response.status(401).json({error: "Operation not permitted."});
        }

        await connection("incidents").where("id", id).delete();

        return response.status(204).send();
    }
};