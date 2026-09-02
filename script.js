const billingToggle = document.getElementById("billingToggle");

const monthlyText = document.getElementById("monthlyText");
const yearlyText = document.getElementById("yearlyText");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");


billingToggle.addEventListener("change", function () {

    if (billingToggle.checked) {

        // Yearly
        prices.forEach(price => {
            price.textContent = price.dataset.yearly;
        });

        periods.forEach(period => {
            period.textContent = "/year";
        });

        monthlyText.classList.remove("active-text");
        yearlyText.classList.add("active-text");

    } else {

        // Monthly
        prices.forEach(price => {
            price.textContent = price.dataset.monthly;
        });

        periods.forEach(period => {
            period.textContent = "/month";
        });

        yearlyText.classList.remove("active-text");
        monthlyText.classList.add("active-text");
    }

});