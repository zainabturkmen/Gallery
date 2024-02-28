function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  };

class Gallery{
    constructor(element){
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
        this.closeModal = this.closeModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.choseImage = this.choseImage.bind(this);
        // event container
        this.container.addEventListener(
          "click", 
          function(e){
              if(e.target.classList.contains("img")){
                this.openModal(e.target, this.list);
              }
          }.bind(this)
        );
    }

    openModal(selectedImage, list){
        this.setMainImages(selectedImage);
        this.modalImges.innerHTML = list.map(function(image){
          return `<img src="${image.src}" title="${image.title}" 
          dataset-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id? "modal-img selected": "modal-img"}"/>`
        }).join("");
        this.modal.classList.add("open");
        this.closeBtn.addEventListener("click", this.closeModal);
        this.nextBtn.addEventListener("click", this.nextImage);
        this.prevBtn.addEventListener("click", this.prevImage);
        this.modalImges.addEventListener("click", this.choseImage);
    }

    setMainImages(selectedImage){
        this.modalImg.src = selectedImage.src 
        this.imageName.textContent = selectedImage.title;
    };

    closeModal(){
        this.modal.classList.remove("open");
        this.closeBtn.removeEventListener("click", this.closeModal);
        this.nextBtn.removeEventListener("click", this.nextImage);
        this.prevBtn.removeEventListener("click", this.prevImage);
        this.modalImges.removeEventListener("click", this.choseImage);
    };

    nextImage(){
        const selected = this.modalImges.querySelector(".selected");
        const next = selected.nextElementSibling || this.modalImges.firstElementChild;
        selected.classList.remove("selected");
        next.classList.add("selected");
        this.setMainImages(next);
    };

    prevImage(){
        const selected = this.modalImges.querySelector(".selected");
        const prev = selected.previousElementSibling || this.modalImges.lastElementChild;
        selected.classList.remove("selected");
        prev.classList.add("selected");
        this.setMainImages(prev);
    };

    choseImage(e){
        if(e.target.classList.contains("modal-img")){
            const selected = this.modalImges.querySelector(".selected");
            selected.classList.remove("selected")
            this.setMainImages(e.target)
            e.target.classList.add("selected")
          }
    };
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
