//Loader
// Add a listener for the load event
// window.addEventListener('load', function () {
//   // Stop the spinner
//   document.querySelector('.loader').classList.remove('animated');
// });

// Add a listener for the click event on all links
// document.querySelectorAll('a').forEach(function (link) {
//   link.addEventListener('click', function (event) {
//     // Start the spinner
//     document.querySelector('.loader').classList.add('animated');
//   });
// });


// hamMenu
const hamMenuOpen = document.querySelector('.hamMenuIconOpen')
const hamMenuClose = document.querySelector('.hamMenuIconClose')
const navitems = document.querySelector('.navitems')

hamMenuOpen.addEventListener('click', function () {
  navitems.style.display = 'block';
  hamMenuClose.style.display = 'block';
  hamMenuOpen.style.display = 'none';
});

hamMenuClose.addEventListener('click', function () {
  navitems.style.display = 'none';
  hamMenuClose.style.display = 'none';
  hamMenuOpen.style.display = 'block';
});

// heroImg and heroSelling animation
let currentIndex = 0;
const heroImgDivs = document.querySelectorAll('.heroImg__bg .contentLoop');
const heroSellingDivs = document.querySelectorAll('.heroSellingContainer .contentLoop');

// Initial state
heroImgDivs[0].classList.add('active');
heroSellingDivs[0].classList.add('active');

setInterval(() => {
  // Remove active class from current elements
  heroImgDivs[currentIndex].classList.remove('active');
  heroSellingDivs[currentIndex].classList.remove('active');

  // Increment index

  currentIndex = (currentIndex + 1) % heroImgDivs.length;

  // Add active class to new elements
  heroImgDivs[currentIndex].classList.add('active');
  heroSellingDivs[currentIndex].classList.add('active');
}, 3000); // Change content every 3 seconds



// ourBrand Links
function toggleDetails(element) {
  var details = element.querySelector('.details');
  details.classList.toggle('show');
}


// JavaScript for form submission and validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate inputs using regular expressions
  var fullNameRegex = /^[A-Za-z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var fullNameInput = document.getElementById("full-name");
  var emailInput = document.getElementById("email");

  if (!fullNameRegex.test(fullNameInput.value)) {
    alert("Please enter a valid full name.");
    return;
  }

  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Send form data to the specified email address
  var form = document.getElementById("contact-form");
  var formData = new FormData(form);

  fetch("https://api.example.com/send-email", {
    method: "POST",
    body: formData
  })
    .then(function (response) {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("An error occurred. Please try again later.");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
});


// distribution arrow
function rotateArrow(arrowId) {
  const arrow = document.getElementById(arrowId);
  if (!arrow) {
    console.error("Arrow element not found!");
    return;
  }

  if (arrow.style.transform === "rotate(90deg)") {
    arrow.style.transform = "rotate(0deg)";
  } else {
    arrow.style.transform = "rotate(90deg)";
  }
}
