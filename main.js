const clearGridButton = document.getElementById("clearGrid");
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const gridSizeSelect = document.getElementById("gridSelect");
const handleSelect = document.getElementById("handleSelect");

let currentEvent = "click"; // default event

function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  return (
    "#" +
    result
      .slice(0, 3)
      .map((x) => parseInt(x).toString(16).padStart(2, "0"))
      .join("")
  );
}

function createGrid(size) {
  grid.innerHTML = ""; // Clear existing grid
  const gridWidth = Math.sqrt(size);
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;

  for (let i = 0; i < size; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "#ffffff";

    // Add initial event listener
    pixel.addEventListener(currentEvent, handlePixelColor);

    grid.appendChild(pixel);
  }
}

function handlePixelColor(e) {
  const pixel = e.target;
  const current = window.getComputedStyle(pixel).backgroundColor;
  const currentHex = rgbToHex(current).toLowerCase();
  const selectedColor = colorPicker.value.toLowerCase();

  pixel.style.backgroundColor =
    currentHex === selectedColor ? "#ffffff" : selectedColor;
}

// When the grid size changes
gridSizeSelect.addEventListener("change", () => {
  const newSize = parseInt(gridSizeSelect.value, 10);
  createGrid(newSize);
});

// When the handle method (click/mouseover) changes
handleSelect.addEventListener("change", () => {
  const newEvent = handleSelect.value;
  if (newEvent === currentEvent) return;

  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    // Remove old event
    pixel.removeEventListener(currentEvent, handlePixelColor);
    // Add new one
    pixel.addEventListener(newEvent, handlePixelColor);
  });

  currentEvent = newEvent;
});

// Clear button
clearGridButton.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "#ffffff";
  });
});

// Initial grid load
gridSizeSelect.dispatchEvent(new Event("change"));
