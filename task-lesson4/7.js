//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class classCar {
//     constructor(model, producer, releaseSize, maximumSpeed, engineSize) {
//         this.model = model;
//         this.producer = producer;
//         this.releaseSize = releaseSize;
//         this.maximumSpeed = maximumSpeed;
//         this.engineSize = engineSize;
//         this.drivers = [];
//     }

//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
//     }

//     info() {
//         console.log(`
//             model - ${this.model}
//             manufacurer - ${this.producer}
//             releaseSize - ${this.releaseSize}
//             maximimSpeed - ${this.maximumSpeed}
//             engineSize - ${this.engineSize}
//             drivers: ${this.drivers}
//         `);
//     }

//     increaseMaxSpeed(newSpeed) {
//         this.maximumSpeed += newSpeed;
//     }

//     changeYear(newValue) {
//         this.releaseSize = newValue;
//     }

//     addDriver(name, age) {
//         this.drivers.push(new Driver(name, age));
//     }
// }

// class Driver {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const car = new classCar("Camry", "Toyota", 2020, 180, 2000);
// car.drive();
// car.increaseMaxSpeed(300);
// car.changeYear(2023);
// car.addDriver('Jonh', 30);
// car.info();