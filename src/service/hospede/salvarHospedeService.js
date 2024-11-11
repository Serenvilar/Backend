import { salvarHospede, consultarReservaAtivaPorQuarto } from "../../repository/hospedeRepository.js";
import { validarCamposObrigatoriosHospede } from "../../validation/hospede/hospedevalidation.js";

export default async function salvarHospedeService(hospedeObj) {
    validarCamposObrigatoriosHospede(hospedeObj);
  
    // verificar se o quarto já está reservado no período especificado
    const reservaConflitante = await consultarReservaAtivaPorQuarto(
      hospedeObj.fk_quarto,
      hospedeObj.data_checkin,
      hospedeObj.data_checkout
    );
  
    if (reservaConflitante) {
      throw new Error("O quarto já está reservado para o período especificado.");
    }
  
    // salva o hospede se nao houver conflito
    let id = await salvarHospede(hospedeObj);
  
    return id;
  }
  