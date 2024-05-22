const btnCriar = document.querySelector('#btnCriar');
const inputUsuario = document.querySelector('#inputUsuario');
const listaFilmes = document.querySelector('#listaFilmes');

const filmes = [
    {
        nome: "Como se eu fosse você",
        diretor:"Tony Ramos",
        ano: 2004,
        sinopse: "Em Se Eu Fosse Você, Cláudio (Tony Ramos) é um publicitário bem sucedido, dono de sua própria agência, e é casado com Helena (Glória Pires), uma professora de música que cuida de um coral infantil. Acostumados com a rotina do dia-a-dia e do casamento de tantos anos, eles volta e meia têm uma discussão. Um dia eles têm uma briga maior do que o normal, que faz com que algo inexplicável aconteça: eles trocam de corpos. Apavorados, Cláudio e Helena tentam aparentar normalidade até que consigam revertar a situação. Porém, para tanto, eles terão que assumir por completo a vida do outro."
    },
    {
        nome: "Forest Gump",
        diretor: "Rober Zemeckis",
        ano: 1994,
        sinopse: "Olá"
    },
    {
        nome: "Operação Big Hero",
        diretor: "Tony Hawk",
        ano: 2014,
        sinopse: "OI"
    }
]

btnCriar.addEventListener('click', function(event){
    event.preventDefault();
    
    let novoFilme = document.createElement('li');
    novoFilme.innerText = inputUsuario.value;

    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        novoFilme.style.backgroundColor = "black"
        novoFilme.classList.toggle('mudar-cor')
    })

    let imagemFilme = document.createElement('img')
    imagemFilme.src = ""

    novoFilme.append(btnEditar);

    listaFilmes.append(novoFilme);

    inputUsuario.value = "";

})

//event - parâmetro que guarda todas as informacoes do clique
//event.target - elemento que disparou o evento
//event.target.id - id do elemento que foi clicado
//event.target.parentNode - pega o elemento pai do elemento que foi clicado
//.createElement - cria um novo elemento HTML
//.append - adciona um elemento dentro de outro em HTML
//fontawesome - icones

/*novoFilme.innerHTML = `
<h1> Titulo do Filme </h1>
<p></p>
<p></p>`*/

//CREATE
function criarFilme(){

    let filmeAdcionado = {
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value
    }
    filmes.unshift(filmeAdcionado)
    renderizarNaTela()
}

window.onload = renderizarNaTela()

//READ
function renderizarNaTela(){
    listaFilmes.innerHTML = ""

    filmes.forEach(
        filme =>{
            let novoFilme = document.createElement('li');
            novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <p>${filme.diretor}</p>
            <p>${filme.sinopse}</p>
            `

            listaFilmes.append(novoFilme)
        }

    )
}

//UPDATE

//DELETE