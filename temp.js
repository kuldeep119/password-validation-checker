const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelector(".requirement-list li");


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

// looping through each element in the array.
passwordInput.addEventListener("keyup", () => {
    requirement.forEach(item => {
        const isValid = item.regex.test(e.target.value);     // check if the password matches the requiremnt.
        const requirementItem = requirementList[item.index]; // getting a particular <li> element of object index number


        // updating class & icon of requirement item if requirement matched or not
        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }
        else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    })
})



eyeIcon.addEventListener("click", () => {
    // toggle the password input type between "password" & "text".
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // update the eye icon class based on the password input type.
    eyeIcon.className = `fa-solid fa-eye ${passwordInput.type === "password" ? "text" : "password"}`;
});
