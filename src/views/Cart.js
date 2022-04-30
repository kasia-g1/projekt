import { cartManager } from '../cart/cart-manager';
import { RemoveFromCartButton } from '../common/RemoveFromCartButton';

import { Button } from '../common/Button';
import { Payment } from './Payment';

const payButton = Button({
	text: 'Payment',
	classes: 'pay btn btn-primary px-5 mt-5',
	url: 'payment',
	onClick: () => {
		const customEvent = new CustomEvent('navigate', {
			detail: Payment,
		});

		document.body.dispatchEvent(customEvent);
	},
});

export function Cart() {
	const section = document.createElement('section');
	section.className = 'text-light mt-5 px-4';

	section.innerHTML = `
        <h2>Cart</h2>
        <p>Oto zawartość Twojego koszyka.</p>
    `;

	const table = document.createElement('table');
	table.classList.add('table');

	const tableHead = document.createElement('tr');
	tableHead.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th></th>
    `;
	tableHead.className = 'text-muted';

	const tableRows = cartManager.getAllItems().map((item) => {
		const tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td></td>
        `;
		tr.className = 'text-muted';

		tr.lastElementChild.append(RemoveFromCartButton(item));

		return tr;
	});

	const tableFooter = document.createElement('tr');
	tableFooter.innerHTML = `
        <td></td>
        <td>
            <strong>${cartManager.getTotal().toFixed(2)} PLN</strong>
        </td>
        <td></td>
    `;
	tableFooter.className = 'text-light ';

	table.append(tableHead, ...tableRows, tableFooter);
	section.append(table, payButton);

	return section;
}
