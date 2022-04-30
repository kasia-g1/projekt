export function Button(options) {
	const {
		text = '',
		classes = '',
		url = location.href,
		onClick = () => {},
	} = options;

	const button = document.createElement('button');

	button.setAttribute('type', 'button');
	button.innerText = text;
	button.className = classes;
	button.addEventListener('click', onClick);
	button.addEventListener('click', () => history.pushState({}, '', url));

	return button;
}
