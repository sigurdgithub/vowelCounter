'use strict';
// Reference the 'vowelBox' and detect its text
const vowels = 'aeiouyAEIOUY';
// Get the vowels from the text inside the 'vowelBox'
const countVowels = (vowels) => {
	const textValue = document.getElementById('vowelBox').value;
	document.getElementById('vowelCounter').innerHTML = `${textValue}`;
};

// Uppercase all vowels inside the array
