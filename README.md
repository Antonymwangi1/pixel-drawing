# 🖌️ Pixel Drawing Grid
<img width="1366" height="650" alt="Screenshot_20250712_210020" src="https://github.com/user-attachments/assets/2401bcdd-00c1-456c-9fdb-dbbaa939fa07" />

An interactive pixel art app built with vanilla JavaScript. Users can:

* Select grid sizes (e.g., 8x8, 16x16, 32x32)
* Choose between click or hover to draw
* Pick a drawing color
* Clear the canvas with one click

---

## 📁 Features

* ✏️ **Dynamic grid**: Adjustable size using dropdown
* 💍 **Color Picker**: Choose any color
* 💡 **Interaction Modes**: Click or Mouseover to paint
* ❌ **Clear Button**: Resets grid to default
* 🛠️ **Simple, modern design** with CSS Grid and transitions

---

## 📄 Code Overview

### HTML Structure

```html
<div class="container">
      <div class="controls">
        <input type="color" name="color" id="colorPicker" value="#000000" />
        <button id="clearGrid">Clear</button>
      </div>
      <div>
        <select name="grid-size" id="gridSelect">
          <option value="256">16x16</option>
          <option value="1024">32x32</option>
          <option value="64">8x8</option>
        </select>
        <select id="handleSelect">
          <option value="click">click</option>
          <option value="mouseover">mouseover</option>
          <option value="mousemove">mousemove</option>
        </select>
      </div>
      <div id="grid"></div>
</div>
```

### JavaScript

* `createGrid(size)` builds the pixel grid
* `handlePixelColor(e)` handles coloring on interaction
* `rgbToHex(rgb)` normalizes CSS color values for comparison
* Event listeners update the drawing mode or reset the grid

### Key Event Listeners

```js
gridSizeSelect.addEventListener("change", () => createGrid(...));
handleSelect.addEventListener("change", () => updateEventListeners(...));
clearGridButton.addEventListener("click", () => resetPixelColors());
```

### CSS Highlights

```css
body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #f4f4f7;
  color: #333;
}

.container {
  min-height: 100vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, #ffffff, #e8e8f3);
}

.controls {
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.controls select,
.controls input[type="color"],
.controls button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.controls select:hover,
.controls button:hover {
  border-color: #888;
  cursor: pointer;
}

input[type="color"] {
  width: 50px;
  height: 36px;
  padding: 0;
  border: none;
  background: none;
}

#grid {
  display: grid;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2px;
  margin-top: 10px;
}

.pixel {
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  background-color: #ffffff;
  transition: background-color 0.2s ease;
}

.pixel:hover {
  opacity: 0.8;
}

select {
  width: 150px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
}

```

---

## 🚀 Future Enhancements

* Drag-to-draw mode (mousedown + mousemove)
* Eraser mode
* Save/export to image or JSON
* Dark mode toggle
* Color palette/history

---

## 📦 Setup Instructions

1. Clone this repo:

```bash
https://github.com/Antonymwangi1/pixel-drawing.git
```

2. Open `index.html` in your browser

---

## 🌟 Credits

Made with ❤️ by Antony Mwangi

---

## 📅 License

MIT License
