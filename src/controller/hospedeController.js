import salvarHospedeService from "../service/hospede/salvarHospedeService.js";
import consultarHospedeService from "../service/hospede/consultarHospedeService.js";
import consultarHospedePorIdService from "../service/hospede/consultarHospedePorIdService.js";
import deletarHospedeService from "../service/hospede/deletarHospedeService.js";
import { consultarHospedePorIdQuartoService } from "../service/hospede/consultarHospedePorIdQuartoService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/reserva', async (req, resp) => {
    try {
        let hospedeObj = req.body;
        let id = await salvarHospedeService(hospedeObj);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }

})

endpoints.get('/reserva', async (req, resp) => {
    try {
        // leitura
        let nome = req.query.nome;

        // processamento (service)
        let dados = await consultarHospedeService(nome);

        // saida
        resp.send(dados);
    }
    catch (error) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})


endpoints.get('/reserva/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        
        let hospede = await consultarHospedePorIdService(id);

        resp.send(hospede);
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err)); 
    }
})

endpoints.get('/reserva/quarto/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let hospede = await consultarHospedePorIdQuartoService(id);

        resp.send(hospede);
    } catch (err) {
        console.error(err); 
        resp.status(400).send({ erro: 'Erro ao buscar as reservas do quarto.' });
    }
});


endpoints.delete('/reserva/:id', async (req, resp) => {
    try {
        // entrada
        let id = req.params.id;

        // processamentos
        await deletarHospedeService(id);

        // saida
        resp.status(204).send();
    }
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;