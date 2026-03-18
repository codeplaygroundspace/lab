document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const swatch = card.querySelector('.swatch');
    const styles = getComputedStyle(swatch);
    document.body.style.backgroundColor = styles.backgroundColor;
    document.body.style.backgroundImage = styles.backgroundImage;
    document.body.style.backgroundSize = styles.backgroundSize;
  });
});
