//your JS code here. If required.
function changeColor() {
	   const inputId = document.getElementById("input-id").value;
     const color = document.getElementById("color-id").value;
   
     const cells = document.querySelectorAll(".cell");
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
