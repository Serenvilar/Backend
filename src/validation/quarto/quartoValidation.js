export function validarCamposObrigatoriosQuarto(quartoObj) {
  if (!quartoObj.nome)
    throw new Error("Nome do quarto obrigatório.");

  if (!quartoObj.tam_cama)
    throw new Error("Tamanho da cama do quarto obrigatório.");

  // if (!quartoObj.classi_avaliacao)
  //   throw new Error("Classificação de avaliação do quarto obrigatório.");

  // if (isNaN(quartoObj.classi_avaliacao))
  //   throw new Error("Classificação de avaliação do quarto inválida.");

  if (quartoObj.classi_avaliacao < 0)
    throw new Error("Classificação de avaliação do quarto não pode ser negativa.");

  if (quartoObj.classi_avaliacao > 10)
    throw new Error("Classificação de avaliação não pode ser maior que 10");

  if (!quartoObj.num_avaliacao)
    throw new Error("Numero da avaliação do quarto obrigatório.");

  if (!quartoObj.valor)
    throw new Error("Valor do quarto obrigatório.");

  if (quartoObj.valor < 0)
    throw new Error("Valor do quarto não pode ser negativo.");
}

export function validarQuartoUnico(registros) {
  if (registros.length == 0) throw new Error("Quarto não encontrado!");
}
