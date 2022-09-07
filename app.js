'use strict';
// Reference the 'vowelBox' and detect its text
// Use array
const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
// Get the vowels from the text inside the 'vowelBox'
const countVowels = () => {
	let counter = 0;
	const textValue = document.getElementById('vowelBox').value;
	// Use for of loop to iterate through str of textbox
	for (let letter of textValue.toUpperCase()) {
		if (vowels.includes(letter)) {
			counter++;
		}
	}
	return (document.getElementById(
		'vowelCounter'
	).innerHTML = `The number of vowels in your text equals ${counter}`);

	//document.getElementById('vowelCounter').innerHTML = typeof textValue;
};

// Uppercase all vowels inside the array
