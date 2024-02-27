function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
};

function Gallery(element){

}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
