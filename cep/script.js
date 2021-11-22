'use strict';

const cep = document.querySelector('#cep');
const statusCEP = document.querySelector('#statusCEP');
const btnLimpar = document.querySelector('#btnLimpar');

const preencherFormulario = (enderecoJSON) => {
    document.querySelector('#endereco').value = enderecoJSON.logradouro;
    document.querySelector('#bairro').value = enderecoJSON.bairro;
    document.querySelector('#cidade').value = enderecoJSON.localidade;
    document.querySelector('#estado').value = enderecoJSON.uf;
    statusCEP.classList.remove('red');
    statusCEP.classList.remove('green');
    statusCEP.classList.add('green');
    statusCEP.innerHTML =  'Status: CEP encontrado';
}

const preencherInvalidoFormulario = ()=>{
    document.querySelector('#endereco').value = 'Endereço não encontrado';
    document.querySelector('#bairro').value = 'Bairro não encontrado';
    document.querySelector('#cidade').value = 'Cidade não encontrada';
    document.querySelector('#estado').value = 'Estado não encontrado';
    statusCEP.classList.remove('red');
    statusCEP.classList.remove('green');
    statusCEP.classList.add('red');
    statusCEP.innerHTML = 'Status: CEP inválido';
}

const isCEPValido = (cep) => cep.value.length === 8 && /^[0-9]+$/.test(cep.value);

const buscarCEP = async () => {
    if(isCEPValido(cep)){
        const url = `http://viacep.com.br/ws/${cep.value}/json/`;
        console.log(cep);
        const promessaFetch = await fetch(url);
        const enderecoJSON = await promessaFetch.json();
        preencherFormulario(enderecoJSON);

    }else{
        preencherInvalidoFormulario();
    }

}
const limparFormulario = ()=>{
    document.querySelector('#endereco').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#estado').value = '';
    cep.value = '';
    statusCEP.innerHTML ='Status:';
    statusCEP.classList.remove('red');
    statusCEP.classList.remove('green');
}
cep.addEventListener('focusout',buscarCEP);
btnLimpar.addEventListener('click',limparFormulario);