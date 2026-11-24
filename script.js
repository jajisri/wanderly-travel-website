
/* =========================
   MOBILE NAVIGATION
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuToggle.textContent = navMenu.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a navigation link
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


/* =========================
   FOOTER YEAR
========================= */
document.getElementById("year").textContent = new Date().getFullYear();


/* =========================
   BOOKING MODAL
========================= */
const bookingModal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const selectedPackage = document.getElementById("selectedPackage");
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

const bookButtons = document.querySelectorAll(".book-btn");

// Open modal when a booking button is clicked
bookButtons.forEach(button => {
    button.addEventListener("click", () => {
        const packageName = button.dataset.package;

        selectedPackage.textContent = "Selected package: " + packageName;

        bookingMessage.textContent = "";
        bookingForm.reset();

        bookingModal.classList.add("show");
        document.body.style.overflow = "hidden";
    });
});

// Close modal
function closeBookingModal() {
    bookingModal.classList.remove("show");
    document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeBookingModal);

// Close modal by clicking outside the box
bookingModal.addEventListener("click", (event) => {
    if (event.target === bookingModal) {
        closeBookingModal();
    }
});

// Close modal using Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeBookingModal();
    }
});

// Booking form submission
bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const guests = document.getElementById("bookingGuests").value;

    if (name && email && guests) {
        bookingMessage.textContent =
            "Thank you, " + name + "! Your booking request has been received. 🌴";

        bookingMessage.style.color = "#244e3a";

        bookingForm.reset();
    }
});


/* =========================
   NEWSLETTER FORM
========================= */
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email !== "") {
        newsletterMessage.textContent =
            "You're on the list! Happy travels ✈";

        emailInput.value = "";
    }
});
