/*====================================================
 HW INSTRUCTIONS  

1. When I click the "calculate" button, the values in the first box should be added, subtracted, multiplied or divided by the value in the second box.

2. You'll need to convert the values to a number (think Number(value)) in order to process them.

3. Your output should be injected into the answer element
======================================================
 EXTRA CREDIT INSTRUCTIONS

1. Using the same HTML, add a plus, minus, multiplication and division button. DONE

2. Instead of specifying plus, minus etc in the code, allow the user to decide it. 

3. This should be in the form of more buttons on the page, and when the correct button is pressed the correct action is preformed.

4. Make sure the user can not put anything in the field but a number
====================================================*/


/*====================================================
		Declare Vars
====================================================*/
var input1, input2, submit, output, answer, add, subtract, multiply, divide, clear

/*====================================================
		Setup Vars
====================================================*/

//1a. User enters number into input1
//1b. input1 set to be element in num_one
input1 = document.getElementById("num_one");

//2a. User enters number into input2
//2b. input2 set to be element in num_two
input2 = document.getElementById("num_two");

//3. User selects a math button
//3. Sets variable add to the addBtn
add = document.getElementById("addBtn");
//3. Sets variable subtract to the subBtn
subtract = document.getElementById("subBtn");
//3. Sets variable multiply to multBtn
multiply = document.getElementById("multBtn");
//3. Sets variable divide to divBtn
divide = document.getElementById("divBtn");

//4. User presses calculateBtn
//4. Sets variable submit to calculateBtn
submit = document.getElementById("calculateBtn");

//5. Calculator displays an answer 
//5. Sets variable answer to answer
answer = document.getElementById("answer");

clear = document.getElementById("clear");

/*====================================================
		FUNCTIONS
====================================================*/
	// var clear = function() {
	// 	var toClear = document.getElementsByClassName("clicked");
	// 	toClear.className.replace(/clicked/, '');
	// };


	add.onclick = function () {
		output = Number(input1.value) + Number(input2.value);
		console.log(output);
	};
	subtract.onclick = function () {
		output = Number(input1.value) - Number(input2.value);
		console.log(output);
	};
	multiply.onclick = function () {
		output = Number(input1.value) * Number(input2.value);
		console.log(output);
	};
	divide.onclick = function () {
		output = Number(input1.value) / Number(input2.value);
		console.log(output);
	};

	submit.onclick = function () {	
		answer.innerHTML = output;
	};

	// clear.onclick = function clearThis(input1, input2) {
	// 	if (input1.value)
	// };




