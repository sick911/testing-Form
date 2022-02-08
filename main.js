const btn = document.querySelector("button");
const inputs = document.querySelector("form");
btn.addEventListener("click", () => {
  const name = inputs.elements["name"].value.trim();
  const email = inputs.elements["email"].value.trim();
  const msg = inputs.elements["message"].value.trim();
  const phone = inputs.elements["phone"].value.trim();
  if (
    !name.length > 0 ||
    !email.length > 0 ||
    !msg.length > 0 ||
    !phone.length > 0
  ) {
    alert("All fields are mandatory");
    return;
  }
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "97f2fdf1fedb0b",
    Password: "40cb5cfce89fb8",
    To: "therealonestain@gmail.com",
    From: email,
    Subject: "Contact Us Query By the Customer",
    Body: msg + "<br>" + name + "<br>" + phone,
  }).then((msg) => alert("The email successfully sent"));
});
