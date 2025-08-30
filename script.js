// ===== Menu Navigation =====
function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // ===== Login Logic =====
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  // ===== Dynamic Navbar =====
  const navbar = document.querySelector("#navbar");

  // Initial Navbar (only Login)
  if (navbar) {
    navbar.innerHTML = `<li><a href="#login" onclick="showSection('login')">Login</a></li>`;
  }

  function updateNavbar(role) {
    if (role === "admin") {
      navbar.innerHTML = `
        <li><a href="#home" onclick="showSection('home')">Home</a></li>
        <li><a href="#booking" onclick="showSection('booking')">Book Shipment</a></li>
        <li><a href="#tracking" onclick="showSection('tracking')">Track Package</a></li>
        <li><a href="#pricing" onclick="showSection('pricing')">Pricing</a></li>
        <li><a href="#support" onclick="showSection('support')">Customer Support</a></li>
        <li><a href="#admin" onclick="showSection('admin')">Admin</a></li>
        <li><a href="#logout" id="logoutBtn">Logout</a></li>
      `;
    } else if (role === "user") {
      navbar.innerHTML = `
        <li><a href="#home" onclick="showSection('home')">Home</a></li>
        <li><a href="#booking" onclick="showSection('booking')">Book Shipment</a></li>
        <li><a href="#tracking" onclick="showSection('tracking')">Track Package</a></li>
        <li><a href="#pricing" onclick="showSection('pricing')">Pricing</a></li>
        <li><a href="#support" onclick="showSection('support')">Customer Support</a></li>
        <li><a href="#logout" id="logoutBtn">Logout</a></li>
      `;
    }

    // ===== Logout handling =====
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        location.reload(); // resets everything back to Login state
      });
    }
  }

  if (loginForm instanceof HTMLFormElement) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Hardcoded credentials (for demo)
      if (username === "admin" && password === "1234") {
        loginMessage.textContent = "Login successful! Redirecting to Admin Panel...";
        loginMessage.style.color = "green";
        updateNavbar("admin");
        setTimeout(() => showSection("admin"), 1000);
      } else if (username === "user" && password === "1234") {
        loginMessage.textContent = "Login successful! Redirecting to Home...";
        loginMessage.style.color = "green";
        updateNavbar("user");
        setTimeout(() => showSection("home"), 1000);
      } else {
        loginMessage.textContent = "Invalid username or password!";
        loginMessage.style.color = "red";
      }
    });
  }

  // ===== Booking Form =====
  const bookingForm = document.querySelector("#booking form");
  if (bookingForm instanceof HTMLFormElement) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Shipment booked successfully! Your Tracking ID is: RJ123456");
      showSection("tracking");
    });
  }

    // ===== Pricing Calculator =====
  const pricingForm = document.querySelector("#pricingForm");
  const priceOutput = document.querySelector("#priceOutput");

  if (pricingForm) {
    pricingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const weight = parseFloat(document.getElementById("weight").value);
      const distance = parseFloat(document.getElementById("distance").value);

      if (isNaN(weight) || isNaN(distance) || weight <= 0 || distance <= 0) {
        priceOutput.textContent = "⚠️ Please enter valid weight and distance.";
        priceOutput.style.color = "red";
        return;
      }

      // Example Pricing Formula:
      // Base = ₹50, Weight Rate = ₹10/kg, Distance Rate = ₹2/km
      const basePrice = 50;
      const totalPrice = basePrice + (weight * 10) + (distance * 2);

      priceOutput.textContent = `Estimated Price: ₹${totalPrice}`;
      priceOutput.style.color = "black";
    });
  }


  // ===== Tracking Logic =====
  const trackBtn = document.querySelector("#tracking button");
  const trackInput = document.querySelector("#tracking input");
  const trackStatus = document.querySelector("#tracking p strong");

  if (trackBtn instanceof HTMLButtonElement &&
      trackInput instanceof HTMLInputElement &&
      trackStatus) {
    trackBtn.addEventListener("click", () => {
      let trackingId = trackInput.value.trim();
      if (trackingId === "" || trackingId.length < 5) {
        alert("Please enter a valid Tracking ID.");
        return;
      }
      const statuses = ["Pending", "In Transit", "Out for Delivery", "Delivered"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      trackStatus.textContent = randomStatus;
    });
  }

  // ===== Support Form =====
  const supportForm = document.querySelector("#support form");
  if (supportForm instanceof HTMLFormElement) {
    supportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your support query has been submitted. Our team will contact you soon.");
      supportForm.reset();
    });
  }
});
