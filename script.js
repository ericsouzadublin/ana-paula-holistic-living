// This function scrolls smoothly to a section on the same page
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Mobile menu elements
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

// This event opens and closes the mobile menu
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", function () {
    siteNav.classList.toggle("open");
  });
}

// This closes the mobile menu after a link is clicked
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (siteNav) {
      siteNav.classList.remove("open");
    }
  });
});

// Services page interactive button
const exploreBtn = document.getElementById("exploreBtn");
const servicesBox = document.getElementById("servicesBox");

// This button reveals or hides the services content
if (exploreBtn && servicesBox) {
  exploreBtn.addEventListener("click", function () {
    servicesBox.classList.toggle("show");

    if (servicesBox.classList.contains("show")) {
      exploreBtn.textContent = "Hide Services";
    } else {
      exploreBtn.textContent = "Explore Services";
    }
  });
}

// Contact form elements
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// This validates the contact form according to assignment rules
if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const query = document.getElementById("query").value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^\d{9,10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields
    if (fullName === "" || phone === "" || email === "" || query === "") {
      formMessage.textContent = "Please complete all fields before submitting the form.";
      formMessage.className = "form-message error-message";
      return;
    }

    // Check name format
    if (!namePattern.test(fullName)) {
      formMessage.textContent = "Name must contain letters and spaces only.";
      formMessage.className = "form-message error-message";
      return;
    }

    // Check phone format
    if (!phonePattern.test(phone)) {
      formMessage.textContent = "Phone number must contain only numbers and be 9 or 10 digits long.";
      formMessage.className = "form-message error-message";
      return;
    }

    // Check email format
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "form-message error-message";
      return;
    }

    // Success message
    formMessage.textContent = "Thank you. Your message has been prepared successfully.";
    formMessage.className = "form-message success-message";

    // Reset form after success
    contactForm.reset();
  });
}