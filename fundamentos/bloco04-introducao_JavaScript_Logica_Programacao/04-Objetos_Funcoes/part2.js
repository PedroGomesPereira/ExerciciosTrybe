function verificaPalindrome(str)
{
    var split = str.split("");
    var reverse = split.reverse("");
    var join = reverse.join("");
    var pali = false;
    if(str === join)
    {
        pali = true;
    }
    return console.log(pali);
};
verificaPalindrome("atata");
//----------------------------------------