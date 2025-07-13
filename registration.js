// Registration Page JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("registrationModal")
  const modalClose = document.getElementById("modalClose")
  const cancelBtn = document.getElementById("cancelRegistration")
  const registrationForm = document.getElementById("registrationForm")
  const registerBtns = document.querySelectorAll(".register-btn")
  const tabBtns = document.querySelectorAll(".tab-btn")
  const programItems = document.querySelectorAll(".program-item")

  // Program data for form population
  const programData = {
    "professional-skills": "Professional Skills Development",
    entrepreneurship: "Small Business & Entrepreneurship",
    "health-nutrition": "Community Health & Nutrition",
    "mental-health": "Mental Health & Wellness Support",
    "financial-literacy": "Financial Literacy & Planning",
    "digital-skills": "Digital Skills & Technology",
    "youth-leadership": "Youth Leadership Academy",
    "after-school": "After School Academic Support",
  }

  // Category filtering
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category

      // Update active tab
      tabBtns.forEach((tab) => tab.classList.remove("active"))
      btn.classList.add("active")

      // Filter programs
      programItems.forEach((item) => {
        if (category === "all" || item.dataset.category === category) {
          item.classList.remove("hidden")
          // Add fade-in animation
          item.style.opacity = "0"
          item.style.transform = "translateY(20px)"
          setTimeout(() => {
            item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
          }, 100)
        } else {
          item.classList.add("hidden")
        }
      })
    })
  })

  // Registration modal functionality
  registerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const programKey = btn.dataset.program
      const programName = programData[programKey]

      if (programName) {
        document.getElementById("selectedProgram").value = programName
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Close modal functionality
  function closeModal() {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
    registrationForm.reset()
  }

  modalClose.addEventListener("click", closeModal)
  cancelBtn.addEventListener("click", closeModal)

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Form submission
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateRegistrationForm()) {
      // Simulate form submission
      const submitBtn = registrationForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      submitBtn.textContent = "Submitting..."
      submitBtn.disabled = true

      setTimeout(() => {
        closeModal()
        showSuccessMessage()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    }
  })

  // Form validation
  function validateRegistrationForm() {
    const requiredFields = registrationForm.querySelectorAll("[required]")
    let isValid = true

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        showFieldError(field, "This field is required")
        isValid = false
      } else {
        clearFieldError(field)
      }
    })

    // Email validation
    const emailField = document.getElementById("email")
    if (emailField.value && !validateEmail(emailField.value)) {
      showFieldError(emailField, "Please enter a valid email address")
      isValid = false
    }

    // Phone validation
    const phoneField = document.getElementById("phone")
    if (phoneField.value && !validatePhone(phoneField.value)) {
      showFieldError(phoneField, "Please enter a valid phone number")
      isValid = false
    }

    return isValid
  }

  function showFieldError(field, message) {
    clearFieldError(field)

    const errorDiv = document.createElement("div")
    errorDiv.className = "field-error"
    errorDiv.textContent = message
    errorDiv.style.color = "#e53e3e"
    errorDiv.style.fontSize = "12px"
    errorDiv.style.marginTop = "5px"

    field.style.borderColor = "#e53e3e"
    field.parentNode.appendChild(errorDiv)
  }

  function clearFieldError(field) {
    const existingError = field.parentNode.querySelector(".field-error")
    if (existingError) {
      existingError.remove()
    }
    field.style.borderColor = "#e2e8f0"
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  function validatePhone(phone) {
    const re = /^[+]?[1-9][\d]{0,15}$/
    const cleaned = phone.replace(/\D/g, "")
    return cleaned.length >= 10
  }

  function showSuccessMessage() {
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
            <h4 style="margin: 0 0 5px 0; font-size: 16px;">Registration Successful!</h4>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">
              Thank you for registering! You'll receive a confirmation email within 24 hours.
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

  // Phone number formatting
  const phoneInput = document.getElementById("phone")
  const emergencyPhoneInput = document.getElementById("emergencyPhone")

  function formatPhoneNumber(input) {
    input.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")
      if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
      } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{3})/, "($1) $2")
      }
      e.target.value = value
    })
  }

  if (phoneInput) formatPhoneNumber(phoneInput)
  if (emergencyPhoneInput) formatPhoneNumber(emergencyPhoneInput)

  // Membership status change handler
  const membershipSelect = document.getElementById("membershipStatus")
  if (membershipSelect) {
    membershipSelect.addEventListener("change", (e) => {
      const selectedProgram = document.getElementById("selectedProgram").value
      // You could update pricing display here based on membership status
      console.log(`Membership status changed to: ${e.target.value} for program: ${selectedProgram}`)
    })
  }

  // Auto-save form data to localStorage
  const formInputs = registrationForm.querySelectorAll("input, select, textarea")
  formInputs.forEach((input) => {
    // Load saved data
    const savedValue = localStorage.getItem(`registration_${input.name}`)
    if (savedValue && input.type !== "checkbox") {
      input.value = savedValue
    } else if (savedValue && input.type === "checkbox") {
      input.checked = savedValue === "true"
    }

    // Save data on change
    input.addEventListener("change", () => {
      if (input.type === "checkbox") {
        localStorage.setItem(`registration_${input.name}`, input.checked)
      } else {
        localStorage.setItem(`registration_${input.name}`, input.value)
      }
    })
  })

  // Clear saved data on successful submission
  function clearSavedFormData() {
    formInputs.forEach((input) => {
      localStorage.removeItem(`registration_${input.name}`)
    })
  }

  // Add to the success handler
  const originalCloseModal = closeModal
  closeModal = () => {
    originalCloseModal()
    // Don't clear on cancel, only on successful submission
  }
})

// Utility function to scroll to top of modal
function scrollModalToTop() {
  const modalContent = document.querySelector(".modal-content")
  if (modalContent) {
    modalContent.scrollTop = 0
  }
}

// Add smooth scrolling for anchor links within the page
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
