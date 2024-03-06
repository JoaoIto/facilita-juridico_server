// Importar as funções a serem testadas
import { calcularDistancia, calcularDistanciaTotal, caixeiroViajante } from '../functions/function';

// Teste para a função calcularDistancia
test('calcularDistancia deve retornar a distância correta entre dois pontos', () => {
    const ponto1 = { coordenadaX: 0, coordenadaY: 0 };
    const ponto2 = { coordenadaX: 3, coordenadaY: 4 };
    const distanciaEsperada = 5; // Distância entre (0,0) e (3,4) é 5
    expect(calcularDistancia(ponto1, ponto2)).toBe(distanciaEsperada);
});

// Teste para a função calcularDistanciaTotal
test('calcularDistanciaTotal deve retornar a distância total correta de uma rota', () => {
    const rota = [0, 1, 2, 0]; // Exemplo de rota: empresa -> cliente1 -> cliente2 -> cliente3 -> empresa
    const clientes = [
        { coordenadaX: 0, coordenadaY: 0 },
        { coordenadaX: 3, coordenadaY: 4 },
        { coordenadaX: 6, coordenadaY: 8 }
    ];
    const distanciaEsperada = 20; // Distância total da rota é 24
    expect(calcularDistanciaTotal(rota, clientes)).toBe(distanciaEsperada);
});

// Teste para a função caixeiroViajante
test('caixeiroViajante deve retornar uma rota válida para os pontos fornecidos', () => {
    // Pontos de exemplo
    const pontos = [
        { coordenadaX: 0, coordenadaY: 0 },
        { coordenadaX: 3, coordenadaY: 4 },
        { coordenadaX: 6, coordenadaY: 8 }
    ];

    // Rota esperada para os pontos fornecidos
    const rotaEsperada = [0, 1, 2, 0]; // Rota esperada: empresa -> cliente1 -> cliente2 -> cliente3 -> empresa

    // Executa a função para encontrar a rota
    const rotaCalculada = caixeiroViajante(pontos);

    // Verifica se a rota calculada é igual à rota esperada
    expect(rotaCalculada).toEqual(rotaEsperada);
});
