function changeColor() {
			const inputId = document.getElementById("block_id").value;
			const color = document.getElementById("colour_id").value;

			// reset all cells first
			const cells = document.querySelectorAll(".grid-item");
			for (let cell of cells) {
				cell.style.backgroundColor = "transparent";
			}

			// highlight chosen cell
			const chosenCell = document.getElementById(inputId);
			if (chosenCell) {
				chosenCell.style.backgroundColor = color;
			} else {
				alert("Invalid cell id! Please enter 1–9.");
			}
		}

		function resetGrid() {
			const cells = document.querySelectorAll(".grid-item");
			for (let cell of cells) {
				cell.style.backgroundColor = "transparent";
			}
		}

		document.getElementById("change_button").addEventListener("click", changeColor);
		document.getElementById("reset_button").addEventListener("click", resetGrid);