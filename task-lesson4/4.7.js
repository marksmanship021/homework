//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function happiness(textLi, counterLi) {
//     document.write(`<ul>`)
//       for(let i = 0; i < counterLi; i++) 
//    {
//         document.write(`<li>${textLi}</li>`);
//    }
//     document.write(`</ul>`)
// }
// happiness("batman vs superman", 4);


let happiness = (textLi, counterLi) => {
    document.write(`<ul>`)
      for(let i = 0; i < counterLi; i++) 
   {
        document.write(`<li>${textLi}</li>`);
   }
    document.write(`</ul>`)
}
happiness("batman vs superman", 4);