// nomes por gênero
const femaleNames = [
  "Ana", "Fernanda", "Marina", "Rafaela", "Beatriz", "Larissa", "Juliana", "Camila"
];
const maleNames = [
  "Carlos", "João", "Gustavo", "Thiago", "Pedro", "Lucas", "Matheus", "Rafael"
];

const cidades = [
  "São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza",
  "Brasília", "Florianópolis", "Recife", "Porto Alegre", "Belém"
];

// Priorizando o Super Pack (80%)
const produtos = [
  { nome: "Super Pack", classe: "produto-super" },
  { nome: "Super Pack", classe: "produto-super" },
  { nome: "Super Pack", classe: "produto-super" },
  { nome: "Super Pack", classe: "produto-super" },
  { nome: "Pack Básico", classe: "produto-basico" }
];

function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function mostrarPopup() {
  // escolhe gênero aleatório (50/50)
  const genero = Math.random() < 0.5 ? 'F' : 'M';
  const nome = genero === 'F' ? randItem(femaleNames) : randItem(maleNames);
  const cidade = randItem(cidades);
  const produto = randItem(produtos);

  const frases = [
    `acabou de comprar o <span class="${produto.classe}">${produto.nome}</span>! 🎉`,
    `garantiu o <span class="${produto.classe}">${produto.nome}</span> com desconto 😍`,
    `acabou de adquirir o <span class="${produto.classe}">${produto.nome}</span> 🧠`
  ];
  const frase = randItem(frases);

  const popup = document.createElement('div');
  popup.className = 'popup-compra';
  popup.innerHTML = `
    <div class="popup-text">
      <strong>${nome}</strong> de <strong>${cidade}</strong> ${frase}
    </div>
  `;

  document.getElementById('popup-container').appendChild(popup);
  setTimeout(() => popup.classList.add('show'), 100);

  // remove depois de 5 segundos
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 500);
  }, 5000);
}

// mostra entre 10 e 18 segundos
setInterval(mostrarPopup, Math.random() * 8000 + 10000);
