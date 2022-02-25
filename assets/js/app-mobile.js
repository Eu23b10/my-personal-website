const btnMobile = document.querySelector('.mobile-menu')

function toggleMenu() {
	const MENU = document.querySelector('#nav-menu')
	MENU.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)