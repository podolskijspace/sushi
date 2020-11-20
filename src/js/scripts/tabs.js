const tabs = () => {
	const btns = document.querySelectorAll('[data-tabclass]');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const contentData = btn.getAttribute('data-tabclass');
      const btnNumberData = btn.getAttribute('data-tabnumber');
      const contentNodes = document.querySelectorAll(`.${contentData}`);
      const btnSiblings = getSiblings(btn);

      // toggle btn class
      btnSiblings.forEach((btnSibling) => {
        btnSibling.classList.remove('active');
      });

      btn.classList.add('active');

      // toggle contentNodes
      contentNodes.forEach((contentNode) => {
        const items = Array.from(contentNode.children);

        items.forEach((item) => {
          const itemNumberData = item.getAttribute('data-tabnumber');
          const isNumberEqual = itemNumberData == btnNumberData;

          if(isNumberEqual) {
            const siblings = getSiblings(item);

            siblings.forEach((sibling) => {
              sibling.classList.remove('active');
            });

            item.classList.add('active');
          }
        });
      });
    });
  });

  //для страницы suppl product
  function makeFirstActive () {
    const tabsCards = document.querySelectorAll('.js-supplier-tab-content>li');
    if (window.innerWidth <= 980) {
      btns.forEach ((item, i) => {
        if (i) {
          item.classList.remove('active');
        }
        else {
          console.log('true');
          item.classList.add('active');
        }
      })
  
      tabsCards.forEach ((item, i) => {
        if (i) {
          item.classList.remove('active');
        }
        else {
          item.classList.add('active');
        }
      })
    }
  }

  if (document.querySelector('.js-supplier-tab-content')) {
    window.addEventListener('resize', makeFirstActive);
  }
};
