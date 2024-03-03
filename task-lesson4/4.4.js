// - створити функцію яка приймає масив та виводить кожен його елемент


// function solarSystemInput(solarSystemArrey) {
//    for(const planet of solarSystemArrey) {
//    document.write(`<div><li>${planet}</li></div>`)
// } 
//     return;
// }
// solarSystemInput(['Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']);



let solarSystemInput = (solarSystemArrey) => {
    for(const planet of solarSystemArrey) {
    document.write(`<div><li>${planet}</li></div>`)
 } 
     return;
}
solarSystemInput(['Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']);
