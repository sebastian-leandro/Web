const btn = document.getElementById("btnForm");

const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
};

btn.addEventListener("click", function() {
    const input = document.getElementById("form--input").value;
    const msg = document.querySelector(".message");
    const span = document.createElement("span");

    if (input) {
        if (isValidEmail(input)) {
            span.innerText = "Email sent";
        } else {
            span.innerText = "Invalid email format";
        }
    } else {
        span.innerText = "The email is empty";
    }

    span.classList.add("span--cool");
    msg.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
});