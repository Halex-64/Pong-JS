//propriedades da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//velocidade da bolinha
let velocidadexBolinha = 3;
let velocidadeyBolinha  = 3;

//propriedades da raquete
let raqueteComprimento= 10;
let raqueteAltura = 80;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 10;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  verificaColisaoRaquete(xRaquete,yRaquete);
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += +velocidadexBolinha;
  yBolinha += +velocidadeyBolinha
}

function verificaColisaoBorda(){
   if(xBolinha > width || xBolinha < 0){
    velocidadexBolinha *= -1.01
  }
   if(yBolinha > height || yBolinha <0){
    velocidadeyBolinha *= -1.01
  }
}

function mostraRaquete (x,y) {
  rect (x,y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete (){
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10
  }
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10
  }
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
} 

function verificaColisaoRaquete (x,y) {
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadexBolinha *= -1.01;
  }
}
  function incluiPlacar (){
    stroke(255);
    textAlign(CENTER);
    textSize(20);
    fill(color(152,251,152))
    rect(180, 10,40,20);
    fill(255);
    text(meusPontos, 200, 27);
    fill(color(139,0,0));
    rect(380,10,40,20),
    fill(255);
    text(pontosOponente, 400, 27);
  }

  function marcaPonto(){
    if(xBolinha > 590){
      meusPontos += 1;
    }
    if(xBolinha < 10){
      pontosOponente += 1;
    }
  }