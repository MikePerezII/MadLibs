var sentence = [];
var index = 0;
var replacements = [];

function populate(sarray,sprompt,index){
	do {
	sarray[index] = prompt(sprompt + index + ":");
	index++;
	}
	while(sarray[index - 1] != "^")

	return sarray;
}
function swap(sarray,rarray,sprompt,index){
for (index = 0; index < rarray.length - 1; index++){
	sarray[rarray[index]]= prompt(sprompt + sarray[rarray[index]] + ".");	
}
	return sarray;
}

//Getting the sentence ^^

populate(sentence, "Word",0);

//Getting the replacements ^^

populate(replacements, "Position",0);

//Getting the PoS

swap(sentence,replacements,"Enter the PoS for ",0);


//Replacements 

swap(sentence,replacements,"Enter a ",0);

sentence.splice(-1,1);
sentenceString = sentence.join(' ');
alert(sentenceString.toString());