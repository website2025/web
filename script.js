//******************responsive NAVBAR*******************/
const navList = document.querySelector('.navlist');
const menuBtn = document.querySelector('.fas.fa-bars');

menuBtn.onclick = function() {
  navList.classList.toggle('active');
  menuBtn.classList.toggle('fa-arrow-up-double-line');
}


//******************FIXED NAVBAR*******************/

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle("scrolling", window.scrollY > 50);
});

//*************portfolio*************

function tabOpen(x) {
  // Get all elements with the class "portfolio-tab" and "tab-content"
  var portfolioTabs = document.querySelectorAll('.portfolio-tab');
  var tabContents = document.querySelectorAll('.tab-content');

  // Remove the "active" class from all tab buttons and tab contents
  portfolioTabs.forEach(tab => {
    tab.classList.remove('active');
  });

  tabContents.forEach(content => {
    content.classList.remove('active-content');
  });

  // Add the "active" class to the clicked tab button and the corresponding tab content
  event.currentTarget.classList.add('active');
  document.getElementById(x).classList.add('active-content');
}

//*************theme toggle*************
let themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', function() {
  // Toggle the sun icon class
  themeBtn.classList.toggle('fa-sun');
  // Toggle the moon icon class
  themeBtn.classList.toggle('fa-moon');
  
  // Toggle the 'active' class on the body
  document.body.classList.toggle('active');
});

//*******************SCROLLREVAL****************** */

const sr = ScrollReveal({
  distance: '80px',
  duration: 2500,
  delay: 200,
  reset: true,
});

sr.reveal('.home-container .left', {
  origin: 'top'
});

sr.reveal('.home-container .right', {
  origin: 'left'
});

sr.reveal('.about-container .right', {
  origin: 'top'
});

sr.reveal('.about-container .left', {
  origin: 'left'
});

sr.reveal('.services-container', {
  origin: 'bottom'
});

sr.reveal('.portfolio-container', {
  origin: 'left'
});

sr.reveal('.portfolio-buttons', {
  origin: 'top'
});

sr.reveal('.testemonial-container', {
  origin: 'bottom'
});

sr.reveal('.contact-content', {
  origin: 'top'
});

sr.reveal('.copyright', {
  origin: 'bottom'
});