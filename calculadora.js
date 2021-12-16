//calculadora em JavaScript.

function calculadora() {
    const operação = Number(prompt('escolha uam operação: \n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão (/) \n 5 - resto da divisão (%)\n 6 - potenciação (**)\n 7 - Sair'))

    if(operação >=8) {
        alert('opção inválida')
        calculadora();        
    } else if (operação == 7) {
        alert('Até Logo!')

    }else {let n1 = Number(prompt('insira o primeiro valor'));
    let n2 = Number(prompt('insira o segundo valor'));
    let resultado;

    if (!n1 || !n2) {
        alert('ERRO - Parâmetros Inválidos')
        calculadora();
    } else {function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperação()
    }    
    function subtração() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperação()
    }
    function multiplicação() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperação()
    }
    function divisão() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperação()
    }
    function restodadivisão() {
        resultado = n1 % n2;
        alert(`o resto da divisão de ${n1} e ${n2} é igual á ${resultado}`)
        novaOperação()
    }
    function potenciação() {
        resultado = n1 ** n2;
        alert(`${n1} elevado á ${n2}ª potência é ${resultado}`)
        novaOperação()
    }
}

    
    function novaOperação() {
        let opcao = prompt('deseja fazer outra operação? \n 1 - sim \n 2 - não');

        if (opcao == 1) {
            calculadora();

        } else if (opcao == 2) {
            alert('disponha!'); 
        } else {
            alert('Opção invalida');
            novaOperação();
        }
    }    

    if(operação == 1) {
       soma();
    }else if(operação == 2) {
       subtração();
    }else if(operação == 3) {
       multiplicação();
    }else if(operação == 4) {
       divisão();
    }else if(operação == 5) {
       restodadivisão();
    }else if(operação == 6) {
       potenciação();
    }
}
}
calculadora()
