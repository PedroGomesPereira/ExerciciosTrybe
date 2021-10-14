n = 5
let frase = "";
//------------------------------
for (let i = 0; i < n; i++)
{
    for (let i = 0; i < n; i++)
    {
        frase += "*"
    }
    console.log(frase);
    frase = "";
}
//------------------------------
for (let i = 0; i < n; i++)
{
    frase += "*"
    console.log(frase);
}
frase = ""
//------------------------------
for (let i = 0; i < n; i++)
{
    for (let j = 0; j < n - i; j++)
    {
        frase += " ";
    }
    for (let k = 0; k < i + 1; k++)
    {
        frase += "*";
    }
    console.log(frase);
    frase = "";
}
//------------------------------
for (let i = 0; i < n - 1; i++)
{
    for (let j = 0; j < n - i; j++)
    {
        frase += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++)
    {
        frase += "*";
    }
    console.log(frase);
    frase = "";
}
//------------------------------BONUS
for (let i = 0; i < n +1; i++)
{
    for (let j = 0; j < n - i; j++)
    {
        frase += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++)
    {
        if (i === 1 || i  === n)
        {
            frase += "*";
        }
        else {
            if(k === 0 || k === 2 * i - 2)
            {
                frase += "*";
            }
            else
            {
                frase += " ";
            }
        }
    }
    console.log(frase);
    frase = "";
}