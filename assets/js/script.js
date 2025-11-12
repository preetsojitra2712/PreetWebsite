'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables (guarded for optional presence)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

if (testimonialsItem.length && modalContainer && modalCloseBtn && overlay && modalImg && modalTitle && modalText) {
  // modal toggle function
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  // add click event to all modal items
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }

  // add click event to modal close button
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
if (filterBtn.length) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// EmailJS configuration
// TODO: Replace these with your EmailJS credentials
// Get them from: https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
const RECIPIENT_EMAIL = "psoji001@ucr.edu"; // Your email address

// Formspree configuration (EASIER ALTERNATIVE - Recommended!)
// 1. Go to https://formspree.io/ and sign up (free)
// 2. Create a new form
// 3. Set recipient email to: psoji001@ucr.edu
// 4. Copy your form endpoint (looks like: https://formspree.io/f/YOUR_FORM_ID)
// 5. Paste it below:
const FORMSPREE_ENDPOINT = ""; // Paste your Formspree endpoint here

// Initialize EmailJS (only if using EmailJS)
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// add event to all form input field
if (form) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // Handle form submission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Check if Formspree is configured (EASIEST OPTION)
    if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT !== "") {
      // Use Formspree
      const formData = new FormData(form);
      
      // Disable button and show loading state
      formBtn.setAttribute("disabled", "");
      const originalText = formBtn.querySelector("span").textContent;
      formBtn.querySelector("span").textContent = "Sending...";

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          // Show success message
          formBtn.querySelector("span").textContent = "Message Sent!";
          formBtn.style.background = "#4caf50";
          
          // Reset form
          form.reset();
          formBtn.setAttribute("disabled", "");
          
          // Reset button after 3 seconds
          setTimeout(() => {
            formBtn.querySelector("span").textContent = originalText;
            formBtn.style.background = "";
          }, 3000);
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        formBtn.querySelector("span").textContent = "Error! Try Again";
        formBtn.style.background = "#f44336";
        
        setTimeout(() => {
          formBtn.querySelector("span").textContent = originalText;
          formBtn.style.background = "";
          if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
          }
        }, 3000);
      }
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" || 
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || 
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID") {
      // Neither service configured - use mailto fallback
      const formData = new FormData(form);
      const name = formData.get("fullname");
      const email = formData.get("email");
      const message = formData.get("message");
      
      const subject = encodeURIComponent(`Contact Form Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show info message
      const originalText = formBtn.querySelector("span").textContent;
      formBtn.querySelector("span").textContent = "Opening Email Client...";
      formBtn.style.background = "#2196F3";
      
      // Reset form
      form.reset();
      formBtn.setAttribute("disabled", "");
      
      setTimeout(() => {
        formBtn.querySelector("span").textContent = originalText;
        formBtn.style.background = "";
      }, 2000);
      
      return;
    }

    // Disable button and show loading state
    formBtn.setAttribute("disabled", "");
    const originalText = formBtn.querySelector("span").textContent;
    formBtn.querySelector("span").textContent = "Sending...";

    // Get form data
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get("fullname"),
      from_email: formData.get("email"),
      message: formData.get("message"),
      to_email: RECIPIENT_EMAIL
    };

    try {
      // Check if EmailJS is loaded
      if (typeof emailjs === 'undefined') {
        throw new Error("EmailJS library not loaded. Please check your internet connection.");
      }

      // Send email using EmailJS
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      
      // Show success message
      formBtn.querySelector("span").textContent = "Message Sent!";
      formBtn.style.background = "#4caf50";
      
      // Reset form
      form.reset();
      formBtn.setAttribute("disabled", "");
      
      // Reset button after 3 seconds
      setTimeout(() => {
        formBtn.querySelector("span").textContent = originalText;
        formBtn.style.background = "";
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show detailed error message
      let errorMessage = "Error! Try Again";
      if (error.text) {
        errorMessage = "Setup Required";
        console.error("EmailJS Error Details:", error.text);
        alert("EmailJS is not configured yet. Please check EMAILJS_SETUP.md for instructions.\n\nFor now, the form will open your email client instead.");
        
        // Fallback to mailto
        const formData = new FormData(form);
        const name = formData.get("fullname");
        const email = formData.get("email");
        const message = formData.get("message");
        
        const subject = encodeURIComponent(`Contact Form Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
      }
      
      formBtn.querySelector("span").textContent = errorMessage;
      formBtn.style.background = "#f44336";
      
      // Reset button after 3 seconds
      setTimeout(() => {
        formBtn.querySelector("span").textContent = originalText;
        formBtn.style.background = "";
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        }
      }, 3000);
    }
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Map display text to page data attribute
    let pageName = this.innerHTML.toLowerCase();
    if (pageName === "engineering notes") {
      pageName = "blog";
    } else if (pageName === "projects + experience") {
      pageName = "portfolio";
    }

    for (let i = 0; i < pages.length; i++) {
      if (pageName === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}