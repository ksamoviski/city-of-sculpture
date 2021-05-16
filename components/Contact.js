import { BetterElement } from "./BetterElement.js";

let app = document.getElementById("app");

export const Contact = {
  title: "Contact Us",
  contactBox: BetterElement("div", "smallSide"),
  isOpen: false,

  open: function () {
    const inputsBox = BetterElement("div");
    const contactBoxHeader = BetterElement("div");
    const header = BetterElement("h2");
    header.innerText =
      "Feel free to share as much information as you'd like here";
    const myContactInfoBox = BetterElement("div", "myContactInfo");
    const myContactInfoSentence = BetterElement("h2");
    myContactInfoSentence.innerText = "Or simply write me at...";
    const myEmail = BetterElement("h1", "myEmail");
    myEmail.innerText = "kenjsoftware@gmail.com";
    const messageInput = BetterElement("textArea", "messageInput");
    messageInput.setAttribute("cols", "60");
    messageInput.setAttribute("rows", "10");

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

    myContactInfoBox.appendChild(myContactInfoSentence);

    this.contactBox.appendChild(myContactInfoBox).appendChild(myEmail);
    this.contactBox.appendChild(contactBoxHeader).appendChild(header);
    app.appendChild(this.contactBox).appendChild(inputsBox);
    this.contactBox.appendChild(messageInput);
    this.contactBox.appendChild(submitButton);

    setTimeout(() => {
      this.contactBox.style.transform = "translateX(20vw)";
    }, 100);

    for (let key in inputs) {
      setTimeout(() => {
        inputs[key].rollout("translateX(0vw)");
      }, 1000);
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
