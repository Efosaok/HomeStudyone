const dataTypes = (x) => {
//catching string datatypes
	if (typeof x == 'string'){
		return x.length
// catching undefined or null values
	}else if (x == undefined || x == null){
		return 'no value'
//catching Booleans
	}else if (typeof x == 'boolean'){
		return x
//catching numbers
	}else if (typeof x == 'number'){
		if(x < 100){
			return 'less than 100'
//catching numbers greater than 100
		}else if (x > 100){
			return 'more than 100'

		}else {
			return 'equal to 100'
		}
//catching objects
	}else if (typeof x == 'object'){
		return x[2]
		if (x <= 2){
			return 'undefined'
		}
//catching function
	}else if (typeof x === 'function' ){
		return x(true);
		
	}

}

exports.dataTypes = dataTypes


