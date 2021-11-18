const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((contido) => contido === name);

console.log(hasName(names, 'Ana'))