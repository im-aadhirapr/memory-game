const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function(event) {
    if (event.target.classList.contains('cover')) {
      event.target.classList.add('flip');
      event.target.classList.remove('cover');
    }
  });
}
