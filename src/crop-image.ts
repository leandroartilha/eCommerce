
const getCropUrl = (url : string) =>{


    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    //o indexOf pega o indice da posicao da letra ou palavra
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    //o slice faz um recorte, com 2 parametros pega o recorte entre, ja
    //quando so tem 1 parametro pega apenas o restante da string

}

export default getCropUrl;