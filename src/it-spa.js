import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import { Home } from './views/Home';
import { RoomsList } from './views/RoomsList';
import { Nav } from './navigation/Nav';
// import { parseRequestUrl } from '../utils';
// import Error404 from './views/Error404';

// const routes = {
// 	'/': Home,
// 	'/rooms': RoomsList,
// };

// const router = () => {
// 	const request = parseRequestUrl();
// 	const parseUrl = request.resource ? `/${request.resource}` : '/';

// 	const screen = routes[parseUrl] ? routes[parseUrl] : Error404;

// 	const main = document.getElementById('main');
// 	main.innerHTML = screen.render();
// };

// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);


const main = document.querySelector('main');

// wstawiamy nawigacje poza elementem `main`
main.before(Nav());

// na start pokazujemy komponent `Home`
main.append(Home());

document.body.addEventListener('navigate', (event) => {
	const { detail: Component } = event;
	// czyscimy zawartosc elementu main
	main.innerHTML = '';
	// wstawiamy nowy komponent do elementu main
	main.append(Component());
});
