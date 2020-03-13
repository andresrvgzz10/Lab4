function clear(){
    document.getElementById('numero').value = '';
}

function clearTodo(){
    document.getElementById('numero').value = '';
    document.getElementById('resultValue').value = '';
    document.getElementById('logInformation').value = '';
}



function calculator(){

    let memoria = '';
    let resultado = '';
    let guardarOperador = '';

    let lastoperator = '';

    let operadores = document.querySelector('.rightContainer');
    let operadoresLeft = document.querySelector('.leftContainer');

    operadores.addEventListener('click', (event) => {
        let operador = event.target.className;
        let numero = document.getElementById('numero').value;
        console.log(numero);
        console.log(operador);
        console.log(resultado);
        
        if(operador == 'addButton')
        {
            console.log('SUMA');
            if(memoria == '' && resultado== '')
            {
                resultado = Number(numero);
                memoria = numero;
                console.log(resultado);
                lastoperator = operador;
                clear();
                
            }
            else{
                resultado = resultado + Number(numero);
                memoria =  memoria+ ' + ' + numero;
                console.log(memoria);
                lastoperator = operador;
                clear();

            }
            

        }
        else if (operador == 'substractButton'){
            console.log('RESTA');
            if(memoria == '' && resultado== '')
            {
                resultado = Number(numero);
                memoria = numero;
                console.log(memoria);
                lastoperator = operador;
                clear();
            }
            else{
                resultado = resultado - Number(numero);
                memoria =  memoria+ ' - ' + numero;
                console.log(memoria);
                lastoperator = operador;
                clear();

            }

        }
        else if(operador == 'multiplicationButton')
        {
            console.log('MULTIPLICACION');
            if(memoria == '' && resultado== '')
            {
                resultado = Number(numero);
                memoria = numero;
                console.log(memoria);
                lastoperator = operador;
                clear();
            }
            else{
                resultado = resultado * Number(numero);
                memoria =  memoria+ ' * ' + numero;
                console.log(memoria);
                lastoperator = operador;
                clear();

            }
        }else if(operador == 'divisionButton')
        {
            console.log('DIVISION');
            if(memoria == '' && resultado== '')
            {
                resultado = Number(numero);
                memoria = numero;
                console.log(memoria);
                lastoperator = operador;
                clear();
            }
            else{
                resultado = resultado / Number(numero);
                memoria =  memoria+ ' / ' + numero;
                console.log(memoria);
                lastoperator = operador;
                clear();

            }
        }

    });

    operadoresLeft.addEventListener('click', (event) => {

        let operador = event.target.className;
        let numero = document.getElementById('numero').value;

        let resultadoHTML = document.getElementById('logInformation');

        if(operador == 'resetButton')
        {
            console.log('reset');
            console.log('SE HA BORRADO TODO');
            clearTodo();


        }
        else if (operador == 'equalButton'){
            console.log(numero)
            console.log(resultado)
            console.log(lastoperator)

            if(lastoperator == 'addButton')
            {
                memoria = memoria + " + " + numero;
                resultado = resultado + Number(numero);

            }
            if(lastoperator == 'substractButton')
            {
                memoria = memoria + " - " + numero;
                resultado = resultado - Number(numero);

            }
            if(lastoperator == 'multiplicationButton')
            {
                memoria = memoria + " * " + numero;
                resultado = resultado * Number(numero);
            }
            if(lastoperator == 'divisionButton')
            {
                memoria = memoria + " / " + numero;
                resultado = resultado / Number(numero);
            }

            if(memoria == '' && resultado== '')
            {
                resultado = Number(numero);
                memoria = numero;


                resultadoHTML.innerHTML = memoria + ' = ' + resultado;
                console.log(memoria);
                document.getElementById('resultValue').value = resultado;
                clear();
                
            }
            else{
                resultadoHTML.innerHTML = memoria +' = ' + resultado;
                console.log(memoria);

                document.getElementById('resultValue').value = resultado;
                clear();



            }



            
            
            

        }


    });



    

    


}



function init(){

    calculator();
    console.log("Hola");

}

init();