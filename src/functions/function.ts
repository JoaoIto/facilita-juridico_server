// Função para calcular a distância entre dois pontos (coordenadas X e Y)
function calcularDistancia(ponto1, ponto2) {
    const deltaX = ponto1.coordenadaX - ponto2.coordenadaX;
    const deltaY = ponto1.coordenadaY - ponto2.coordenadaY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Função para calcular a distância total de uma rota
function calcularDistanciaTotal(rota, clientes) {
    let distanciaTotal = 0;
    for (let i = 0; i < rota.length - 1; i++) {
        distanciaTotal += calcularDistancia(clientes[rota[i]], clientes[rota[i + 1]]);
    }
    distanciaTotal += calcularDistancia(clientes[rota[rota.length - 1]], clientes[0]); // Retorno à empresa
    return distanciaTotal;
}

function caixeiroViajante(pontos) {
    const n = pontos.length;

    // Inicializa um array para armazenar a rota
    const rota = [];
    rota.push(0); // Adiciona o ponto de partida à rota

    // Inicializa um array para rastrear os pontos visitados
    const visitados = new Array(n).fill(false);
    visitados[0] = true; // Marca o ponto de partida como visitado

    for (let i = 1; i < n; i++) {
        let melhorVizinho = -1;
        let menorDistancia = Infinity;

        // Encontra o vizinho mais próximo
        for (let j = 0; j < n; j++) {
            if (!visitados[j]) {
                const distanciaAtual = calcularDistancia(pontos[rota[i - 1]], pontos[j]);
                if (distanciaAtual < menorDistancia) {
                    menorDistancia = distanciaAtual;
                    melhorVizinho = j;
                }
            }
        }

        // Adiciona o vizinho mais próximo à rota
        rota.push(melhorVizinho);
        visitados[melhorVizinho] = true;
    }

    // Adiciona o ponto de partida à rota novamente para fechar o ciclo
    rota.push(0);

    return rota;
}

// Função para gerar todas as permutações possíveis dos clientes
function permutacoesClientes(clientes) {
    const permutacoes = [];
    const tamanho = clientes.length;
    const indices = Array.from({ length: tamanho }, (_, i) => i);

    function permutar(atual = []) {
        if (atual.length === tamanho) {
            permutacoes.push(atual.slice());
            return;
        }
        for (let i = 0; i < indices.length; i++) {
            if (!atual.includes(indices[i])) {
                atual.push(indices[i]);
                permutar(atual);
                atual.pop();
            }
        }
    }

    permutar();
    return permutacoes;
}

module.exports = { calcularDistancia, calcularDistanciaTotal, caixeiroViajante };