const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConvert = document.querySelector(".currency-base-selected")
const currencyBaseSelect = document.querySelector(".currency-base-selected")
console.log(currencySelect)

function convertValues(){
    const inputCurrencyValue =  document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    let total=1
    const realToday = 1.0
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.8
    const ieneToday = 0.0336
    const bitcoinToday = 150568.26

    if(currencyBaseSelect.value=="real-Toselect")
    {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        total=inputCurrencyValue*realToday
    }

    if(currencyBaseSelect.value=="dolar-Toselect")
    {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        total=inputCurrencyValue*dolarToday
    }
    if(currencyBaseSelect.value=="euro-Toselect")
    {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        total=inputCurrencyValue*euroToday
    }
    if(currencyBaseSelect.value=="libra-Toselect")
    {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        total=inputCurrencyValue*libraToday
    }
    if(currencyBaseSelect.value=="iene-Toselect")
    {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        total=inputCurrencyValue*ieneToday
    }

    if(currencyBaseSelect.value=="bitcoin-Toselect")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue/bitcoinToday)
        total=inputCurrencyValue*bitcoinToday
    }
    

    if(currencySelect.value=="real-converted")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(total/realToday)
    }

    if(currencySelect.value=="dolar-converted")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(total/dolarToday)
    }

    if(currencySelect.value=="euro-converted")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(total/euroToday)
    }
    
    if(currencySelect.value=="libra-converted")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format(total/libraToday)
    }

    if(currencySelect.value=="iene-converted")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style:"currency",
            currency: "JPY"
        }).format(total/ieneToday)
    }
    
    if(currencySelect.value=="bitcoin-converted")
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"BTC"
        }).format(total/bitcoinToday)
    }

}

function changeCurrencyToConvert(){
    //console.log("Trocou de moeda")
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-coin-base")
    if(currencySelectToConvert.value=="real-Toselect"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil-image.png"    
    }
    if(currencySelectToConvert.value=="dolar-Toselect"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa-image.png"    
    }
    if(currencySelectToConvert.value=="euro-Toselect"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro-image.png"
    }
    if(currencySelectToConvert.value=="libra-Toselect"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra-image.png"
    }
    if(currencySelectToConvert.value=="iene-Toselect"){
        currencyName.innerHTML = "Japan"
        currencyImage.src = "./assets/japan-image.png"
    }    
    if(currencySelectToConvert.value=="bitcoin-Toselect"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin-image.png"
    } 
}


function changeCurrency(){

    const currencyNameConverted = document.getElementById("currency-name-converted")
    const currencyImageConverted = document.querySelector(".coin-currency-converted")
    if(currencySelect.value=="real-converted"){
        currencyNameConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/brasil-image.png"    
    }   
    if(currencySelect.value=="dolar-converted"){
        currencyNameConverted.innerHTML = "Dólar Americano"
        currencyImageConverted.src = "./assets/usa-image.png"    
    }
    if(currencySelect.value=="euro-converted"){
        currencyNameConverted.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/euro-image.png"
    }
    if(currencySelect.value=="libra-converted"){
        currencyNameConverted.innerHTML = "Libra"
        currencyImageConverted.src = "./assets/libra-image.png"
    }
    if(currencySelect.value=="iene-converted"){
        currencyNameConverted.innerHTML = "Japan"
        currencyImageConverted.src = "./assets/japan-image.png"
    }    
    if(currencySelect.value=="bitcoin-converted"){
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImageConverted.src = "./assets/bitcoin-image.png"
    }      
    convertValues()
}

currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)