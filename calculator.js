console.log('Calculator started!');

// all input fields and output div
var input_a = document.getElementById('number_a');
var input_b = document.getElementById('number_b');
var result = document.getElementById('result');

// all buttons
var btn_add = document.getElementById('btn_add');
var btn_subtract = document.getElementById('btn_subtract');
var btn_divide = document.getElementById('btn_divide');
var btn_multiply = document.getElementById('btn_multiply');
var btn_empty = document.getElementById('btn_empty');

// event subscription
btn_add.addEventListener('click', add);
btn_subtract.addEventListener('click', subtract);
btn_divide.addEventListener('click', divide);
btn_multiply.addEventListener('click', multiply);
btn_empty.addEventListener('click', empty);
input_b.addEventListener('keyup', add); 

result.addEventListener('mouseenter', empty); // Clear when mouse enters div.result

// array to store all results
results = []; 


function add() {
	// getting input field values and converting to Integer type
	var a = parseInt(input_a.value);
	var b = parseInt(input_b.value);

	// checking if values are below 100
	if (a > 100 || b > 100) {
		alert("Numbers A and B are above 100");
		input_a.style.color = 'red';
		input_b.style.color = 'red';
	} else if (a > 100) {
		alert("Number A is above 100");
		input_a.style.color = 'red';
	} else if (b > 100) {
		alert("Number B is above 100");
		input_b.style.color = 'red';
	} else {
		// The actual sum
		var sum = a + b;
		// Also we need to know sum in euros
		var sum_eur = convert_to_eur(sum);
		result.innerHTML = sum + ' <br><span class="small text-dark">Eur: ' + sum_eur + "</span>";
		input_a.style.color = 'green';
		input_b.style.color = 'green';
		// And we have to put the result to results array
		store(sum);
	}
}

function subtract() {
	var a = parseInt(input_a.value);
	var b = parseInt(input_b.value);
	result.innerHTML = a - b;
}

function divide() {
	// TODO: everything here 
}

function multiply() {
	// TODO: everything here 
}

function empty() {
	result.innerHTML = 'X';
	input_a.value = 0;
	input_b.value = 0;
}


function convert_to_eur(amount) {
	// we convert given amount to Eur.
	var result = amount / 3.4528;
	result = Math.round(result);
	// if amount is less than 100, we "charge" one Eur.
	if (amount < 100) {
		result--;
	}
	return result;
}

function store(current_result) {
	
	results.push(current_result);
	console.log(results);

	var history = document.getElementById('history');
	history.innerHTML = results.join(', ');

}