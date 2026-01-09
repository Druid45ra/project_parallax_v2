document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");

  if (!form) return;

  const checkIn = form.querySelector("#checkin");
  const checkOut = form.querySelector("#checkout");
  const email = form.querySelector("#email");
  const phone = form.querySelector("#phone");
  const submitBtn = form.querySelector(".submit-btn");

  // --- 1. SETĂRI INIȚIALE DATE (Anti-trecut) ---
  
  // Setează data minimă pentru Check-in ca fiind ziua de azi
  const today = new Date().toISOString().split('T')[0];
  checkIn.setAttribute('min', today);

  // Sincronizare automată Check-out în funcție de Check-in
  checkIn.addEventListener('change', () => {
    if (checkIn.value) {
      const nextDay = new Date(checkIn.value);
      nextDay.setDate(nextDay.getDate() + 1);
      const minCheckOut = nextDay.toISOString().split('T')[0];
      
      checkOut.setAttribute('min', minCheckOut);
      
      // Dacă Check-out-ul este deja completat dar e invalid (înainte de Check-in), îl resetăm
      if (checkOut.value && checkOut.value <= checkIn.value) {
        checkOut.value = minCheckOut;
      }
    }
  });

  // --- 2. FUNCȚII VALIDARE ---

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

  // --- 3. LOGICĂ SUBMIT ---

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Resetare erori anterioare
    [checkIn, checkOut, email, phone].forEach(i => { if (i) clearError(i); });

    // Validare Date
    if (!checkIn.value) {
        showError(checkIn, "Te rugăm să alegi data de sosire.");
        valid = false;
    }
    
    if (!checkOut.value) {
        showError(checkOut, "Te rugăm să alegi data de plecare.");
        valid = false;
    } else if (new Date(checkOut.value) <= new Date(checkIn.value)) {
        showError(checkOut, "Data de plecare trebuie să fie după sosire.");
        valid = false;
    }

    // Validare Email
    if (email && !isValidEmail(email.value)) {
      showError(email, "Introdu o adresă de email validă.");
      valid = false;
    }

    // Validare Telefon
    if (phone && !isValidPhone(phone.value)) {
      showError(phone, "Introdu un număr de telefon valid.");
      valid = false;
    }

    if (!valid) return;

    // UX: Dezactivare buton și feedback vizual
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Se trimite...";

    // Simulare trimitere (Server Mock)
    setTimeout(() => {
      submitBtn.textContent = "Cerere trimisă ✓";
      submitBtn.classList.add("success");

      form.reset();

      // Resetăm și atributele de min pentru următorul ciclu
      checkIn.setAttribute('min', today);
      checkOut.removeAttribute('min');

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.classList.remove("success");
      }, 3000);
    }, 1500);
  });
});
