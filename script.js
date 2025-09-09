let child = document.getElementById("level")
let count = 0;
function domlevel(){
	
	while(child.parentNode !== null){
		count ++;
		child = child.parentNode;
	}
	alert(`The level of the element is : ${count}`)
}
domlevel()

