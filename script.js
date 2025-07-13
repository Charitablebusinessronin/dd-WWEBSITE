// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const heroSlider = document.getElementById("heroSlider")

  // Mobile menu functionality
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none"
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
      } else {
        mobileMenu.style.display = "flex"
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>'
      }
    })
  }

  // Hero Slider functionality
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll(".hero-slide")
    let currentSlide = 0

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index)
      })
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000)

    // Initialize first slide
    showSlide(0)
  }

  // Smooth scrolling for anchor links
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

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      if (email) {
        alert("Thank you for subscribing to our newsletter!")
        this.querySelector('input[type="email"]').value = ""
      }
    })
  }

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add fade-in animation for elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".quick-link-card, .program-card, .event-card, .impact-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })
})

// Utility functions
function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }
  return phoneNumber
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Contact form validation (for when contact.html is created)
function validateContactForm(form) {
  const name = form.querySelector('input[name="name"]')
  const email = form.querySelector('input[name="email"]')
  const message = form.querySelector('textarea[name="message"]')

  let isValid = true

  if (!name.value.trim()) {
    showError(name, "Name is required")
    isValid = false
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    showError(email, "Valid email is required")
    isValid = false
  }

  if (!message.value.trim()) {
    showError(message, "Message is required")
    isValid = false
  }

  return isValid
}

function showError(input, message) {
  const errorDiv = document.createElement("div")
  errorDiv.className = "error-message"
  errorDiv.textContent = message
  errorDiv.style.color = "#e53e3e"
  errorDiv.style.fontSize = "14px"
  errorDiv.style.marginTop = "5px"

  // Remove existing error message
  const existingError = input.parentNode.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }

  input.parentNode.appendChild(errorDiv)
  input.style.borderColor = "#e53e3e"

  // Remove error after 5 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove()
      input.style.borderColor = ""
    }
  }, 5000)
}

// Add to cart functionality for donations
function addDonationAmount(amount) {
  const customAmountInput = document.querySelector('input[name="donationAmount"]')
  if (customAmountInput) {
    customAmountInput.value = amount
  }
}

// Search functionality
function initializeSearch() {
  const searchInput = document.querySelector(".search-input")
  const searchResults = document.querySelector(".search-results")

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase()
      if (query.length > 2) {
        // Simulate search results
        const results = [
          { title: "Career Development Program", url: "programs.html#career" },
          { title: "Housing Cooperatives", url: "housing.html" },
          { title: "Community Events", url: "events.html" },
          { title: "Membership Information", url: "membership.html" },
        ].filter((item) => item.title.toLowerCase().includes(query))

        displaySearchResults(results)
      } else {
        hideSearchResults()
      }
    })
  }
}

function displaySearchResults(results) {
  const searchResults = document.querySelector(".search-results")
  if (searchResults) {
    searchResults.innerHTML = results
      .map((result) => `<a href="${result.url}" class="search-result-item">${result.title}</a>`)
      .join("")
    searchResults.style.display = "block"
  }
}

function hideSearchResults() {
  const searchResults = document.querySelector(".search-results")
  if (searchResults) {
    searchResults.style.display = "none"
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeSearch()
})
