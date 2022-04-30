import { Button } from '../common/Button';
import { RoomsList } from './RoomsList';

const moreButton = Button({
	text: 'More',
	classes: 'more btn btn-primary px-5 mt-5',
	url: 'rooms',
	onClick: () => {
		const customEvent = new CustomEvent('navigate', {
			detail: RoomsList,
		});

		document.body.dispatchEvent(customEvent);
	},
});

export function Home() {
	const section = document.createElement('section');

	const h1 = document.createElement('h1');
	const p = document.createElement('p');
	const divShadow = document.createElement('divShadow');

	divShadow.className = 'hero-shadow ';

	section.className =
		'home justify-content-center align-items-center text-center ';

	h1.className = 'h1 text-light ';

	h1.innerHTML = `
    <h1>Home</h1>
    
    `;

	p.innerHTML = `
	<p>Witaj w IT SPA. Każdy programista lubi tu odpoczywać. Zapoznaj się z naszą ofertą.<p>
	`;
	p.className = ' p text-light ';

	section.append(h1, p, divShadow, moreButton);

	return section;
}
