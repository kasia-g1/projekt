import { Button } from '../common/Button';
import { RoomsList } from './RoomsList';


const moreButton = Button({
	text: 'More',
	classes: 'more btn btn-primary px-5 mt-5',
	onClick: () => {
		const customEvent = new CustomEvent('navigate', {
			detail: RoomsList,
		});

		document.body.dispatchEvent(customEvent);
	},
});



export function Home() {
	const section = document.createElement('section');
	// const div = document.createElement('div');
	const h1 = document.createElement('h1');
	const p = document.createElement('p');
	const divShadow = document.createElement('divShadow');

	divShadow.className = 'hero-shadow ';

	



	// const img = document.createElement('img');

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
	// img.src = require('../assets/computers.png');

	// img.className = 'img';

	section.append(h1, p, divShadow, moreButton);

	return section;
}



