// - створити функцію яка повертає найменьше число з масиву


// function tekila(numbers) {
// let minNumber = numbers[0];
// for(let i = 1; i < numbers.length; i++) {
//     if ( numbers[i]< minNumber) {
//         minNumber = numbers[i]
//     }
// }
//  document.write('Мінімальне число:', minNumber);
// }

// tekila([5, 2, 8, 1, 7, 4, 0, -3]);


let tekila = numbers => {
    let minNumber = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if ( numbers[i]< minNumber) {
        minNumber = numbers[i]
    }
}
 document.write('Мінімальне число:', minNumber);
}
tekila([5, 2, 8, 1, 7, 4, 0, -3]);