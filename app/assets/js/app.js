import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const featureItemReveal = new RevealOnScroll($('.feature-item'), '85%');
const testimonialReveal = new RevealOnScroll($('.testimonial'), '60%');