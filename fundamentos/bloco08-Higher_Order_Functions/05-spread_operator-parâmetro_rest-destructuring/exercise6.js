const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject(lista) {
    const [carro, modelo, ano] = lista;
    const obj = {carro, modelo, ano}
    console.log(obj);
}

toObject(shelbyCobra)