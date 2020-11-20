function popupPhoto () {
  const itemsSlider = document.querySelectorAll('.js-show-scale'),
        itemsAccordion = document.querySelectorAll('.js-show-accordion'),
        popup = document.querySelector('.js-popup-scale'),
        imgPopup = popup.querySelector('img'),
        textPopup = popup.querySelector('span');

  itemsSlider.forEach(item => {
    const img = item.querySelector('img'),
          text = item.querySelector('.js-text');

    
    showPopup(img, img.src, text);
  })

  itemsAccordion.forEach(item => {
    if (!item.classList.contains('disabled')) {
      showPopup(item, item.dataset.img, false)
    }
  })

  

  popup.addEventListener('click', event => {
    popup.classList.remove('active');
    NKH.body.classList.remove('fixed');
  })
}