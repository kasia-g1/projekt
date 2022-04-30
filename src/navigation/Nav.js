import { Home } from '../views/Home';
import { RoomsList } from '../views/RoomsList';
import { Button } from '../common/Button';
import { TreatmentsList } from '../views/TreatmentsList';
import { Cart } from '../views/Cart';

const navItems = [
	{ name: 'Home', url: '/', component: Home },
	{ name: 'Rooms', url: 'rooms', component: RoomsList },
	{ name: 'Treatments', url: 'treatments', component: TreatmentsList },
	{ name: '🛒', url: 'cart', component: Cart },
];

export function Nav() {
	const nav = document.createElement('nav');

	nav.className = 'nav  navbar bg-light fixed-top ';

	const navButtons = navItems.map((item) => {
		return Button({
			text: item.name,
			classes: 'btn ',
			url: item.url,
			onClick: (event) => {
				const siblings = event.target.parentElement.children;
				Array.from(siblings).forEach((element) => {
					element.classList.remove('btn-active');
				});
				event.target.classList.add('btn-active');

				const customEvent = new CustomEvent('navigate', {
					detail: item.component,
				});

				document.body.dispatchEvent(customEvent);
			},
		});
	});

	navButtons[0].classList.add('btn-active');

	nav.append(...navButtons);

	return nav;
}
