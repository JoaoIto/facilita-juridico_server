// Função para encontrar a rota mais curta
import {calcularDistanciaTotal, permutacoesClientes} from "./function";

export function encontrarRotaMaisCurta(clientes) {
    const permutacoes = permutacoesClientes(clientes);
    let menorDistancia = Infinity;
    let rotaMaisCurta = [];

    for (let i = 0; i < permutacoes.length; i++) {
        const distancia = calcularDistanciaTotal(permutacoes[i], clientes);
        if (distancia < menorDistancia) {
            menorDistancia = distancia;
            rotaMaisCurta = permutacoes[i];
        }
    }

    return rotaMaisCurta;
}