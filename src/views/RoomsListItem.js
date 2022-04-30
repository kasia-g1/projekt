import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';
import { AddToCartButton } from '../common/AddToCartButton';

export function RoomsListItem(room) {
	const roomUrl = room.name.toLowerCase().split(' ');

	const li = document.createElement('li');
	li.className = 'card p-3 m-3 text-light';

	li.innerHTML = `
            <h4>${room.name}</h4>
            <p>
                <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
        `;

	li.append(
		Button({
			text: 'Read More',
			classes: 'btn btn-primary mt-5 px-6',
			url: `rooms/${roomUrl.join('-')}`,
			onClick: () => {
				const customEvent = new CustomEvent('navigate', {
					detail: () => RoomDetails(room.id),
				});

				document.body.dispatchEvent(customEvent);
			},
		})
	);

	li.append(AddToCartButton(room));

	return li;
}
