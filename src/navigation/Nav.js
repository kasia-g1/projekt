import { Home } from '../views/Home';
import { RoomsList } from '../views/RoomsList';
import { Button } from '../common/Button';
import { TreatmentsList } from '../views/TreatmentsList';
import { Cart } from '../views/Cart';

const navItems = [
    { name: 'Home', component: Home },
    { name: 'Rooms', component: RoomsList },
    { name: 'Treatments', component: TreatmentsList },
    { name: '🛒', component: Cart }
    //kolene obiekty tutaj jesli wiecej rzeczy w menu
];

export function Nav() {
    const nav = document.createElement('nav');
    
    nav.className ='nav  navbar bg-light fixed-top ';
    
    // const containerFluid = document.createElement ('containerFluid');
    // containerFluid.className ='container-fluid'
    
    // nav.style.backgroundColor = '#ffc107';
    // nav.style.display='flex';
    // nav.style.justifyContent ='space-around';
    // nav.style.alignItems='center'

    const navButtons = navItems.map(item => {
        return Button({
            text: item.name,
            classes: 'btn ',
            onClick: event => {
                const siblings = event.target.parentElement.children;
                Array.from(siblings).forEach(element => {
                    element.classList.remove('btn-active');
                });
                event.target.classList.add('btn-active');

                const customEvent = new CustomEvent('navigate', {
                    detail: item.component
                });
        
                document.body.dispatchEvent(customEvent);
            }
        });
    });

    // aktywujemy pierwszy guzik w menu -- Home
    navButtons[0].classList.add('btn-active');

    
    nav.append(...navButtons);
    

    return nav;
}


