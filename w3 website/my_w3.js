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

//load more button functionality
function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Load more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Load less";
        moreText.style.display = "inline";
    }
}

function upwardFunction() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

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

function seeFunction() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

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

function abbeydaleFunction() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");

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

function portsideFunction() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");

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

function reflektFunction() {
    var dots = document.getElementById("dots6");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");

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

function projectsFunction() {
    var dots = document.getElementById("dots7");
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myBtn7");

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