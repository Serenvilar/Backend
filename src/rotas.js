import express from 'express';

import quartoController from './controller/quartoController.js';
import loginController from './controller/loginController.js'

export default function adicionarRotas(servidor) {
    servidor.use(quartoController);
    servidor.use(loginController);

    servidor.use('/storage/imagens', express.static('./storage/imagens'))
}