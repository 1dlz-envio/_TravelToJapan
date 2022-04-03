const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
	const menuBody = document.querySelector('.header__navigation');

	iconMenu.addEventListener("click", function(e) {
		menuBody.classList.toggle('active');
	});
};
