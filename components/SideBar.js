import { BetterElement } from './BetterElement.js';

const app = document.getElementById('app');

const menuItems = ['About Us', 'The Sculptures', 'The Artists', 'Getting Around', 'Sculptural Bike Racks', 'Hamilton', 'Contact Us']


export const SideBar = {

    open: function() {
        let sideBar = BetterElement('div', 'sideBar');

        menuItems.forEach(item => {
            let menuItem = document.createElement('h2', 'sideBarItem');
            menuItem.innerText = item;
            sideBar.appendChild(menuItem);






        })
        app.appendChild(sideBar);
        setTimeout(()=> { sideBar.style.transform = 'translateX(10vw)'}, 100);



    }



}