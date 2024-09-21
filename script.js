const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");

/* an array of password requirements with corresponding
regular expresiion & index of the requirement list item
*/

const requirement = [
    { regex: /.{8,}/, index: 0 },                     // min 8 character
    { regex: /[0-9]/, index: 1 },                     // at least 1 number         
    { regex: /[a-z]/, index: 2 },                     // at least 1 lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 },              // at least 1 special character
    { regex: /[A-Z]/, index: 4 },                     // at least 1 uppercase letter
]


eyeIcon.addEventListener("click", () => {
    // toggle the password input type between "password" & "text".
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // update the eye icon class based on the password input type.
    eyeIcon.className = `fa-solid fa-eye ${passwordInput.type === "password" ? "text" : "password"}`;
});
