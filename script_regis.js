// Script for interaction and enhancements

// Example interaction for phone number
const phoneNumber = document.getElementById("phone-number");
phoneNumber.addEventListener("click", () => {
  alert("Dialing: " + phoneNumber.textContent);
});

// Example interaction for Instagram
const instagramLink = document.getElementById("instagram-link");
instagramLink.addEventListener("click", () => {
  alert("Opening Instagram: " + instagramLink.textContent);
});
