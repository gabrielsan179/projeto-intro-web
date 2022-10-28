//SEMANA01
  //ITEM 01 
    //Crie um conjunto de variaveis com pelo menos uma string, um number e um boleano
  //ITEM 02
    //Crei tres conjuntos de variaveis utilizando as mesmas caracteristica do item 01
  //ITEM 05
    //Crie mais uma caracteristica e ela deve ser um array
//SEMANA02
  //ITEM 01
    //Transforme os itens que criamos nas últimas semanas em objetos
const caças = [
  {
    nome: "Eurofighter Typhoon A",
    velocidade: 2500,
    furtividade: false,
    operadores: ["Reino Unido", "Alemanha", "Arábia Saudita", "Itália", "Espanha"],
    img: "../img/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg",
    link: "https://pt.wikipedia.org/wiki/Eurofighter_Typhoon"
  },
  {
    nome: "JAS 39 Gripen",
    velocidade: 1400,
    furtividade: false,
    operadores: ["Brasil", "Africa de Sul", "Hungria", "Suécia", "Tailândia"],
    img: "../img/Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show,_June_2017_(altered)_copy.jpg",
    link: "https://pt.wikipedia.org/wiki/Saab_JAS_39_Gripen"
  },
  {
    nome: "F-22 Raptor",
    velocidade: 2400,
    furtividade: true,
    operadores: ["Estados unidos", "Holanda", "Canadá", "Turquia", "Austrália"],
    img: "../img/F-22_Raptor_edit1_(cropped).jpg",
    link: "https://pt.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor"
  },
  {
    nome: "F-16 Fighting Falcon",
    velocidade: 1800,
    furtividade: true,
    operadores: ["Estados unidos", "Egito", "Grécia", "Israel", "Portugal"],
    img: "../img/F-16_June_2008.jpg",
    link: "https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon"
  }
]

//SEMANA01
  //ITEM 03
    //Crie uma variavel com a media dos valores number dos seus conjuntos de variaveis
const velocidadeMedia =(caças[0].velocidade + caças[1].velocidade + caças[2].velocidade + caças[3].velocidade) / caças.length;
console.log(`A velocidade media dos caças é ${velocidadeMedia} km/h.`);

//SEMANA01
  //ITEM 04
    //Crie uma variavel que verifique os valores booleanos dos seus conjuntos de variaveis
const furtivos = caças[0].furtividade && caças[1].furtividade && caças[2].furtividade && caças[3].furtividade;
console.log(`Todos os caças são furtivos? ${furtivos}`);

//SEMANA01
  //ITEM 06
    //Imprima um relatorio mostrando todos os dados de cada um dos itens criados até aqui
//Antes
// console.log(
//   caças[0].nome.toUpperCase(),
//   "\nVelocidade:", caças[0].velocidade, "km/h.",
//   "\nÉ furtivo?", caças[0].furtividade,
//   "\nPaises que possuem este caça:", caças[0].operadores
// );
// console.log(
//   caças[1].nome.toUpperCase(),
//   "\nVelocidade:", caças[1].velocidade, "km/h.",
//   "\nÉ furtivo?", caças[1].furtividade,
//   "\nPaises que possuem este caça:", caças[1].operadores
// );
// console.log(
//   caças[2].nome.toUpperCase(),
//   "\nVelocidade:", caças[2].velocidade, "km/h.", 
//   "\nÉ furtivo?", caças[2].furtividade, 
//   "\nPaises que possuem este caça:", caças[2].operadores
// );

//SEMANA02
  //ITEM 02
    //Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto.
const avioesFurtivos = []
//SEMANA02
  //ITEM 03
    //Adicione os objetos criados no item 1 ao array de objetos criado no item 2
//avioesFurtivos.push(caça1, caça2, caça3)
  //ITEM 04
    //Altere o item 04 para criar uma verificação se a propriedade booleana é valida antes de adicionar
  //ITEM 05
    //Crie uma verificação se a propriedade booleana não é valida e exiba um alert avisando para o usuário que o item não foi adicionado
// caças[0].furtividade ? avioesFurtivos.push(caças[0]) : alert("caça 01 nao é futivo")
// caças[1].furtividade ? avioesFurtivos.push(caças[1]) : alert("caça 02 nao é futivo")
// caças[2].furtividade ? avioesFurtivos.push(caças[2]) : alert("caça 03 nao é futivo")
// caças[3].furtividade ? avioesFurtivos.push(caças[3]) : alert("caça 04 nao é futivo")
// console.log(avioesFurtivos)

//SEMANA03
  //ITEM 01
    //Reescrevendo o relatório feito na semana 1, altere a forma que o array seja escrita como um laço que guarde todos os valores em uma mesma string. Utilize esta string no relatório
for (let i of caças){
  i.operadores= i.operadores.toString()
}

//SEMANA03
  //ITEM 02
    //Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
for (let i of caças){
  for (let j in i){
    console.log(`${j}: ${i[j]}`)
  }
  console.log(" ")
}

//SEMANA03
  //ITEM 03
    //Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto
const procuraNome = (obj) => {
  for (let j in obj){
    console.log(`${j}: ${obj[j]}`)
  }
}

//SEMANA03
  //ITEM 04
    //Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

    
const buscador = (array, string) => {
  const novoarray = array.filter(parametro => {
    return parametro.nome.toLowerCase().includes(string.toString().toLowerCase())
  })
  return novoarray
  
}

function valorDoInputAualizado(){
  const valorDoInput = document.getElementById("pesq")
  return valorDoInput.value
}
function inicio(){
  const conteinerInicial = document.querySelector("#main")
  conteinerInicial.innerHTML = ``
  for (let i of caças){
    conteinerInicial.innerHTML += 
    `
    <div>
    <section>
    <ul>
    <li>Nome: <a href="${i.link}">${i.nome}</a></li>
    <li>Velocidade: ${i.velocidade} km/h</li>
    <li>Furtivo: ${i.furtividade}</li>
    <li>Operadores: ${i.operadores}</li>
    </ul>
    <img class="avi" src="${i.img}"/>
    </section>
    </div>
    `
  }
}
inicio()


function buscadorBotn(array) {
  const conteiner = document.querySelector("#main")
  const string = valorDoInputAualizado()
  const novo = buscador(array, string)
  if(string === ""){
    alert ("insira augo no campo de pesquisa")
  }else{
  conteiner.innerHTML = ``
  novo.map((caça) =>{
    conteiner.innerHTML += 
    `
    <div>
    <section>
    <ul>
    <li>Nome: <a href="${caça.link}">${caça.nome}</a></li>
    <li>Velocidade: ${caça.velocidade} km/h</li>
    <li>Furtivo: ${caça.furtividade}</li>
    <li>Operadores: ${caça.operadores}</li>
    </ul>
    <img class="avi" src="${caça.img}"/>
    </section>
    </div>
    `
  })
}
}