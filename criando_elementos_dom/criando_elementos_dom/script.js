// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Loja de hamburguers";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>X-Salada</h2>
    <img src="https://i.ytimg.com/vi/zlZEDtopR8Q/hqdefault.jpg" alt="x-salada">
    <p>Pão com hamburguer, alface, tomate e queijo mussarela.</p>
    <p id="preco-x-salada">R$ 14.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)