function sendMail() {
    let parameters = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        comment: document.getElementById('comment').value
    }
    emailjs.send("service_py4xpbq", "template_f7kzcvy", parameters)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
