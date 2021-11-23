const searchBox = document.querySelector('.searchBox');
const searchButton =document.querySelector('.searchButton');
const resultado = document.querySelector('.resultado');

searchButton.addEventListener('click',(e)=>{
    const cidade = searchBox.value;
    exibirTempo(cidade);

});

async function exibirTempo(cidade){
    const url = 'http://api.weatherstack.com/current?access_key=c60f33f1457f27fa16f624a022ebcbf1&query='+cidade;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const infTemperatura = dados.current;
    console.log(infTemperatura);
    exibirResultado(infTemperatura);
}

function exibirResultado(informacoes){
    //SELECIONANDO OS CAMPOS
    const temperatura = document.querySelector('#temperatura');
    const umidade = document.querySelector('#umidade');
    const sensacao = document.querySelector('#sensacao');
    const foto = document.querySelector('#foto');
    
    //GRAVANDO
    //FOTO
    const srcImg = informacoes.weather_icons[0];
    let img = document.createElement('img');
    img.src = srcImg;
    foto.innerHTML = '';
    foto.appendChild(img);
    //OUTROS CAMPOS
    temperatura.value = informacoes.temperature + '°';
    umidade.value = informacoes.humidity + '%';
    sensacao.value = informacoes.feelslike + '°'
}
