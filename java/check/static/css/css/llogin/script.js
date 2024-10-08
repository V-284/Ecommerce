let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

async function signUp() {

    let username = document.querySelector('.sign-up input[name="name"]').value;
    let phone = document.querySelector('.sign-up input[name="phone"]').value;
    let password = document.querySelector('.sign-up input[name="password"]').value;
    let confirmPassword = document.querySelector('.sign-up input[name="confirm password"]').value;

    if (!username || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

	let formData = new FormData();
    formData.append('username', username);
    formData.append('phone', phone);
    formData.append('password', password);

	try {
        const response = await fetch('your_api_endpoint', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        alert("Sign up successful!");

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert("Error: Sign up failed.");
    } finally {
		document.querySelector('input[name="name"]').value = '';
		document.querySelector('input[name="phone"]').value = '';
		document.querySelector('input[name="password"]').value = '';
		document.querySelector('input[name="confirm password"]').value = '';		
	}

}

async function signIn() {

    let username = document.getElementById('login-name').value;
    let password = document.getElementById('login-name').value;

    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

	let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

	try {
        const response = await fetch('your_api_endpoint', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        alert("Login successfull!");

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert("Error: Sign In failed.");

    } finally {
		document.getElementById('login-name').value = '';
		document.getElementById('login-password').value = '';		
	}

}