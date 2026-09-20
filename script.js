function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

	let result = "";

	while (num > 0) {

    if (num >= 1000) {
        result = "M" + result;
		num = num - 1000;
    }
    else if (num >= 500) {
		result = "D" + result;
		num = num - 500;
    }
    else if (num >= 100) {
		result = "C" + result;
		num = num - 100;
    }
	else if (num >= 50) {
		result = "L" + result;
		num = num - 50;
    }
	else if (num >= 10) {
		result = "X" + result;
		num = num - 10;
    }
	else if (num >= 5) {
		result = "V" + result;
		num = num - 5;
    }
	else if (num >= 1) {
		result = "I" + result;
		num = num - 1;
    }

    // continue for 50, 10, 5, 1
}

return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
