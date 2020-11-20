const input = () => {
  const items = document.querySelectorAll('.js-input');

  items.forEach(item => {
    let input = item.querySelector('input');
    
    input.addEventListener('focus', event => {
      item.classList.add('active');
    });

    input.addEventListener('blur', event => {
      if (input.value === '') {
        item.classList.remove('active');
      }
    });
  });
};