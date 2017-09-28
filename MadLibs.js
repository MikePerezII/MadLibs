var sentence = [];
var index = 0;
var replacements = [];

function populate(sarray, sprompt, index){
	do {
	sarray[index] = prompt(sprompt + index + ":");
	index++;
	}
	while(sarray[index - 1] != "^")

	return sarray;
}

//Getting the sentence ^^

alert(populate(sentence, "Word", 0));

//Getting the replacements ^^

alert(populate(replacements, "Position", 0));


//Getting the PoS

for (index = 0; index < replacements.length - 1; index++){
	sentence[replacements[index]]= prompt("Enter the PoS for "+sentence[replacements[index]]);
}

console.log(sentence);

//Replacements 

for (index = 0; index < replacements.length - 1; index++){
	sentence[replacements[index]]= prompt("Enter a "+sentence[replacements[index]]);
}

console.log(sentence);

sentence.splice(-1,1);
sentenceString = sentence.join(' ');
alert(sentenceString.toString());