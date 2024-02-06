const form = document.getElementById('subscription');
const email= document.getElementById('email');
const submitBtn = document.querySelector(".submit");


//Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//Show success outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Event listeners
submitBtn.addEventListener('click', function(e) {
	e.preventDefault();

	if(email.value === '') {
		showError(email, 'Email is required');
	} else if(!isValidEmail(email.value)) {
		showError(email, 'Please provide a valid email address');
	}
	
	else {
		showSuccess(email);
	}
// checkRequired([email]);
// checkEmail(email);

})



//second version

// function checkEmail(input){
// 	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(re.test(input.value)) {
// 		showSuccess(input);
//     } else {
//     	showError(input, 'Email is not valid');
//     }
// }

//Check required fields
// function checkRequired(inputArr) {
// 		inputArr.forEach(function(input) {
// 			if(input.value.trim() === '') {
// 				showError(input, ` ${getFieldName(input)} is required`);
// 				console.log("Error!");
// 			} else {
// 				showSuccess(input);
// 			}
// 		});
// }

//Get fieldname
// function getFieldName(input) {
// 	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }
