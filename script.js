// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked one if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Purchase Popup System
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

  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 500);
  }, 5000);
}

// Show popup every 10-18 seconds
setInterval(mostrarPopup, Math.random() * 8000 + 10000);
