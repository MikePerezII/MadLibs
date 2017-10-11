//Initialize Variables
var sentence = [];
var replacements = [];
var index = 0;
//Function Calls
filler(sentence, "Next Word" );
filler(replacements, "Next Position");
replace(sentence, replacements, "Enter the PoS");
alert("Switch Positions");

//(sentence, replacements, "Enter the replacement word");

//Function for getting the sentence and positions.
function filler (myArray,myPrompt){
	index = -1;
	do{
	index++;
	myArray[index] = prompt(myPrompt+"["+index+"] = ");
	}
	while(myArray[index] != "^");
	myArray.pop();
	console.log(myArray);
}

//Function for replacing things.
function replace (mySArray,myRArray,myPrompt){
	for(index = 0; index < myRArray.length; index++){
		mySArray[myRArray[index]]=prompt(myPrompt+"["+myRArray[index]+"] = ");
	}
	console.log(mySArray);
}

