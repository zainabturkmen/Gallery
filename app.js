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
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  // target
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.imageName = getElement(".image-name")
  this.modalImges = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  // self ref
  // let self = this;
  // bind functionsd()
  // this.openModal = this.openModal.bind(this);
  // event container
  this.container.addEventListener(
    "click", 
    function(e){
        if(e.target.classList.contains("img")){
          this.openModal(e.target, this.list);
        }
    }.bind(this)
  );
};

Gallery.prototype.openModal = function(selectedImage, list){
  console.log(selectedImage, list);
  this.modal.classList.add("open")
}

Gallery.prototype.setMainImages = function(selectedImage){

}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
