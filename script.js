//your JS code here. If required.
const level1 = document.getElementById("level")
function level(){
	let counter = 0
	let current = level
	while(current !== null){
		current = current.parentNode;
		counter ++;
	}
	alert(`The level of the element is : ${counter}`)

	
}