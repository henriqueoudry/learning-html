const questions = [
  { a: "Nunca mais usar redes sociais", b: "Nunca mais assistir TV" },
  { a: "Viajar para o passado", b: "Viajar para o futuro" },
  { a: "Ser invisível", b: "Ler mentes" },
  { a: "Viver no espaço", b: "Viver no fundo do mar" },
  { a: "Ter muito dinheiro", b: "Ter muito tempo" },
  { a: "Comer pizza todos os dias", b: "Nunca mais comer pizza" },
  { a: "Falar todas as línguas do mundo", b: "Tocar todos os instrumentos" },
  { a: "Poder voar", b: "Poder se teletransportar" },
  { a: "Nunca sentir dor", b: "Nunca sentir medo" },
  { a: "Ficar preso no passado", b: "Ficar preso no futuro" },
  { a: "Não sentir fome", b: "Não sentir sono" },
  { a: "Saber o dia da sua morte", b: "Saber a causa da sua morte" },
  { a: "Ter internet ilimitada", b: "Ter comida ilimitada" },
  { a: "Poder parar o tempo", b: "Poder voltar 10 segundos no tempo" },
  { a: "Nunca mais falar", b: "Nunca mais ouvir música" },
  { a: "Viver sem música", b: "Viver sem filmes/séries" },
  { a: "Ser famoso", b: "Ser rico" },
  { a: "Nunca mais usar celular", b: "Nunca mais usar computador" },
  { a: "Morar na cidade", b: "Morar no campo" },
  { a: "Ter um carro de luxo", b: "Ter uma casa enorme" },
  { a: "Viver 1 dia como milionário", b: "Viver 1 ano com conforto simples" },
  { a: "Ser o melhor no que faz", b: "Ser bom em tudo" },
  { a: "Ter um clone", b: "Poder se transformar em qualquer pessoa" },
  { a: "Poder falar com animais", b: "Poder controlar o clima" },
  { a: "Nunca mais sentir frio", b: "Nunca mais sentir calor" },
  { a: "Estudar para sempre", b: "Trabalhar para sempre" },
  { a: "Dormir 4 horas e estar descansado", b: "Dormir 10 horas e estar cansado" },
  { a: "Ser super forte", b: "Ser super rápido" },
  { a: "Ganhar na loteria", b: "Encontrar o amor da sua vida" },
  { a: "Nunca mais precisar de dinheiro", b: "Nunca mais precisar dormir" },
  { a: "Morar em outro país", b: "Viajar para todos os países" },
  { a: "Poder respirar debaixo d'água", b: "Poder viver sem respirar" },
  { a: "Ser sempre jovem", b: "Viver para sempre" },
  { a: "Saber todas as respostas", b: "Nunca errar" },
  { a: "Poder ver o futuro", b: "Poder mudar o passado" },
  { a: "Ser invisível quando quiser", b: "Ser invencível" },
  { a: "Ser um gênio", b: "Ter um corpo perfeito" },
  { a: "Nunca mais sentir dor de cabeça", b: "Nunca mais sentir dor nas costas" },
  { a: "Nunca mais pegar trânsito", b: "Nunca mais esperar em filas" },
  { a: "Comer doce para sempre sem engordar", b: "Comer salgado para sempre sem engordar" },
  { a: "Ficar sem banho por 1 mês", b: "Ficar sem internet por 1 mês" },
  { a: "Poder falar com o seu eu do passado", b: "Poder falar com o seu eu do futuro" },
  { a: "Ser um mestre da cozinha", b: "Ser um mestre da dança" },
  { a: "Sempre acordar cedo sem esforço", b: "Dormir tarde e acordar descansado" },
  { a: "Ter todos os livros que quiser", b: "Ter todos os filmes que quiser" },
  { a: "Sempre ter dinheiro exato na carteira", b: "Sempre ter bateria cheia no celular" },
  { a: "Morar na praia", b: "Morar nas montanhas" },
  { a: "Ser um super-herói", b: "Ser um supervilão" },
  { a: "Ter um emprego dos sonhos", b: "Nunca mais precisar trabalhar" },
  { a: "Ser famoso por algo bom", b: "Ser famoso por algo ruim" },
  { a: "Nunca mais se atrasar", b: "Nunca mais perder algo" },
  { a: "Sempre saber a hora exata", b: "Sempre saber onde está qualquer coisa" },
  { a: "Ter um robô pessoal", b: "Ter um carro voador" },
  { a: "Ter uma vida sem problemas", b: "Ter uma vida com aventuras" },
  { a: "Nunca mais ficar doente", b: "Nunca mais sentir dor" },
  { a: "Ser amado por todos", b: "Ser temido por todos" },
  { a: "Ser um ótimo cantor", b: "Ser um ótimo ator" },
  { a: "Poder criar qualquer invenção", b: "Poder destruir qualquer invenção" },
  { a: "Nunca mais sentir inveja", b: "Nunca mais sentir raiva" },
  { a: "Ser o mais inteligente do mundo", b: "Ser o mais criativo do mundo" },
  { a: "Ter uma memória perfeita", b: "Esquecer coisas ruins para sempre" },
  { a: "Ser imune ao frio", b: "Ser imune ao calor" },
  { a: "Poder viver em qualquer época", b: "Poder visitar qualquer época" },
  { a: "Poder falar com plantas", b: "Poder falar com máquinas" },
  { a: "Poder controlar o tempo", b: "Poder controlar as pessoas" },
  { a: "Ser super organizado", b: "Ser super criativo" },
  { a: "Nunca mais sentir fome", b: "Nunca mais sentir sono" },
  { a: "Viver em uma casa pequena perfeita", b: "Viver em uma casa enorme imperfeita" },
  { a: "Ter todos os amigos que quiser", b: "Ter todo o dinheiro que quiser" },
  { a: "Ser reconhecido pelo seu talento", b: "Ser reconhecido pela sua bondade" },
  { a: "Poder criar mundos imaginários", b: "Poder entrar em mundos fictícios" },
  { a: "Poder curar qualquer doença", b: "Poder acabar com todas as guerras" },
  { a: "Sempre saber se alguém está mentindo", b: "Sempre convencer qualquer pessoa" },
  { a: "Ter um animal de estimação exótico", b: "Ter um animal de estimação comum mas especial" },
  { a: "Sempre ganhar em jogos", b: "Sempre ganhar em discussões" },
  { a: "Ser famoso na internet", b: "Ser famoso na vida real" },
  { a: "Ter uma biblioteca infinita", b: "Ter um cinema em casa infinito" },
  { a: "Poder mudar de aparência quando quiser", b: "Poder mudar a voz quando quiser" },
  { a: "Viver perto da família", b: "Viver longe mas viajar sempre" },
  { a: "Poder viver sem tecnologia", b: "Poder viver só com tecnologia" },
  { a: "Ter um chef pessoal", b: "Ter um motorista pessoal" },
  { a: "Poder falar com alienígenas", b: "Poder viajar para outros planetas" },
  { a: "Nunca mais sentir ansiedade", b: "Nunca mais sentir tristeza" },
  { a: "Ser extremamente rápido", b: "Ser extremamente inteligente" },
  { a: "Ser rico mas infeliz", b: "Ser pobre mas feliz" },
  { a: "Sempre ganhar presentes", b: "Sempre dar os melhores presentes" },
  { a: "Ter um superpaladar", b: "Ter um superolfato" },
  { a: "Nunca mais ficar cansado", b: "Nunca mais ficar entediado" },
  { a: "Ser o líder do seu país", b: "Ser o líder do mundo" },
  { a: "Ter férias infinitas", b: "Ter um salário infinito" },
  { a: "Comer apenas frutas", b: "Comer apenas vegetais" },
  { a: "Ter uma vida cheia de surpresas", b: "Ter uma vida totalmente previsível" },
  { a: "Nunca mais chover", b: "Chover todos os dias" },
  { a: "Viver sozinho", b: "Viver sempre acompanhado" },
  { a: "Ter o carro mais rápido do mundo", b: "Ter o avião mais rápido do mundo" },
  { a: "Poder falar com mortos", b: "Poder ver o futuro" },
  { a: "Ter um amigo fiel para sempre", b: "Ter 100 amigos que vêm e vão" }
];

