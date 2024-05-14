// Custom scripts


function select() {
  let selects = document.querySelectorAll('.select');

  if (!selects) {
    return null
  }

  selects.forEach(select => {
    const btn = select.querySelector('.select__btn');
    btn.addEventListener('click', () => {
      select.classList.toggle('open')
    })
  });


}

select();