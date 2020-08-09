// Fuction Selectors

const selectElement = (s) => document.querySelector(s);

// Open Menu Tab
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});

// Close Menu Tab
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});

// const header = document.querySelector('.header');
// const hamburgerMenu = document.querySelector('.hamburger-menu');

// hamburgerMenu.addEventListener('click', function () {
//   header.classList;
// });
