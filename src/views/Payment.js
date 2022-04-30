export function Payment() {
	const section = document.createElement('section');

	const h1 = document.createElement('h1');
	const p = document.createElement('p');

	section.className = ' justify-content-center align-items-center text-center ';

	h1.className = 'h1 text-light ';

	h1.innerHTML = `
    <h1>PŁATNOŚĆ</h1>
    
    `;

	p.innerHTML = `
	<p>Sposób płatności: VSIA , MASTERCARD, PAYPAL.<p>
	`;
	p.className = ' p text-light ';

	section.append(h1, p);

	return section;
}
