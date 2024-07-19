document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('verifyForm')) {
        document.getElementById('verifyForm').addEventListener('submit', function (event) {
            event.preventDefault();
            verifyOTP();
        });
    }

    function verifyOTP() {
        const enteredOTP = document.getElementById('otp').value;
        const storedOTP = localStorage.getItem('otp');
        const storedEmail = localStorage.getItem('email');

        if (enteredOTP === storedOTP) {
            alert('OTP verified successfully. Registration complete for ' + storedEmail);
            localStorage.removeItem('otp');
            localStorage.removeItem('email');
            window.location.href = 'success.html';
        } else {
            alert('The OTP you have entered is incorrect. Please enter correct OTP');
        }
    }
});
