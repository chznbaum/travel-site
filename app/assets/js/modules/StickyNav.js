import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyNav {
  constructor() {
    this.navbar = $('.navbar');
    this.navTriggerElement = $('.header__description');
    this.createNavWaypoint();
    this.pageSections = $('.page-section');
    this.navLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.navLinks.smoothScroll();
  }

  createNavWaypoint() {
    const that = this;
    new Waypoint({
      element: this.navTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.navbar.addClass('navbar--dark');
        } else {
          that.navbar.removeClass('navbar--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    const that = this;
    this.pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            const matchingNavLink = currentPageSection.getAttribute('data-matching-link');
            that.navLinks.removeClass('is-current-link');
            $(matchingNavLink).addClass('is-current-link');
          }
        },
        offset: '5%'
      });
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            const matchingNavLink = currentPageSection.getAttribute('data-matching-link');
            that.navLinks.removeClass('is-current-link');
            $(matchingNavLink).addClass('is-current-link');
          }
        },
        offset: '-20%'
      });
    });
  }
}

export default StickyNav;