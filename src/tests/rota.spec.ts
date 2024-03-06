// Teste para a função caixeiroViajante
import {caixeiroViajante} from "../functions/rotasCalc";

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