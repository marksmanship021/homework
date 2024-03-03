// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for(let era = 0; era < currencyValues.length; era++) {
        if (currencyValues[era].currency === exchangeCurrency) {
            let result = sumUAH / currencyValues[era].value
            document.write(`<div> ${result} </div>`)
        }
    }
}

 exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');








