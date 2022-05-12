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

	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();

	dateArrival.innerHTML = `
    <form>
    <label>Rezerwacja od: </label> 
        <input type="date" min="${yyyy}-${mm}-${dd}" max="${
		yyyy + 1
	}-${mm}-${dd}">
    </form>
    `;

	dateDeparture.className = 'departureInput';
	dateDeparture.innerHTML = `
    <form> 
    <label>Rezerwacja do: </label> 
        <input type="date" min="${yyyy}-${mm}-${dd}" max="${
		yyyy + 1
	}-${mm}-${dd}">
    </form>
    `;

	section.append(h1, p, divShadow, dateArrival, dateDeparture, moreButton);

	return section;
}

// import { Button } from '../common/Button';
// import { RoomsList } from './RoomsList';

// const moreButton = Button({
// 	text: 'More',
// 	classes: 'more btn btn-primary px-5 mt-5',
// 	url: 'rooms',
// 	onClick: () => {
// 		const customEvent = new CustomEvent('navigate', {
// 			detail: RoomsList,
// 		});

// 		document.body.dispatchEvent(customEvent);
// 	},
// });

// export function Home() {
// 	const section = document.createElement('section');

// 	const h1 = document.createElement('h1');
// 	const p = document.createElement('p');
// 	const divShadow = document.createElement('divShadow');

// 	const dateArrival = document.createElement('dateArrival');
// 	const dateDeparture = document.createElement('dateDeparture');

// 	const onchangeArrival = () => {
// 		const arrival = document.getElementById('inputArrival').value;
// 		localStorage.setItem('arrival', arrival);
// 		console.log(localStorage.getItem('arrival'));
// 	};
// 	const onchangeDeparture = () => {
// 		const departure = document.getElementById('inputDeparture').value;
// 		localStorage.setItem('departure', departure);
// 		console.log(localStorage.getItem('departure'));

// 	};

// 	divShadow.className = 'hero-shadow ';

// 	section.className =
// 		'home justify-content-center align-items-center text-center ';

// 	h1.className = 'h1 text-light ';

// 	h1.innerHTML = `
//     <h1>Home</h1>

//     `;

// 	p.innerHTML = `
// 	<p>Witaj w IT SPA. Każdy programista lubi tu odpoczywać. Zapoznaj się z naszą ofertą.</p>
// 	`;
// 	p.className = ' p text-light ';

//     const today = new Date()
//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const yyyy = today.getFullYear();

//     dateArrival.innerHTML = `
//     <form>
//     	<label>Rezerwacja od: </label>
//         <input id="inputArrival" type="date" value="${localStorage.getItem('arrival')}" min="${yyyy}-${mm}-${dd}" max="${yyyy+1}-${mm}-${dd}" onchange="${onchangeArrival()}">
//     </form>
//     `;

//     dateDeparture.className = 'departureInput';
//     dateDeparture.innerHTML = `
//     <form>
//     	<label>Rezerwacja do: </label>
//         <input id ="inputDeparture" type="date" value="${localStorage.getItem('departure')}" min="${yyyy}-${mm}-${dd}" max="${yyyy+1}-${mm}-${dd}" onchange="${onchangeDeparture()}">
//     </form>
//     `;

// 	section.append(h1, p, divShadow, dateArrival, dateDeparture, moreButton);

// 	return section;
// }
