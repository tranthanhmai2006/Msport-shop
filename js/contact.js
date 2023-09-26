function sendMail() {
    var parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        comment: document.getElementById("comment").value
    }
    emailjs.send('service_03funsi', 'template_krr5x9l', parameters)
        .then(res => {
            alert("Sent")
        }
        );
}
