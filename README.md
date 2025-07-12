# 🖌️ Pixel Drawing Grid

An interactive pixel art app built with vanilla JavaScript. Users can:

* Select grid sizes (e.g., 8x8, 16x16, 32x32)
* Choose between click or hover to draw
* Pick a drawing color
* Clear the canvas with one click

---

## 🌐 Live Demo (Optional)

Add a GitHub Pages link or CodePen/JSFiddle if hosted online.

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
<select id="gridSelect">
  <option value="64">8x8</option>
  <option value="256" selected>16x16</option>
  <option value="1024">32x32</option>
</select>

<select id="handleSelect">
  <option value="click" selected>Click</option>
  <option value="mouseover">Mouse Over</option>
</select>

<input type="color" id="colorPicker" value="#000000" />
<button id="clearGrid">Clear</button>

<div id="grid"></div>
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
#grid {
  display: grid;
  gap: 2px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.pixel {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s ease;
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
git clone https://github.com/your-username/pixel-grid-app.git
```

2. Open `index.html` in your browser

---

## 🌟 Credits

Made with ❤️ by \[Your Name]

---

## 📅 License

MIT License
