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
    const temperatura = '<h2> Temperatura: '+informacoes.temperature+' Graus</h2>';
    const umidade = '<h2> Umidade: '+informacoes.humidity+'%</h2>';
    const isDay = '<h2> Está de dia: '+informacoes.is_day+'</h2>';
    const clima = '<h2> Clima: '+informacoes.weather_descriptions[0]+'</h2>';
    const srcImg = informacoes.weather_icons[0];
    let img = document.createElement('img');
    img.src = srcImg;

    resultado.innerHTML = temperatura+umidade+isDay+clima;
    resultado.appendChild(img);
}
