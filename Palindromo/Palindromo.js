/*function verificarPalindromo(string) {
    if (!string) return "string inexistente";

    string.split("").reverse().join("") === string;
}
console.log(verificarPalindromo("ovo")); */

function verificarPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; let ++) {
       if(string[i] !== string[string.length -1 -i]); {
        return false;
       }
    }
    return true;
}    
console.log(verificarPalindromo2("ovo"));