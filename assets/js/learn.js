(function(){


	const getDataChain = function(){
		fetch('https://reqres.in/api/users?page=2')
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			console.log(data)
		})
		.catch(function(err){
			console.error(err.message)
		})
	}
	
	const getDataAsync = async function(){
		try{
		const response = await fetch('https://reqres.in/api/users?page=2')
		const data = await response.json()
		console.log(data)
		}catch(err){
			console.error(err.message)
		}
	}


	getDataAsync()




})()