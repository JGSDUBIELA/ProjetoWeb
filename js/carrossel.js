document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.depoimento-card');
  const indicadores = document.querySelectorAll('.indicador');
  const btnAnt = document.getElementById('depoimento-anterior');
  const btnProx = document.getElementById('depoimento-proximo');
  let idx = 0;

  function showCard(i) {
    cards.forEach((c, j) => {
      c.classList.toggle('active', j === i);
      indicadores[j].classList.toggle('active', j === i);
    });
  }

  function updateIndicators() {
    indicadores.forEach((ind, i) => {
      ind.classList.toggle('active', i === idx);
    });
  }

  btnAnt.addEventListener('click', () => {
    idx = (idx - 1 + cards.length) % cards.length;
    showCard(idx);
  });

  btnProx.addEventListener('click', () => {
    idx = (idx + 1) % cards.length;
    showCard(idx);
  });

  indicadores.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      idx = i;
      showCard(idx);
    });
  });
}); 