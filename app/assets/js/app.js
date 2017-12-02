import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyNav from './modules/StickyNav';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const featureItemReveal = new RevealOnScroll($('.feature-item'), '85%');
const testimonialReveal = new RevealOnScroll($('.testimonial'), '60%');
const stickyNav = new StickyNav();