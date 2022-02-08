const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "97f2fdf1fedb0b",
    Password: "40cb5cfce89fb8",
    To: "koushikkalgal@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: document.getElementById("message").value,
  }).then((message) => alert(message));
});
// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "therealonestain@gmail.com",
//     Password: "DA5EE55641AE8CEACAE1B7DF41DB5F4651E0",
//     To: "koushikkalgal@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Contact Form Enquiry",
//     Body: document.getElementById("message").value,
//   }).then((message) => alert(message));
// }
// console.log(Email.send.To);
