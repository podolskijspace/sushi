const NKH = {};
NKH.body = document.querySelector('body');
NKH.ESC_CODE = 27;
NKH.siteContent = document.querySelector('.site-content');
NKH.footer = document.querySelector('.page-footer');
NKH.isIe11 = !!window.MSInputMethodContext && !!document.documentMode;


if(NKH.isIe11){
  NKH.body.classList.add('ie11');
}

var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }

  return siblings;

};

function top_walker (node, test_func, last_parent) {
	while ( node && node !== last_parent ) {
		if ( test_func(node) ) {
			return node;
		}
		node = node.parentNode;
	}
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const onPageRdy = () => {
  // utility
  popup();
  tabs();
  input();

  var myNewSwiper = new Swiper('.js-new-slider', {
    // Optional parameters
    spaceBetween: 30,
    slidesPerView: 3,
  });

  

  var myPopupCartFreeSwiper = new Swiper('.js-popup-free-slider', {
    // Optional parameters
    spaceBetween: 15,
    slidesPerView: 2,
  });

  var myPopupCartSauseSwiper = new Swiper('.js-popup-sause-slider', {
    // Optional parameters
    spaceBetween: 13,
    slidesPerView: 5,
  });

  var mySwiper = new Swiper('.js-hero-slider', {
    // Optional parameters
    spaceBetween: 36,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero__slider-arrow--next',
      prevEl: '.hero__slider-arrow--prev',
    },
  });
};

onPageRdy();


