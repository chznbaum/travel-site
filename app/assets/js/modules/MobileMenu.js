import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.navbar = $('.navbar');
    this.menuIcon = $('.navbar__menu-icon');
    this.menuContent = $('.navbar__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('navbar__menu-content--unhidden');
    this.navbar.toggleClass('navbar--is-expanded');
    this.menuIcon.toggleClass('navbar__menu-icon--close-x');
  }
}

export default MobileMenu;