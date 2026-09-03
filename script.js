// ==============================
// MOBILE SIDEBAR
// ==============================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// ==============================
// SIDEBAR MENU
// ==============================

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// ==============================
// YEAR SELECT
// ==============================

const yearSelect = document.getElementById("yearSelect");

yearSelect.addEventListener("change", () => {

    console.log("Selected year:", yearSelect.value);

});


// ==============================
// NOTIFICATION
// ==============================

const notification = document.querySelector(".notification");

notification.addEventListener("click", () => {

    alert("You have 3 new notifications!");

});


// ==============================
// LOGOUT
// ==============================

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmLogout) {
        alert("You have been logged out.");
    }

});