// Initializes all controllers
const initControllers = function() {
    /*
    const ContactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', submitEvent);
    */

   const submitButton = document.getElementById('submit');
   submitButton.addEventListener('click', submitEvent);
}

// Submit event -- set HTTP attributes for the contact form
const submitEvent = function() {
    /*
    document.getElementById('name').name = entry1;
    document.getElementById('email').name = entry2;
    document.getElementById('message').name = entry3;

    const contactForm = document.getElementById('contact-form');
    contactForm.action = getPath(formId);
    contactForm.method = "POST";
    */

    const formData = new Object();
    formData[entry1] = document.getElementById('name').value;
    formData[entry2] = document.getElementById('email').value;
    formData[entry3] = document.getElementById('message').value;

    postToGoogleDB(formData);
}

initControllers(); // Must be last line of code