// Custom scripts


function select() {
  const container = document.querySelector('.select');

  if (!container) {
    return null
  }


  const btn = container.querySelector('.select__btn');
  btn.addEventListener('click', () => {
    container.classList.toggle('open')
  })
}

select();