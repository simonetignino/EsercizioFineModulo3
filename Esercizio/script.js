// // funzione per lo scroll

let arrayElementi = document.getElementsByClassName('hidden');

// Funzione per controllare quando mostrare l'elemento
function checkScroll() {
  // Calcola l'altezza a cui l'utente ha scrollato
  const scrollPosition = window.scrollY;
  
  // Altezza dell'elemento da mostrare

  
  // Se l'utente ha scrollato fino all'altezza dell'elemento, mostralo
  if (scrollPosition >= 330) {
    arrayElementi[0].style.display = 'block';
  } else {
    arrayElementi[0].style.display = 'none';
  }
  if (scrollPosition >= 650) {
    arrayElementi[1].style.display = 'block';
  } else {
    arrayElementi[1].style.display = 'none';
  }
  if (scrollPosition >= 1050) {
    arrayElementi[2].style.display = 'block';
  } else {
    arrayElementi[2].style.display = 'none';
  }
}

// Aggiungi un ascoltatore di eventi di scroll
window.addEventListener('scroll', checkScroll);

