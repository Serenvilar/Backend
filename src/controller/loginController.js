import { verificarLogin } from "../repository/loginRepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get('/login', async (req, resp) => {
    try {
        const email = req.query.email;
        const senha = req.query.senha;

        console.log('Email recebido:', email);
        console.log('Senha recebida:', senha);

        if (!email || !senha) {
            console.log('Campos de email ou senha estão vazios');
            return resp.status(400).send({ message: 'Por favor, preencha todos os campos.' });
        }

        const resultados = await verificarLogin(email, senha);

        console.log('Resultados da consulta:', resultados);

        if (resultados.length > 0) {
            resp.send({ message: 'Login bem-sucedido!' });
        } else {
            resp.status(401).send({ message: 'Email ou senha incorretos.' });
        }
    } catch (err) {
        console.error('Erro ao verificar login:', err);
        resp.status(500).send({ message: 'Erro interno do servidor.' });
    }
});

export default endpoints;
