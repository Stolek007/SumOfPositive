function positiveSum(arr) {
	var sum = 0; 
	if(arr.length > 0) {
		for(var i = 0; i<arr.length; i++) {
			if(arr[i] < 0) {
				arr[i] = 0;
			}
			sum = sum + parseInt(arr[i]); // Add up all the remaining elements of the array
		}
	}
	return sum;
}
