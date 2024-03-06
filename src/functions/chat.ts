export function calcularDistancia(ponto1, ponto2) {
    const deltaX = ponto1.x - ponto2.x;
    const deltaY = ponto1.y - ponto2.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

export function caixeiroViajante(pontos) {
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
