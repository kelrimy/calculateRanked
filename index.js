function calculateRanked(vitorias, derrotas) {
    
    let victoryBalance = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {  
        nivel = "Imortal";
    }
    
    let mensagem = `O Herói tem um saldo de ${victoryBalance} e está no nível ${nivel}`;
    return mensagem;
}

function main() {   
    console.log("Calculadora de Partidas Rankeadas");
   
    let vitorias = parseInt(prompt("Digite o número de vitórias: "));
    let derrotas = parseInt(prompt("Digite o número de derrotas: "));

    if (isNaN(vitorias) || isNaN(derrotas)) {
        console.log("Por favor, insira valores inteiros válidos para vitórias e derrotas.");
        return;
    }

    if (vitorias < 0 || derrotas < 0) {
        console.log("O número de vitórias e derrotas deve ser um valor positivo.");
        return;
    }

    let resultado = calculateRanked(vitorias, derrotas);
    console.log(resultado);
}

main();
