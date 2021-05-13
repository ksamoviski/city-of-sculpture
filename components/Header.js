import { BetterElement } from './BetterElement.js';

const app = document.getElementById('app');

export const Header = {

    render: function() {
        let header = BetterElement('header', 'header');
        header.innerHTML = `<div class="logoDiv"></div>`
        header.rollout("translateY(0vh)");
        app.appendChild(header);

    }




}