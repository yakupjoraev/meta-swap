// Custom Scripts
// Custom scripts


// function select() {
//   let selects = document.querySelectorAll('.select');

//   if (!selects) {
//     return null
//   }

//   selects.forEach(select => {
//     const btn = select.querySelector('.select__selected');
//     btn.addEventListener('click', () => {
//       select.classList.toggle('open')
//     })
//   });


// }

// select();


function select() {
  let selects = document.querySelectorAll('.select');

  if (!selects) {
    return null;
  }

  selects.forEach(select => {
    const btn = select.querySelector('.select__selected');
    const tokenList = select.querySelector('.select__tokens');

    if (btn && tokenList) {
      btn.addEventListener('click', () => {
        select.classList.toggle('open');

        if (select.classList.contains('open')) {
          adjustTokenListHeight(select, tokenList);
        }
      });
    }
  });
}

function adjustTokenListHeight(select, tokenList) {
  const rect = select.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const offset = -40; // расстояние от низа экрана в пикселях
  const availableHeight = windowHeight - rect.bottom - offset;

  tokenList.style.maxHeight = `${availableHeight}px`;
  tokenList.style.overflowY = 'auto'; // делаем список прокручиваемым
}

select();

window.addEventListener('resize', () => {
  const openSelects = document.querySelectorAll('.select.open .select__tokens');
  openSelects.forEach(tokenList => {
    const select = tokenList.closest('.select');
    adjustTokenListHeight(select, tokenList);
  });
});

