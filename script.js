//your JS code here. If required.
function changeColor() {
	   const inputId = document.getElementById("block_id").value;
     const color = document.getElementById("colour_id").value;
   
     const cells = document.querySelectorAll(".grid-item");
	for(let cell of cells){
		 cell.style.backgroundColor = "transparent";
	}
	const choosenCell =document.getElementById(inputId);
	if(choosenCell){
		choosenCell.style.backgroundColor = color;
	}else{
         alert("Invalid cell id! Please enter a number between 1 and 9.");
    }
}
function resetGrid() {
	const cells = document.querySelectorAll(".grid-item");
	for (let cell of cells) {
		cell.style.backgroundColor = "transparent";
	}
}
document.getElementById("change_button").addEventListener("click", changeColor);
document.getElementById("Reset").addEventListener("click", resetGrid);
