import salvarQuartoService from "../service/quarto/salvarQuartoService.js";
import consultarQuartosService from "../service/quarto/consultarQuartosService.js";
import consultarQuartoPorIdService from "../service/quarto/consultarQuartoPorIdService.js";
import alterarQuartoService from "../service/quarto/alterarQuartoService.js";
import deletarQuartoService from "../service/quarto/deletarQuartoService.js";
import alterarImagemQuartoService from "../service/quarto/alterarImagemQuartoService.js";

import multer from "multer";

import { Router } from "express";
const endpoints = Router();

endpoints.post("/quarto", async (req, resp) => {
  try {
    let quartoObj = req.body;
    let id = await salvarQuartoService(quartoObj);

    resp.send({
      id: id,
    });
    console.log("Dados recebidos no backend:", req.body);
  }
  catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

endpoints.get("/quarto", async (req, resp) => {
  try {
    // leitura
    let nome = req.query.nome;

    // processamento (service)
    let registros = await consultarQuartosService(nome);

    // saida
    resp.send(registros);
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

endpoints.get("/quarto/:id", async (req, resp) => {
  try {
    let id = req.params.id;

    let quarto = await consultarQuartoPorIdService(id);

    resp.send(quarto);
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

endpoints.put("/quarto/:id", async (req, resp) => {
  try {
    // ler entradas
    let quartoObj = req.body;
    let id = req.params.id;

    // processamento (service)
    await alterarQuartoService(quartoObj, id);

    // saida response
    resp.status(204).send();
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

endpoints.delete("/quarto/:id", async (req, resp) => {
  try {
    // entrada
    let id = req.params.id;

    // processamentos
    await deletarQuartoService(id);

    // saida
    resp.status(204).send();
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

let uploadImagem = multer({ dest: "./storage/imagens" });

endpoints.put("/quarto/:id/imagem", uploadImagem.single("imagem"), async (req, resp) => {
  try {
    // entradas
    let id = parseInt(req.params.id);
    let caminhoImagem = req.file.path;

    // processamento (service)
    await alterarImagemQuartoService(id, caminhoImagem);

    // siada response
    resp.status(204).send();
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

export default endpoints;


