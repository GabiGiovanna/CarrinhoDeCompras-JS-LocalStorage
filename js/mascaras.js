function Numero(num){

    let value = num.value;
 value = value.replace(/\D/g, '');   

 num.value = value;

}
function Mascara_CEP(cepInput) {
    let value = cepInput.value;

   
    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplica a máscara
  
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5);
    }
    

    // Atualiza o valor do campo de entrada
    cepInput.value = value;
}


function Mascara_Tel(telInput) {
    let value = telInput.value;


    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplica a máscara 
  
    if (value.length > 0) {
        value = value.substring(0, 0) + '(' + value.substring(0);
    }
    if (value.length > 3) {
        value = value.substring(0, 3) + ')' + value.substring(3);
    }
    if (value.length > 9) {
        value = value.substring(0, 9) + '-' + value.substring(9);
    }

    // Atualiza o valor do campo de entrada
    telInput.value = value;
}



function Mascara_Data(dataInput) {
    let value = dataInput.value;


    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplica a máscara 
  
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
   

    // Atualiza o valor do campo de entrada
    dataInput.value = value;
}

function Mascara_Cartao(cartaoInput) {
    let value = cartaoInput.value;


    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplica a máscara 
  
    if (value.length > 4) {
        value = value.substring(0, 4) + ' ' + value.substring(4);
    }
   
    
    if (value.length > 9) {
        value = value.substring(0, 9) + ' ' + value.substring(9);
    }

    if (value.length > 14) {
        value = value.substring(0, 14) + ' ' + value.substring(14);
    }

    // Atualiza o valor do campo de entrada
    cartaoInput.value = value;
}