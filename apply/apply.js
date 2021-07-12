const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phone')
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const phoneValue = phone.value.trim();
	if(usernameValue === '') {
		setErrorFor(username, 'Plase enter your name');
	}
     else if(usernameValue.length < 5 ) {
		setErrorFor(username, `You need to write ${5 - usernameValue.length} more characters`);
	} else {
		setSuccessFor(username);
	}
    if(phoneValue === '') {
		setErrorFor(phone, 'Plase enter your phone number');
	}  else if(phoneValue.length < 11 ) {
		setErrorFor(phone, `You need to write ${11 - phoneValue.length} more numbers`);
	} else {
		setSuccessFor(username);
	}
	
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Plase enter your password');
	} else if(passwordValue.length < 10 ) {
		setErrorFor(password, `You need to write ${10 - passwordValue.length} more numbers`);
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Plase confirm your password');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













