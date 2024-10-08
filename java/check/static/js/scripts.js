
document.addEventListener('DOMContentLoaded', () => {
    // Check if the popup has already been shown in this session
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(showPopup, 10000); // Show popup after 10 seconds
    }

    function showPopup() {
        document.getElementById('loginPopup').style.display = 'flex';
        sessionStorage.setItem('popupShown', 'true'); // Mark the popup as shown for this session
    }
});



function requestOTP() {
    const emailMobile = document.getElementById('email-mobile').value;
    if (emailMobile) {
        // Simulate sending OTP
        alert(`OTP sent to ${emailMobile}`);
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.otp-section').style.display = 'block';
        document.getElementById('phone-number').innerText = emailMobile;
    } else {
        alert('Please enter a valid email or mobile number.');
    }
}

function verifyOTP() {
    const otpInput = document.getElementById('otp-input').value;
    if (otpInput.length === 6) {
        alert('OTP Verified!');
        // Redirect to the home page after successful OTP verification
        window.location.href = 'index.html';
    } else {
        alert('Please enter a valid 6-digit OTP.');
    }
}
