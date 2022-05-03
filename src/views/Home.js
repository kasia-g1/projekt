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

// let date = new Date();
// let tdate = date.getDate();
// let month = date.getMonth() + 1;

// if (tdate < 10) {
// 	tdate = '0' + tdate;
// }
// if (month < 10) {
// 	month = '0' + month;
// }
// let year = date.getUTCFullYear();
// let minDate = year + '-' + month + '-' + tdate;

// let nextYear = date.getUTCFullYear() + 1;
// let maxDate = nextYear + '-' + month + '-' + tdate;

// document.getElementsByClassName('arrivalInput').setAttribute('min', minDate);

// document.getElementsByClassName('departureInput').setAttribute('max', maxDate);

export function Home() {
	const section = document.createElement('section');

	const h1 = document.createElement('h1');
	const p = document.createElement('p');
	const divShadow = document.createElement('divShadow');

	const dateArrival = document.createElement('dateArrival');
	const dateDeparture = document.createElement('dateDeparture');
	

	divShadow.className = 'hero-shadow ';

	section.className =
		'home justify-content-center align-items-center text-center ';

	h1.className = 'h1 text-light ';

	h1.innerHTML = `
    <h1>Home</h1>
    
    `;

	p.innerHTML = `
	<p>Witaj w IT SPA. Każdy programista lubi tu odpoczywać. Zapoznaj się z naszą ofertą.</p>
	`;
	p.className = ' p text-light ';

	dateArrival.className = 'arrivalInput';


	dateArrival.innerHTML = `
	<form>
	<label>Rezerwacja od: </label> 
		<input type="date" >
	</form>
	`;

	dateDeparture.className = 'departureInput';
	dateDeparture.innerHTML = `
	<form> 
	<label>Rezerwacja do: </label> 
		<input type="date" >
	</form>
	`;

	section.append(h1, p, divShadow, dateArrival, dateDeparture, moreButton);

	return section;
}
