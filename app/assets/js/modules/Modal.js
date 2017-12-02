import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));

    // Pushes the escape key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(event) {
    if(event.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--activated');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--activated');
    return false;
  }
}

export default Modal;