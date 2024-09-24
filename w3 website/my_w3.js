// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// typewriter function
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        typing = setTimeout(typeWriter, speed); // Save the timeout to be cleared later
    }
}

function startErasing() {
    clearTimeout(typing);  // Stop typing if it hasn't finished
    eraseTimeout = setTimeout(eraseText, eraseDelay);  // Wait before erasing
}

function eraseText() {
    var demoText = document.getElementById("demo").innerHTML;
    if (demoText.length > 0) {
        document.getElementById("demo").innerHTML = demoText.substring(0, demoText.length - 1);  // Erase one character at a time
        setTimeout(eraseText, eraseSpeed);  // Continue erasing at the given speed
    } else {
        i = 0;  // Reset the index when everything is erased
    }
}

//hide and show content (load more button functionality)
function toggleContent(dotsId, moreTextId, btnId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreTextId);
    var btnText = document.getElementById(btnId);

    if (dots.style.display === "none") {
        dots.style.display = "inline";  // Show dots if content is collapsed
        btnText.innerHTML = "Load more";  // Change button text
        moreText.style.display = "none";  // Hide additional content
    } else {
        dots.style.display = "none";  // Hide dots if content is expanded
        btnText.innerHTML = "Load less";  // Change button text
        moreText.style.display = "inline";  // Show additional content
    }
}

// Basic form validation function
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Name validation: check if it's at least 3 characters long
    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return false;
    }

    // Email validation: built-in validation for 'type="email"' is already in place
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Message validation: check if the message isn't empty
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    return true; // If all validations pass, the form will be submitted
}

 