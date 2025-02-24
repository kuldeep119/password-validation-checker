const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

/* *************************** pop up *********************** */

function showPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }


  function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
  }


  function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const messageElement = document.getElementById("popupMessage");

    // Regular expression for validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()'" ])[A-Za-z\d@$!%*?&#^()'" ]{8,}$/;

    // Check if password is valid
    if (regex.test(password)) {
      messageElement.textContent = "Password is valid!";
      messageElement.style.color = "green";

      document.getElementById("redirectButton").style.display = "none"; //ide redirec Ht button

    } else {
      messageElement.textContent = "Password Doesn't match the Requirements";
      messageElement.style.color = "red";

      document.getElementById("redirectButton").style.display = "inline-block"; // Show redirect button
      
    }

    // Show the popup
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }



  document.getElementById("redirectButton").addEventListener("click", function () {
    window.location.href = "suggestion.html"; // Redirect to another page
});