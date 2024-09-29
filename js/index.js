// Get references to the elements
const checkbox = document.getElementById("input-icon");
const hiddenItems = document.getElementById("hidden-nav");

// Add event listener to the checkbox
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // Show the menu when checked
    hiddenItems.classList.remove("hidden");
  } else {
    // Hide the menu when unchecked
    hiddenItems.classList.add("hidden");
  }
});
