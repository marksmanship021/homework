// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//alert("Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число в першу, другу, третю или четверту частину години")
// let time = prompt("Ведіть число від 0 до 59", )

if (time >= 0 && time <= 14) {
    console.log("Перша четверть години");
}

if (time > 14 && time <= 29) {
    console.log("Друга четверть години");
}

if (time > 29 && time <= 44) {
    console.log("Третья четверть години");
}

if (time > 44 && time <= 59) {
    console.log("Четверта четверть години");
}

if (time < 0 || time > 59 ) {
    console.log("ведіть коректне число")
}
