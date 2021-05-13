import { BetterElement } from './BetterElement.js';

const app = document.getElementById('app');

export const Header = {

    render: function() {
        console.log('I am the walrus');
        let header = BetterElement('header', 'header');
        header.innerText = 'hello lamaaaaa';
        header.rollout("translateY(0vh)");
        app.appendChild(header);

    }




}