// Elementos do jogo
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const playButton = document.getElementById("play-button");
const nicknameBlock = document.getElementById("nickname-block");
const nicknameInput = document.getElementById("nickname-input");
const confirmNicknameButton = document.getElementById("confirm-nickname-button");
const blueText = document.querySelector(".blue p");
const redText = document.querySelector(".red p");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const pauseButton = document.getElementById("pause-button");
const pauseScreen = document.getElementById("pause-screen");
const resumeButton = document.getElementById("resume-button");
const restartButton = document.getElementById("restart-button");
const quitButton = document.getElementById("quit-button");


if (!blue || !red || !startScreen || !gameScreen || !playButton || pauseButton) {
  console.error("Um ou mais elementos HTML não foram encontrados. Verifique seu HTML.");
}

// Variáveis do jogo 
let contA = Number(localStorage.getItem('contA')) || 0;
let contB = Number(localStorage.getItem('contB')) || 0;
let accepted = true;
let isPaused = false;

// Funções do jogo 
function showQuestion() {
  const p = questions[Math.floor(Math.random() * questions.length)];
  blueText.textContent = p.a;
  redText.textContent = p.b;
}

function choose(option) {
  if (!accepted || isPaused) return;
  accepted = false;

  option.classList.add("selected");

  if (option === blue) contA++;
  else contB++;

  localStorage.setItem('contA', String(contA));
  localStorage.setItem('contB', String(contB));

  setTimeout(() => {
    option.classList.remove("selected");
    showQuestion();
    accepted = true;
  }, 0);
}

