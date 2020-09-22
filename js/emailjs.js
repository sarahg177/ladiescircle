function sendMail(contactForm) {
    emailjs.send("gmail", "ladies_circle", {
        "from_name": form_frame.from_name.value,
        "from_email": form_frame.from_email.value,
		"telephone": form_frame.telephone.value,
        "dob": form_frame.dob.value,
        "town": form_frame.town.value,
        "county": form_frame.county.value,
        "message": form_frame.message.value
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