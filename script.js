$(document).ready(function() {
    // Scroll event for sticky navbar and scroll-up button visibility
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll up button functionality
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });


    // Initialize Typed.js for typing effects
    function initTyped(selector, strings) {
        return new Typed(selector, {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 20,
            loop: true
        });
    }

    // Toggle menu for mobile view
    $('.menu-btn').click(function() {
        console.log("Menu button clicked!");
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    initTyped(".typing", ["looking for 'how to start a career in tech?'", "trying to transition into a new tech role?", "on a career break and need to upskill?", "a parent looking to equip your children with in-demand tech skills?", "looking to land a remote job?"]);
    initTyped(".typing-2", ["Python Programmer", "Developer", "CAD/CAM Designer", "Graphics Designer", "Tutor", "Pen Artist"]);


});

// Select all the cards
const cards = document.querySelectorAll('.card');

// Set up IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when in view
            observer.unobserve(entry.target); // Stop observing once the animation has been applied
        }
    });
}, {
    threshold: 0.2 // Adjust the visibility threshold (20% visible)
});

// Attach observer to each card
cards.forEach(card => observer.observe(card));


const waveText = document.querySelector('.wave');
      waveText.innerHTML = waveText.textContent
        .split('')
        .map((char) => `<span>${char}</span>`)
        .join('');

// Function to send email using EmailJS
function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("textarea").value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        alert('Message sent successfully!');
        document.querySelector('form').reset(); // Reset form fields
    }, function(error) {
        alert('Failed to send message, please try again.');
    });
}
