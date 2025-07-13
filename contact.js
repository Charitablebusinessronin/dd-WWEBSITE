// Contact Page JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const donationForm = document.getElementById("donationForm")
  const amountBtns = document.querySelectorAll(".amount-btn")
  const customAmountInput = document.getElementById("customAmount")

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (validateContactForm(contactForm)) {
        const submitBtn = contactForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent

        submitBtn.textContent = "Sending..."
        submitBtn.disabled = true

        // Simulate form submission
        setTimeout(() => {
          showSuccessMessage("Thank you for your message! We'll get back to you within 24 hours.")
          contactForm.reset()
          submitBtn.textContent = originalText
          submitBtn.disabled = false
        }, 2000)
      }
    })
  }

  // Donation amount selection
  amountBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      amountBtns.forEach((b) => b.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      // Set the custom amount input
      const amount = btn.dataset.amount
      customAmountInput.value = amount
    })
  })

  // Custom amount input
  if (customAmountInput) {
    customAmountInput.addEventListener("input", () => {
      // Remove active class from preset buttons when custom amount is entered
      amountBtns.forEach((btn) => btn.classList.remove("active"))
    })
  }

  // Donation form submission
  if (donationForm) {
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (validateDonationForm(donationForm)) {
        const submitBtn = donationForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent

        submitBtn.textContent = "Processing..."
        submitBtn.disabled = true

        // Simulate donation processing
        setTimeout(() => {
          showSuccessMessage("Thank you for your generous donation! You will receive a confirmation email shortly.")
          donationForm.reset()
          amountBtns.forEach((btn) => btn.classList.remove("active"))
          submitBtn.textContent = originalText
          submitBtn.disabled = false
        }, 3000)
      }
    })
  }

  // Form validation functions
  function validateContactForm(form) {
    const name = form.querySelector('input[name="name"]')
    const email = form.querySelector('input[name="email"]')
    const subject = form.querySelector('select[name="subject"]')
    const message = form.querySelector('textarea[name="message"]')

    let isValid = true

    // Clear previous errors
    clearFormErrors(form)

    if (!name.value.trim()) {
      showFieldError(name, "Name is required")
      isValid = false
    }

    if (!email.value.trim()) {
      showFieldError(email, "Email is required")
      isValid = false
    } else if (!validateEmail(email.value)) {
      showFieldError(email, "Please enter a valid email address")
      isValid = false
    }

    if (!subject.value) {
      showFieldError(subject, "Please select a subject")
      isValid = false
    }

    if (!message.value.trim()) {
      showFieldError(message, "Message is required")
      isValid = false
    } else if (message.value.trim().length < 10) {
      showFieldError(message, "Message must be at least 10 characters long")
      isValid = false
    }

    return isValid
  }

  function validateDonationForm(form) {
    const amount = form.querySelector('input[name="donationAmount"]')
    let isValid = true

    // Clear previous errors
    clearFormErrors(form)

    if (!amount.value || Number.parseFloat(amount.value) < 1) {
      showFieldError(amount, "Please enter a donation amount of at least $1")
      isValid = false
    }

    return isValid
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  function showFieldError(field, message) {
    const errorDiv = document.createElement("div")
    errorDiv.className = "field-error"
    errorDiv.textContent = message
    errorDiv.style.color = "#e53e3e"
    errorDiv.style.fontSize = "12px"
    errorDiv.style.marginTop = "5px"

    field.style.borderColor = "#e53e3e"
    field.parentNode.appendChild(errorDiv)
  }

  function clearFormErrors(form) {
    const errors = form.querySelectorAll(".field-error")
    errors.forEach((error) => error.remove())

    const inputs = form.querySelectorAll("input, select, textarea")
    inputs.forEach((input) => {
      input.style.borderColor = "#e2e8f0"
    })
  }

  function showSuccessMessage(message) {
    const successDiv = document.createElement("div")
    successDiv.className = "success-message"
    successDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #38a169;
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 3000;
        max-width: 400px;
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-check-circle" style="font-size: 20px;"></i>
          <div>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              ${message}
            </p>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(successDiv)

    setTimeout(() => {
      successDiv.remove()
    }, 5000)
  }

  // Phone number formatting for contact form
  const phoneInput = document.getElementById("contactPhone")
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")
      if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
      } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{3})/, "($1) $2")
      }
      e.target.value = value
    })
  }

  // Auto-save form data to localStorage
  function setupAutoSave(form, prefix) {
    const inputs = form.querySelectorAll("input, select, textarea")

    inputs.forEach((input) => {
      // Load saved data
      const savedValue = localStorage.getItem(`${prefix}_${input.name}`)
      if (savedValue && input.type !== "checkbox") {
        input.value = savedValue
      } else if (savedValue && input.type === "checkbox") {
        input.checked = savedValue === "true"
      }

      // Save data on change
      input.addEventListener("change", () => {
        if (input.type === "checkbox") {
          localStorage.setItem(`${prefix}_${input.name}`, input.checked)
        } else {
          localStorage.setItem(`${prefix}_${input.name}`, input.value)
        }
      })
    })
  }

  // Setup auto-save for both forms
  if (contactForm) setupAutoSave(contactForm, "contact")
  if (donationForm) setupAutoSave(donationForm, "donation")

  // Clear saved data on successful submission
  function clearSavedData(prefix) {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(prefix + "_")) {
        localStorage.removeItem(key)
      }
    })
  }

  // Add donation amount validation
  if (customAmountInput) {
    customAmountInput.addEventListener("input", (e) => {
      const value = Number.parseFloat(e.target.value)
      if (value && value < 1) {
        e.target.value = 1
      }
    })
  }
})

// Utility function for donation impact calculator
function calculateImpact(amount) {
  const impacts = [
    { threshold: 250, message: "Supports housing cooperative development initiatives" },
    { threshold: 100, message: "Funds a week of after-school programming for youth" },
    { threshold: 50, message: "Sponsors a family's participation in our health education program" },
    { threshold: 25, message: "Provides materials for one student in our career development program" },
    { threshold: 1, message: "Every dollar helps strengthen our community" },
  ]

  for (const impact of impacts) {
    if (amount >= impact.threshold) {
      return impact.message
    }
  }

  return "Thank you for your support!"
}

// Add impact display when amount changes
document.addEventListener("DOMContentLoaded", () => {
  const customAmountInput = document.getElementById("customAmount")

  if (customAmountInput) {
    // Create impact display element
    const impactDisplay = document.createElement("div")
    impactDisplay.className = "impact-display"
    impactDisplay.style.cssText = `
      margin-top: 10px;
      padding: 10px;
      background-color: #f0f9ff;
      border-left: 4px solid var(--accent-color);
      border-radius: 5px;
      font-size: 14px;
      color: #666;
      display: none;
    `

    customAmountInput.parentNode.appendChild(impactDisplay)

    customAmountInput.addEventListener("input", (e) => {
      const amount = Number.parseFloat(e.target.value)

      if (amount && amount >= 1) {
        const impact = calculateImpact(amount)
        impactDisplay.innerHTML = `<strong>Your Impact:</strong> ${impact}`
        impactDisplay.style.display = "block"
      } else {
        impactDisplay.style.display = "none"
      }
    })
  }
})
