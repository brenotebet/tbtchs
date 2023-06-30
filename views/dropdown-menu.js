    const toggleBtn = document.querySelector('.toggle-btn');
    const toggleBtnIcon = document.querySelector('.toggle-btn img');
    const dropDownMenu = document.querySelector('.dropdown-menu');
    const body = document.querySelector('body');
    const dialogBtn = document.querySelector('.dialog-btn');
    const dialog = document.querySelector('.dialog-inputs');
    const closingBtn = document.querySelector('#closing-btn');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        body.classList.toggle('menu-open');
    }

    body.addEventListener('click', function (event) {
        if (!dropDownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
            dropDownMenu.classList.remove('open');
            body.classList.remove('menu-open');
    }
})

dialogBtn.addEventListener('click', () => {
    dialog.showModal();
  });

closingBtn.addEventListener('click', () => {
    dialog.close();
  });