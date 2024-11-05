import { consultarQuartos } from "../../repository/quartoRepository.js";

export default async function consultarQuartosService(nome) {

    if (!nome) {
        nome = '';
    }

    let registros = await consultarQuartos(nome);
    return registros;
}