// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
   constructor(name, age, footSize) {
    this.name = name
    this.age = age
    this.footSize = footSize
   }
}

const Cinderella = [
    new Popelushka('Asya', 18, 36),
    new Popelushka('Belyana', 20, 37),
    new Popelushka('Varvara', 19, 35),
    new Popelushka('Galina', 22, 38),
    new Popelushka('Dana', 21, 36),
    new Popelushka('Eva', 23, 39),
    new Popelushka('Zhana', 25, 37),
    new Popelushka('Zoya', 24, 38),
    new Popelushka('Inna', 20, 35),
    new Popelushka('Katya', 19, 37)
]

class Prince {
   constructor(name, age, shoe){
    this.name = name
    this.age = age
    this.shoe = shoe
   }


findPrincess(arr) {
 for (let princess of arr) 
    if (princess.footSize === this.shoe)
        return princess;
}
}

const prince = new Prince('Marko', 17, 39);
console.log(prince.findPrincess(Cinderella));