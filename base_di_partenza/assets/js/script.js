const scrollTopButton = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    //se scende più di 200px mostra il pulsante
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

// Funzione per scorrere verso l'alto quando cliccato
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // scorre alla posizione top 0 in modo fluido
  });
});
