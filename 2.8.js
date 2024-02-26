// - Скласти розклад на тиждень за домопоги switch.
//  Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//  (можна замість плану на день, назву дня англійською).

// alert("- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).")
let result = prompt("enter your day of the week", "sunday")
switch (result) {
    case "sunday": 
    console.log("sunday list")
    break;

    case "monday": 
    console.log("monday list")
    break;

    case "tuesday": 
    console.log("tuesday list")
    break;

    case "wednesday": 
    console.log("wednesday list")
    break;

    case "thursday": 
    console.log("thursday list")
    break;

    case "friday": 
    console.log("friday list")
    break;

    case "saturday": 
    console.log("saturday list")
    break;
}
