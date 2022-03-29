import { RoomsListItem } from './RoomsListItem';

export function RoomsList() {
	const section = document.createElement('section');

	section.className = 'title text-center text-light'

	section.innerHTML = `
    <h2>Rooms List</2>
    <header>Loading ... </header>
    `;

	fetch('http://localhost:3000/rooms')
		.then((response) => response.json())
		.then((rooms) => {
			const ul = document.createElement('ul');

			const lis = rooms.map((room) => RoomsListItem(room));

			

			ul.className = 'rooms  justify-content-center align-items-center text-center'
			ul.append(...lis);
			section.querySelector('header').remove();
			section.append(ul);
		});

	return section;
}
