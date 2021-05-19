import { BetterElement, NavItem } from "./BetterElement.js";

let app = document.getElementById("app");

export const Contact = {
  navElement: new NavItem('Contact Us'),

  contactBox: BetterElement("div", "smallSide"),
  isOpen: false,

  open: function () {
    if (!this.isOpen) {
      const inputsBox = BetterElement("div");
      const contactBoxHeader = BetterElement("div");

      const inputs = {
        nameInput: BetterElement("input", "nameInput"),
        emailInput: BetterElement("input", "emailInput"),
        phoneInput: BetterElement("input", "phoneInput"),
      };

      const submitButton = BetterElement("button", "submitButton");
      submitButton.innerHTML = `<h2>Submit</h2>`;
      submitButton.addEventListener("click", this.submitContactInfo);

      contactBoxHeader.id = "contactBoxHeader";
      inputs.nameInput.id = "nameInput";
      inputs.phoneInput.id = "phoneInput";
      inputs.emailInput.id = "emailInput";

      inputs.nameInput.placeholder = "Name";
      inputs.phoneInput.placeholder = "Phone Number";
      inputs.emailInput.placeholder = "Email";

      for (let input in inputs) {
        inputsBox.appendChild(inputs[input]);
      }

      app.appendChild(this.contactBox).appendChild(inputsBox);
      
      this.contactBox.appendChild(submitButton);

      setTimeout(() => {
        this.contactBox.style.transform = "translateX(20vw)";
      }, 100);

      for (let key in inputs) {
        setTimeout(() => {
          inputs[key].rollout("translateX(0vw)");
        }, 1000);
      }
    }

    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      this.contactBox.rollout("translateX(-10vw)");
      this.contactBox.eraseAllKids();
      setTimeout(() => {
        app.removeChild(this.contactBox);
      }, 300);
    }
    this.navElement.switchOff(true);

    this.isOpen = false;
  },

  submitContactInfo: function () {
    let contactInfo = {
      fullName: document.querySelector(".nameInput").value,
      phoneNumber: document.querySelector(".phoneInput").value,
      emailAddress: document.querySelector(".emailInput").value,
      message: document.querySelector(".messageInput").value,
    };

    fetch("https://agile-basin-20718.herokuapp.com/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
    });
  },
};
