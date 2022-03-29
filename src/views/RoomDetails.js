import { Button } from '../common/Button';
import { RoomsList } from './RoomsList';

const backButton = Button({
	text: 'Back',
	classes: 'back btn btn-primary px-5 mt-5',
	onClick: () => {
		const customEvent = new CustomEvent('navigate', {
			detail: RoomsList,
		});

		document.body.dispatchEvent(customEvent);
	},
});

export function RoomDetails(id) {
	const section = document.createElement('section');
	// const img = document.createElement('img');

	section.className =
		'details  mt-5 justify-content-center align-items-center text-center text-light';

	section.innerHTML = `
            <h2>Room Details</h2>
            <header>Loading...</header>
        `;
        // img.src = require('../assets/room.jpg');
        // img.className = 'img_room';

	fetch(`http://localhost:3000/rooms/${id}`)
		.then((response) => response.json())
		.then((room) => {
			section.querySelector('header').remove();

			const article = document.createElement('article');
			article.innerHTML = `
                <h3>${room.name}</h3>
                <hr>
                <p>${room.description}</p>
                <hr>
                <p>${room.beds} x 🛏️</p>
                <p>${room.guests} x 👨</p>
                <p>
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
            `;


			section.append(article, backButton);
		});

	return section;
}
