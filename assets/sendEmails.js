function sendMail(contactForm) {
    emailjs.send("gmail", "Pizza-berra", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "booking_request": contactForm.booking_request.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}