const connection = require('../database/connection');
module.exports ={
    async listarEspecifico(request, response){
        const ong_id = request.headers.authorization;
        const lista = await connection('incidents').where('ong_id', ong_id).select('*');
        return response.json(lista);
    }
}