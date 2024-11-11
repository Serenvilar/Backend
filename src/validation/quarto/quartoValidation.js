export function validarCamposObrigatoriosQuarto(quartoObj) {
    if (!quartoObj.nome) throw new Error("Nome do quarto obrigatório.");
  
    if (!quartoObj.tamCama)
      throw new Error("Tamanho da cama do quarto obrigatório.");
  
    if (!quartoObj.classiAvaliacao)
      throw new Error("Classificação de avaliação do quarto obrigatório.");
    if (isNaN(quartoObj.classiAvaliacao))
      throw new Error("Classificação de avaliação do quarto inválida.");
  
    if (!quartoObj.numAvaliacao)
      throw new Error("Numero da avaliação do quarto obrigatório.");
  
    if (!quartoObj.valor) throw new Error("Valor do quarto obrigatório.");
  }
  
  export function validarQuartoUnico(registros) {
    if (registros.length == 0) throw new Error("Quarto não encontrado!");
  }
  