// Evento para o botão de Confirmar Nickname
confirmNicknameButton.addEventListener("click", () => {
const nickname = nicknameInput.value.trim();
if (nickname) {
localStorage.setItem('nickname', nickname);
nicknameBlock.classList.add('hidden');
playButton.classList.remove('hidden');
playButton.focus();
} else {
alert("Por favor, digite um nickname!");
  }
});

// Evento para a tecla 'Enter' no campo de nickname
nicknameInput.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
event.preventDefault();
confirmNicknameButton.click();
}
});

// Evento para o botão de Jogar
playButton.addEventListener("click", () => {
startScreen.classList.add("hidden");
gameScreen.classList.remove("hidden");
showQuestion();
});

// Event Listeners 
blue.addEventListener("click", () => choose(blue));
red.addEventListener("click", () => choose(red));

// Inicialização
showQuestion();

// BOTÃO DE PAUSE NO JOGO
pauseButton.addEventListener('click', () => {
isPaused = true;
pauseScreen.classList.remove('hidden');
});

// BOTÃO CONTINUAR (RESUME)
resumeButton.addEventListener('click', () => {
isPaused = false;
pauseScreen.classList.add('hidden');
});

// BOTÃO REINICIAR (RESTART)
restartButton.addEventListener('click', () => {
contA = 0;
contB = 0;
localStorage.setItem('contA', '0');
localStorage.setItem('contB', '0');
isPaused = false;
pauseScreen.classList.add('hidden');
gameScreen.classList.add('hidden');
startScreen.classList.remove('hidden');
});

// BOTÃO SAIR (QUIT)
quitButton.addEventListener('click', () => {
isPaused = false;
pauseScreen.classList.add('hidden');
gameScreen.classList.add('hidden');
startScreen.classList.remove('hidden');
});