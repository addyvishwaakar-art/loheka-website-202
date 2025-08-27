const navLinks = document.querySelectorAll('.nav-link');
const sections = ['home', 'about', 'products', 'enquiry', 'contact'];
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    sections.forEach(section => {
      document.getElementById(section).style.display = "none";
    });
    document.getElementById(link.textContent.trim().toLowerCase().replace(/\s+/g, '')).style.display = "block";
    if(link.textContent.trim().toLowerCase() === 'home'){
      document.getElementById('home').style.display = "block";
    }
  });
});

// Enquiry Form
document.getElementById('enquiryForm').onsubmit = function(e){
  e.preventDefault();
  document.getElementById('enquiryMsg').textContent = "धन्यवाद! आपकी inquiry भेज दी गई है।";
  this.reset();
};
