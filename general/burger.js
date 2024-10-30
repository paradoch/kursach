document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const headerBlock = document.getElementById('headerBlock');
  
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('open');
      headerBlock.classList.toggle('open');
    });
  });
  