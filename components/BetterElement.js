export const BetterElement = (tag, ...classList) => {
  let elementToReturn = document.createElement(tag);

  if (classList) {
    classList.forEach((className) => elementToReturn.classList.add(className));
  }

  elementToReturn.rollout = (translationParameter) => {
    elementToReturn.style.transform = translationParameter;
  };

  elementToReturn.eraseAllKids = () => {
    while (elementToReturn.lastChild) {
      elementToReturn.removeChild(elementToReturn.lastChild);
    }
  };

  return elementToReturn;
};

export const waitAndThen = (callback, time) => {
  setTimeout(() => {
    callback();
  }, time);
};

export const XOut = () => {
  let x = BetterElement("h2", "xOut");
  x.innerText = 'X';
  
  x.addEventListener('click', ()=> { 
    let littleSide = document.getElementById('littleSide');
    littleSide.rollout('translateX(0vw)');
  
  })
  
  
  return x;


};
