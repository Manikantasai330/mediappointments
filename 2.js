// Function to check if a given date is a Sunday
function isSunday(date) {
    return date.getDay() === 0; // 0 corresponds to Sunday
}

// Function to handle date input change
document.getElementById("appointment-date").addEventListener("change", function () {
    const timingsContainer = document.querySelector(".timings-container");
    const selectedDate = new Date(this.value);

    // Check if the selected date is not a Sunday
    if (selectedDate && !isSunday(selectedDate)) {
        timingsContainer.style.display = "block";
    } else {
        timingsContainer.style.display = "none";
    }
});

// Function to handle click events on time slots
function handleTimeSlotClick(event) {
    const selectedSlot = event.target;

    // Deselect all other time slots
    const allSlots = document.querySelectorAll(".time-slot");
    allSlots.forEach((slot) => {
        if (slot !== selectedSlot) {
            slot.classList.remove("selected");
        }
    });

    // Toggle the "selected" class on the clicked time slot
    selectedSlot.classList.toggle("selected");
}

// Add click event listeners to all time slots
const timeSlots = document.querySelectorAll(".time-slot");
timeSlots.forEach((slot) => {
    slot.addEventListener("click", handleTimeSlotClick);
});

// Function to handle click events on the selected payment method
document.querySelector(".selected-method").addEventListener("click", function () {
    const methodOptions = document.querySelector(".method-options");
    methodOptions.classList.toggle("active");
});

// Function to handle click events on payment options
function handlePaymentOptionClick(event) {
    const selectedOption = event.target;
    const selectedMethod = document.querySelector(".selected-method");

    if (selectedOption.dataset.method) {
        selectedMethod.textContent = selectedOption.textContent;
        selectedMethod.style.backgroundColor = "lightblue";
        selectedMethod.style.color = "#fff";
    }

    const methodOptions = document.querySelector(".method-options");
    methodOptions.classList.remove("active");
}

// Add click event listeners to payment options
const paymentOptions = document.querySelectorAll(".payment-option");
paymentOptions.forEach((option) => {
    option.addEventListener("click", handlePaymentOptionClick);
});

// Function to toggle the display of payment options
document.querySelector(".selected-method").addEventListener("change", function () {
    const methodOptions = document.querySelector(".method-options");
    methodOptions.classList.toggle("active");
});