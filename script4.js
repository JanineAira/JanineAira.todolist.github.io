//selecting the elements and storing to a var to be used later
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


//program will run through all these functions but will not
//do anything instead go to the line where these functions are being
//called
function inputLength() { //to know if the text field is empty or not
	return input.value.length; 
}

function createListElement(){ //creates list item and delete button

	var li = document.createElement("li"); //creates a list item element
	var newbtn = document.createElement("button"); //creates a button item element

	li.appendChild(document.createTextNode(input.value)); //creates a text based on the input value
	newbtn.appendChild(document.createTextNode("Delete")); //create a name for the delete button

	ul.appendChild(li); //takes the new list item to be listed under the unordered list
	li.appendChild(newbtn); //creates the delete button next to the list

	input.value = ""; //returns an empty string to start over	
	remove(); //goes to the remove item list function
}

function addListAfterClick(){ //function for button enter
	if (inputLength() > 0){ //if the text field isn't empty,
		createListElement(); //go to this function to create the list and delete button
	}
}
function addListAfterKeypress(event){ //function for keyboard enter
	if (inputLength() > 0 && event.keyCode === 13){ //if text field isn't empty and keycode for ENTER is pressed
		createListElement(); //go to this function to create the list
	}
}

function lidone(){ //to check which list items is clicked
	for(var i=0; i < li.length; i++){
		li[i].addEventListener("click", strike); //if clicked go to strike function
	}
}

function strike(){ //adds a strikethrough
	this.classList.toggle("done"); //calls on DONE class from CSS
}

function remove(){ //to delete list items
	var delbtn = document.querySelectorAll("li button"); //selects only all buttons within li
	for(var i=0; i < delbtn.length; i++){
		delbtn[i].addEventListener("click", delist); //if button is clicked go to delist function
	}
}

function delist(){ //deletes the list item
		this.parentNode.remove();
}


//program will run these lines and will find the functions being called

//if enter button is clicked run this function
button.addEventListener("click", addListAfterClick);
//if enter from keyboard is pressed instead run this function
input.addEventListener("keypress",addListAfterKeypress);
//perform this functions for if item is done or wants to be removed
lidone();
remove();




