let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5))
const arc = coursesAndDurationArray.map((a, b) => {
    return {id: b + 1, ...a}
});
console.log(arc);