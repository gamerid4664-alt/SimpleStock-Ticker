# 📈 SimpleStock Ticker

A simple and interactive stock ticker built with **HTML, CSS, and Vanilla JavaScript**.

The project simulates live stock price updates using a fake API and visually indicates whether the stock price is going **up 📈**, **down 📉**, or staying **neutral ➡️**.

> 🚧 This project uses simulated stock data for learning purposes. It is **not connected to a real stock market API**.

---

## ✨ Features

* 📊 Displays stock name and symbol
* 💰 Displays continuously changing stock price
* 📈 Shows an upward indicator when the price increases
* 📉 Shows a downward indicator when the price decreases
* ➡️ Shows a neutral indicator when the price remains the same
* 🕐 Displays the current simulated stock time
* 🔄 Automatically updates the stock price every 2 seconds
* ⏱️ Updates the displayed time every second
* 🛒 Includes a **Buy Now** button UI
* 📋 Includes a **Stock Details** button UI
* 📱 Responsive card-based layout

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **ES Modules**
* `setTimeout()`
* DOM Manipulation
* Object Destructuring
* `Date` and `toLocaleTimeString()`

---

## 📂 Project Structure

```text
simple-stock-ticker/
│
├── index.html
├── index.js
├── fakeAPI.js
├── style.css
└── README.md
```

### 📄 File Description

| File         | Purpose                                                                      |
| ------------ | ---------------------------------------------------------------------------- |
| `index.html` | Provides the structure of the stock ticker                                   |
| `index.js`   | Handles stock updates, DOM manipulation, price comparison, and clock updates |
| `fakeAPI.js` | Generates simulated stock data                                               |
| `style.css`  | Handles the design, layout, buttons, colors, and animations                  |
| `README.md`  | Project documentation                                                        |

---

## ⚙️ How It Works

The project uses a custom `fakeAPI.js` module to simulate stock market data.

Example:

```javascript
export function getStockData() {
    return {
        name: "QtechAI",
        sym: "QTA",
        price: (Math.random() * 3).toFixed(2),
        time: new Date().getTime()
    };
}
```

Every time `getStockData()` is called, a new simulated stock price is generated.

The application then compares the new price with the previous price:

```text
New Price > Previous Price
        ↓
      ▲ Gain

New Price = Previous Price
        ↓
      ▶ Neutral

New Price < Previous Price
        ↓
      ▼ Loss
```

---

## 🔄 Automatic Updates

The stock price is refreshed every **2 seconds** using `setTimeout()`.

The displayed clock is updated every **1 second**.

This creates a simple simulation of a live stock ticker without requiring a real stock market API.

---

## 🧠 JavaScript Concepts Practiced

This project was created as part of my JavaScript learning journey.

Through this project, I practiced:

* ES6 Modules
* `import` / `export`
* Functions
* Objects
* Object Destructuring
* DOM Manipulation
* `getElementById()`
* `textContent`
* Conditional Statements
* Comparing values
* `setTimeout()`
* `Date`
* `toLocaleTimeString()`
* Template Literals
* Variables and Scope
* Working with simulated API data

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/simple-stock-ticker.git
```

### 2. Open the project

```bash
cd simple-stock-ticker
```

### 3. Run with Live Server

Because this project uses JavaScript ES Modules, it should be run through a local server.

If you're using VS Code:

1. Install the **Live Server** extension.
2. Open `index.html`.
3. Right-click the file.
4. Select **Open with Live Server**.

---

## 🎯 Future Improvements

Possible improvements for future versions:

* [ ] Connect to a real stock market API
* [ ] Add multiple stocks
* [ ] Add a stock search feature
* [ ] Add historical price charts
* [ ] Add percentage change
* [ ] Add daily high/low prices
* [ ] Make the Buy button functional
* [ ] Make the Stock Details button functional
* [ ] Add dark/light theme
* [ ] Improve mobile responsiveness
* [ ] Add loading and error states

---

## 📸 Preview

### Stock Pedia

> Add a screenshot of your project here after pushing the project to GitHub.

```text
┌─────────────────────────┐
│       Stock Pedia       │
├─────────────────────────┤
│ Name   : QtechAI        │
│ Symbol : QTA            │
│ Price  : $2.45  ▲       │
│ Time   : 3:25:14 PM     │
│                         │
│       Buy Now           │
│     Stock Details       │
└─────────────────────────┘
```

---

## 📚 Project Purpose

The main purpose of this project is to strengthen my **JavaScript fundamentals** by building a small application that uses modules, simulated API data, DOM manipulation, timers, and conditional logic.

This project is part of my ongoing journey toward becoming a **full-stack developer**.

---

## 👨‍💻 Author
Zero Builder
Built with ❤️ while learning JavaScript.

---

## 📌 Status

**Completed — Version 1.0**

More features and improvements will be added as I continue learning JavaScript.
