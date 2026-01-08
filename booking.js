document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");

  if (!form) return;

  const checkIn = form.querySelector("#checkin");
  const checkOut = form.querySelector("#checkout");
  const email = form.querySelector("#email");
  const phone = form.querySelector("#phone");
  const submitBtn = form.querySelector(".submit-btn");

  const showError = (input, message) => {
    clearError(input);

    const error = document.createElement("small");
    error.className = "form-error";
    error.textContent = message;

    input.setAttribute("aria-invalid", "true");
    input.parentElement.appendChild(error);
  };

  const clearError = (input) => {
    input.removeAttribute("aria-invalid");
    const error = input.parentElement.querySelector(".form-error");
    if (error) error.remove();
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isValidPhone = (value) => /^[0-9+\s()-]{7,}$/.test(value);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Reset state
    [checkIn, checkOut, email, phone].forEach(i => { if (i) clearError(i); });

    // Date validation
    if (checkIn && checkOut && checkIn.value && checkOut.value) {
      if (new Date(checkOut.value) <= new Date(checkIn.value)) {
        showError(checkOut, "Data de check-out trebuie să fie după check-in.");
        valid = false;
      }
    }

    // Email
    if (email && !isValidEmail(email.value)) {
      showError(email, "Introdu un email valid.");
      valid = false;
    }

    // Phone
    if (phone && !isValidPhone(phone.value)) {
      showError(phone, "Introdu un număr de telefon valid.");
      valid = false;
    }

    if (!valid) return;

    // UX: disable submit
    submitBtn.disabled = true;
    submitBtn.textContent = "Se trimite...";

    // Simulare trimitere
    setTimeout(() => {
      submitBtn.textContent = "Cerere trimisă ✓";
      submitBtn.classList.add("success");

      form.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Trimite cererea";
        submitBtn.classList.remove("success");
      }, 3000);
    }, 1200);
  });
});

// Nav Toggle Logic
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('open');
    });

    // Închide meniul când dai click pe un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('open');
        });
    });
}
