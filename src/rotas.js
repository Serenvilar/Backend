import express from 'express';

import quartoController from './controller/quartoController.js';


export default function adicionarRotas(servidor) {
    servidor.use(quartoController);

    servidor.use('/storage/imagens', express.static('./storage/imagens'))
}