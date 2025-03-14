import { PageHome } from '../pages/PageHome.js';
import { PageApiData } from '../pages/PageApiData.js';
import { PageLocalData } from '../pages/PageLocalData.js';
import { PageLocalStorage } from '../pages/PageLocalStorage.js';
import * as config from '../config.js';
import { PageSettings } from '../pages/PageSettings.js';

export const Nav = () => {
	setTimeout(() => {
		const navElemLinkElems = document.querySelectorAll("nav a");
		const pageOutletElem = document.querySelector(".pageOutlet");

		navElemLinkElems.forEach((linkElem) => {
			linkElem.addEventListener("click", (event) => {
				const pageIdCode = linkElem.getAttribute("href");
				const navMenuElem = document.querySelector(`nav ul li a[href="${pageIdCode}"`);
				const navElem = document.querySelector('nav');

				if (config.getResponsiveStatus() === 'mobile') {
					navElem.style.display = 'none';
				}

				navElemLinkElems.forEach((linkElem) => {
					linkElem.classList.remove('active');
				});

				navMenuElem.classList.add('active');
				let html = '';
				switch (pageIdCode) {
					case '/':
						html = PageHome();
						break;
					case '/localdata':
						html = PageLocalData();
						break;
					case '/apidata':
						html = PageApiData();
						break;
					case '/localstorage':
						html = PageLocalStorage();
						break;
					case '/settings':
						html = PageSettings();
						break;
				}
				pageOutletElem.innerHTML = html;
				event.preventDefault();
			});
		});
	}, 0);
	return /*html*/ `
<nav>
	<ul>
		<li>
			<a class="active" href="/">Home</a>
		</li>
		<li>
			<a href="/localdata">Local JSON Data</a>
		</li>
		<li>
			<a href="/apidata">External API Data</a>
		</li>
		<li>
			<a href="/localstorage">localStorage CRUD</a>
		</li>
		<li>
			<a href="/settings">Settings</a>
		</li>
	</ul>
</nav>
`;
};