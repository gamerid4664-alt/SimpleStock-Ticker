import { getStockData } from "./fakeAPI.js";
 
const stockName = document.getElementById("stk-name")
const stockSymbol = document.getElementById("stk-symbol")
const stockPrice = document.getElementById("stk-price")
const priceIcon = document.getElementById("price-icon")
const stockTime =  document.getElementById("stk-time")

const Buy = document.getElementById("buy")
const stockInfo = document.getElementById("details")



const stock = getStockData()
console.log(`Stock Name : ${stock.name}`)
console.log(`Stock Symbol: ${stock.sym}`)
console.log(`Stock Price : ${stock.price}`)
console.log(`Stock Time: ${stock.time}`)


const {name, sym, price, time} = stock

function upDatedstockPrice(){

    let updatedStockPrice = getStockData()
    return {
        price: updatedStockPrice.price
}
}

function updateClock(){
    let clock = getStockData()
    let currentTme = clock.time
    stockTime.textContent = new Date(Number(currentTme)).toLocaleTimeString();

    setTimeout(updateClock, 1000)
}
updateClock()

let previousPrice = price 

function RenderStockDetails (){

    let newStockPrice = upDatedstockPrice().price

    const  gainIcon = "▲"
    const  lossIcon = "▼"
    const  neutral  = "▶"

    stockName.textContent = name
    stockSymbol.textContent = sym

    
    if(newStockPrice  > previousPrice ){
        stockPrice.textContent = "$" + newStockPrice 
        priceIcon.textContent = gainIcon
        priceIcon.style.color = '#008a50'
    }
    else if(newStockPrice === previousPrice){
        stockPrice.textContent = $ + newStockPrice
        priceIcon.textContent = neutral
        priceIcon.textContent.color = "#808080"
    }
    else{
        stockPrice.textContent = "$" + newStockPrice
        priceIcon.textContent = lossIcon
        priceIcon.style.color = '#d9534f'
    }
    previousPrice = newStockPrice

    


    setTimeout(RenderStockDetails, 2000)
    

}

RenderStockDetails()

