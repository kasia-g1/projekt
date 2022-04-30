import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import { Home } from './views/Home';
import { RoomsList } from './views/RoomsList';
import { Nav } from './navigation/Nav';

window.addEventListener('load', () => history.pushState({}, '', '/'));

const main = document.querySelector('main');

main.before(Nav());

main.append(Home());

document.body.addEventListener('navigate', (event) => {
	const { detail: Component } = event;

	main.innerHTML = '';

	main.append(Component());
});
