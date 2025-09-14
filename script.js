// Change color button
document.getElementById("change_button").addEventListener("click", function () {
  const inputId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks first
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach(cell => cell.style.backgroundColor = "transparent");

  // Apply color to chosen block
  const chosenCell = document.getElementById(inputId);
  if (chosenCell) {
    chosenCell.style.backgroundColor = color;
  } else {
    alert("Invalid block id! Please enter 1–9.");
  }
});

// Reset button
document.getElementById("Reset").addEventListener("click", function () {
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach(cell => cell.style.backgroundColor = "transparent");
});
