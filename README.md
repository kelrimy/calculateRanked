## Calculadora de Partidas Rankeadas

Este projeto é uma **Calculadora de Partidas Rankeadas** que determina o nível de um jogador baseado na quantidade de vitórias e derrotas. O objetivo é calcular o saldo de partidas e classificar o jogador em um nível específico.

### Tecnologias Utilizadas

- **JavaScript**
  - Variáveis
  - Operadores
  - Condicionais
  - Funções
  - Entrada e Saída de Dados
  - Verificação de tipo
  - Interpolação de String

### Funcionalidades

- Recebe o número de vitórias e derrotas como entrada do usuário.
- Calcula o saldo de vitórias (`vitórias - derrotas`).
- Classifica o jogador em um nível baseado na quantidade de vitórias, conforme a tabela abaixo:

| Número de Vitórias   | Nível      |
|----------------------|------------|
| Menor que 10         | Ferro      |
| Entre 11 e 20       | Bronze     |
| Entre 21 e 50       | Prata      |
| Entre 51 e 80       | Ouro       |
| Entre 81 e 90       | Diamante   |
| Entre 91 e 100       | Lendário   |
| Maior ou igual a 101 | Imortal    |

### Como Usar

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `.js` em seu editor de código favorito.
3. Execute o script em um ambiente que suporte JavaScript.
4. Insira o número de vitórias e derrotas quando solicitado.
5. O resultado será exibido no console.

### Código

```javascript
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

```
### Contribuição
Se você deseja contribuir com melhorias ou correções, fique à vontade para abrir um pull request ou criar uma issue.

### Licença
Este projeto é de domínio público, sinta-se à vontade para utilizá-lo como preferir.
