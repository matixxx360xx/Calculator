# 🧮 Calculator with History

A simple, modern web calculator with the ability to track calculation history. It's built using **HTML**, **CSS** (featuring a **Neumorphism** design), and pure **JavaScript**, leveraging the **math.js** library for precise calculations.

## Preview
Below is a screenshot of the calculator:

![Calculator Screenshot](https://github.com/matixxx360xx/Calculator/blob/main/screenshot/calculator.png?raw=true)

---

## ✨ Features

* **Basic Operations:** Supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
* **Parentheses Support:** Allows for complex calculations using parentheses `(` and `)`.
* **Automatic Parenthesis Closure:** If you press `=` with open parentheses, they will be automatically closed to prevent errors.
* **Memory (History):** A side panel (`History`) dynamically displays a record of all executed calculations.
* **Clear Functions:** The `<-` button for deleting a single character and the `C` button for clearing the entire display.
* **Design:** Modern user interface with a **Neumorphism** effect.

---

## 🚀 Getting Started

To run the calculator, simply open the `index.html` file in any modern web browser.

## 📂 Project Structure
```
├── index.html       # Calculator structure and interface
├── style.css        # Styling (Neumorphism)
├── js.js            # Logic and calculation handling
└── screenshot/
    └── calculator.png # Screenshot used in README.md
```
---

## 🛠️ Technologies

This project uses the following technologies and libraries:

* **HTML5**
* **CSS3** (styled with Neumorphism)
* **JavaScript (ES6+)**
* **[math.js](https://mathjs.org/)** - Used for safe and precise mathematical expression evaluation.

---

## ⚙️ How It Works (Technical Overview)

All calculator logic is contained within the `js.js` file. The main calculations are handled by the `math.js` library, which is imported via a CDN link in the HTML file.

The key function, `calculate()`, captures the expression, applies a simple correction for unmatched parentheses, and then uses the `math.evaluate()` method to safely process the calculation. The result is stored in the global `History` array and updated in the side panel.

---
