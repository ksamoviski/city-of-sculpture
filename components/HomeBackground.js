import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");

let backgroundImage = BetterElement ( "div", "aboutImage" )

export const HomeBackground = {           
    render: function(){
    // let backgroundImage = BetterElement ( "div", "aboutImage" )
app.appendChild (backgroundImage)

    },

    close: function(){
        backgroundImage.style.display = "none";

    }

}


