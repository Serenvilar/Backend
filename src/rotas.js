import express from "express";

import quartoController from "./controller/quartoController.js";
import loginController from "./controller/loginController.js";
import hospedeController from "./controller/hospedeController.js";

export default function adicionarRotas(servidor) {
  servidor.use(quartoController);
  servidor.use(loginController);
  servidor.use(hospedeController);

  servidor.use("/storage/imagens", express.static("./storage/imagens"));
}
