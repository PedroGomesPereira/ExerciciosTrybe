let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
//------------------------------1------------------------------
for(let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}
//------------------------------2------------------------------
for(let i = 0; i < numbers.length; i++)
{
    soma = soma + numbers[i];
}
console.log(soma);
//------------------------------3------------------------------
for(let i = 0; i < numbers.length; i++)
{
    soma = soma + numbers[i];
}
media = soma / numbers.length;
console.log(media);
//------------------------------4------------------------------
if (media > 20)
{
    console.log("valor maior que 20");
}
else
{
    console.log("valor menor ou igual a 20");
}
//------------------------------5------------------------------
maior = 0;
for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] > maior)
    {
        maior = numbers[i];
    }
}
console.log(maior);
//------------------------------6------------------------------
let inpar = 0;
for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] % 2 !== 0)
    {
        inpar++;
    }
    else if(numbers[i] == numbers.length - 1 && inpar == 0)
    {
        console.log("nenhum valor ímpar encontrado");
    }
}
console.log(inpar);
//------------------------------7------------------------------
menor = 1000;
for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] < menor)
    {
        menor = numbers[i];
    }
}
console.log(menor);
//------------------------------8------------------------------
array25 = [];
for(let i = 1; i <= 25; i++)
{
    array25.push(i);
}
console.log(array25);
//------------------------------9------------------------------
for(let i = 0; i < array25.length; i++)
{
    console.log(array25[i] / 2);
}