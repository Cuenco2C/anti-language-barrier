document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll('.lang-word');
  words.forEach(word => {
    const randomTop = Math.random() * 0.85 + 0.05;
    word.style.setProperty('--random-top', randomTop.toFixed(2));
  });
});
