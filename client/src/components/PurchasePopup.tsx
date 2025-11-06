import { useEffect, useState } from 'react';

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

interface PopupData {
  id: number;
  nome: string;
  cidade: string;
  frase: string;
  produtoClasse: string;
  show: boolean;
}

export default function PurchasePopup() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [nextId, setNextId] = useState(0);

  const randItem = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const createPopup = () => {
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

    const newPopup: PopupData = {
      id: nextId,
      nome,
      cidade,
      frase,
      produtoClasse: produto.classe,
      show: false
    };

    setNextId(prev => prev + 1);
    setPopups(prev => [...prev, newPopup]);

    setTimeout(() => {
      setPopups(prev => prev.map(p => p.id === newPopup.id ? { ...p, show: true } : p));
    }, 100);

    setTimeout(() => {
      setPopups(prev => prev.map(p => p.id === newPopup.id ? { ...p, show: false } : p));
    }, 5000);

    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== newPopup.id));
    }, 5500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createPopup();
    }, Math.random() * 8000 + 10000);

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="fixed top-0 right-0 z-[9999] pointer-events-none">
      {popups.map((popup) => (
        <div
          key={popup.id}
          className={`popup-compra ${popup.show ? 'show' : ''}`}
          data-testid={`popup-purchase-${popup.id}`}
        >
          <div className="popup-text">
            <strong>{popup.nome}</strong> de <strong>{popup.cidade}</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: popup.frase }} />
          </div>
        </div>
      ))}
    </div>
  );
}
