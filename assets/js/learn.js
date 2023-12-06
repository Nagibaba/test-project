const form = document.forms.login
const email = form.elements.email
const password = form.elements.password
const serverError = document.querySelector('.server-error')

email.addEventListener('blur', e => {
	
	isCorrectEmail(email)
	
})

password.addEventListener('blur', e => {
	
	hasValue(email)
	
})


form.addEventListener('submit', e => {
	e.preventDefault()

	if(isCorrectEmail(email) && hasValue(password)){
		postLogin({email: email.value, password: password.value})
	}
})

const IS_EMPTY = 'Form field cannot be empty'
const EMAIL_FORMAT = 'This is not correct email format'

function hasValue(input){
	if(!input.value){
		showError(input, IS_EMPTY)
		return false
	} else {

		showError(input, '')
		return true
	}
}

function isCorrectEmail(input){
	if(hasValue(input)){
		const emailRegex = /\w+@\w+\.\w{2,3}/
		if(!emailRegex.test(input.value)){
			
			
			showError(input, EMAIL_FORMAT)
			return false
		} else {
			showError(input,  '')
			return true
		}
	} else {
		return false
	}
	
}

function showError(input,  message){
	const errorMessage = input.parentNode.querySelector('small')
	
	errorMessage.innerHTML = message

	
}

async function postLogin(params){
	try{
		const response = await fetch('https://reqres.in/api/login', 
		{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(params)
		})

		const data = await response.json()
		if(data.error){
			serverError.innerHTML = data.error
			console.log(data)
		} else{
			alert('Login successfull')
			console.log(data)
		}
		
	} catch(err){
		alert(err.message)
	}
	
}
