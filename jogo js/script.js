// Elementos do DOM
const pergunta = document.getElementById('pergunta');
const resposta = document.getElementById('resposta');
const responderB = document.getElementById('responder');
const resultado = document.getElementById('resultado');

// Perguntas de matemática
const perguntas = [
    { pergunta: 'Quanto é 5 + 12?', resposta: 17 },
    { pergunta: 'Quanto é 9 x 11?', resposta: 99 },
    { pergunta: 'Qual a raiz quadrada de 196?', resposta: 14 },
    { pergunta: 'Quanto é 55 - 29?', resposta: 26 },
    { pergunta: '*Quanto é 18 + 12 x 6?', resposta: 90 },
    { pergunta: 'Quantos lados tem um icoságono?', resposta: 20 },
    { pergunta: 'Qual o valor de log 1000 na base 10?', resposta: 3 }
];

// Variável para rastrear a pergunta atual
var numDaPergunta = 0;

// Função para carregar a pergunta atual
function loadpergunta() {
    const currentpergunta = perguntas[numDaPergunta];
    pergunta.textContent = currentpergunta.pergunta;
    resposta.value = '';
}

// Função para verificar a resposta do usuário
function verificaResposta() {
    const respJogador = parseInt(resposta.value);
    const gabarito = perguntas[numDaPergunta].resposta;
    
    if (respJogador === gabarito) {
        resultado.textContent = 'Correto, próxima pergunta!';
        resultado.style.color = 'green';

        numDaPergunta++;
        
        if (numDaPergunta < perguntas.length) {
            loadpergunta();
        } else {
            pergunta.textContent = 'Você zerou o jogo! Agora você é um gênio da matemática!';
            resposta.style.display = 'none';
            responderB.style.display = 'none';
        }
    } else {
        resultado.textContent = 'Errada, tente de novo!';
        resultado.style.color = 'red';
    }
}


// Evento de clique no botão
responderB.addEventListener('click', verificaResposta);

// Carregar a primeira pergunta
loadpergunta();
