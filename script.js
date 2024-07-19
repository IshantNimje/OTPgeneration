document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('60RJaeknJJtah09bF');

    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = validateForm();

        if (isValid) {
            sendOTP();
        }
    });

    function validateForm() {
        let isValid = true;

        // Full Name validation
        const fullName = document.getElementById('fullName').value;
        const namePattern = /^[a-zA-Z\s]+$/;
        if (!namePattern.test(fullName)) {
            isValid = false;
            alert('Please enter a valid full name.');
        }


        // Mobile Number validation
        const mobileNo = document.getElementById('mobileNo').value;
        const mobilePattern = /^(?!1|2|3|4|5)\d{10}$/;
        if (!mobilePattern.test(mobileNo)) {
            isValid = false;
            alert('Please enter a valid 10-digit mobile number.');
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

         // Username validation
        const username = document.getElementById('username').value;
        const usernamePattern = /^[a-zA-Z0-9._-]{5,15}$/;
        if (!usernamePattern.test(username)) {
            isValid = false;
            alert('Username must be 5-15 characters long and can contain letters, numbers, dots, and underscores.');
        }

         // Password validation
        const password = document.getElementById('password').value;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            isValid = false;
            alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
        } else {
            alert('Congrats! All details are filled Correct. OTP has send on your above Email');

        }

        return isValid;
    }

    
    function sendOTP() {
        const email = document.getElementById('email').value;
        const otp = Math.floor(100000 + Math.random() * 900000);

        const templateParams = {
            email: email,
            otp: otp
        };

        emailjs.send('service_emailverify', 'template_gk0c4f2', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                localStorage.setItem('otp', otp);
                localStorage.setItem('email', email);
                window.location.href = 'verify.html';
            }, function(error) {
                console.log('FAILED...', error);
            });
    }
});


const pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password");

pwShowHide.forEach(eyeIcon =>{
eyeIcon.addEventListener("click", ()=>{
    pwFields.forEach(pwField =>{
        if(pwField.type ==="password"){
            pwField.type = "text";

            pwShowHide.forEach(icon =>{
                icon.classList.replace("fa-eye-slash", "fa-eye");
            })
        }else{
            pwField.type = "password";

            pwShowHide.forEach(icon =>{
                icon.classList.replace("fa-eye", "fa-eye-slash");
            })
        }
    })
})
})