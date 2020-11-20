function popup () {
  const popup = document.querySelectorAll('.js-popup'),
        date  = (new Date()).getHours() + (new Date()).getHours() / 60;

  popup.forEach(item => {
    item.addEventListener('click', event => {
      if (event.target.closest('.js-close') || !event.target.closest('.popup__wrapper')) {
        item.classList.remove('active');
        NKH.body.classList.remove('fixed');
      }
    });
  });

  function showPopup (btn, popup) {
    btn.forEach(item => {
      item.addEventListener('click', event => {
        popup.classList.add('active');
        NKH.body.classList.add('fixed');
      })
    })
  }

  //Вызов модалок
  showPopup(document.querySelectorAll('.page-header__time'), document.querySelector('.js-popup-night')); //служебное, убрать!!!
  showPopup(document.querySelectorAll('.js-popup-btn-map'), document.querySelector('.js-popup-map'));
  showPopup(document.querySelectorAll('.js-popup-btn-login'), document.querySelector('.js-popup-login'));
  showPopup(document.querySelectorAll('.js-popup-btn-code'), document.querySelector('.js-popup-code'));
  showPopup(document.querySelectorAll('.js-popup-btn-personal'), document.querySelector('.js-popup-personal'));
  showPopup(document.querySelectorAll('.js-popup-btn-cart'), document.querySelector('.js-popup-cart'));
  showPopup(document.querySelectorAll('.js-popup-btn-delivery'), document.querySelector('.js-popup-delivery'));
  showPopup(document.querySelectorAll('.js-popup-btn-address'), document.querySelector('.js-popup-address'));

  if (date >= 22 || date <= 9.50) {
    document.querySelector('.js-popup-night').classList.add('active');
    NKH.body.classList.add('fixed');
  }
}