/* -------------------------
   MOBILE MENU
------------------------- */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* -------------------------
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
------------------------- */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* -------------------------
   BOOKING FORM
------------------------- */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const destination =
        document.getElementById("destination").value;

    alert(
        `Thank you, ${name}!\n\n` +
        `Your booking request for ${destination} has been received.\n\n` +
        `Our travel expert will contact you soon.`
    );

    bookingForm.reset();

});


/* -------------------------
   SET MINIMUM TRAVEL DATE
-------------------------*/

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;