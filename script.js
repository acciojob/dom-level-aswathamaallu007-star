const child = document.getElementById("level")
function domlevel(){
	let count = 0
	while(child.parentNode !== null){
		count ++;
		child = child.parentNode;
	}
}
alert(`The level of the element is : ${count}`)
