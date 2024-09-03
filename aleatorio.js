const nomes = ["RICARDO", "YURI", "EDUARDO", "BRUNA", "HENRIQUE", "GUSTAVO", "PIETRO"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)