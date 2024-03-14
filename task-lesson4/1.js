// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone){
 this.id = id
 this.name = name
 this.surname = surname
 this.email = email
 this.phone = phone
}

let UserArray = [
    new User(8, 'John',    'Smith',     'john.smith@example.com',       '555-1234'),
    new User(4, 'Emily',   'Johnson',   'emily.johnson@example.com',    '555-5678'),
    new User(7, 'Michael', 'Williams',  'michael.williams@example.com', '555-9101'),
    new User(2, 'Emma',    'Brown',     'emma.brown@example.com',       '555-1212'),
    new User(5, 'Tolya',   'Jones',     'christopher.jones@example.com','555-3434'),
    new User(10, 'Sophia',  'Garcia',    'sophia.garcia@example.com',    '555-5656'),
    new User(3, 'Matthew', 'Martinez',  'matthew.martinez@example.com', '555-7878'),
    new User(1, 'Olivia',  'Hernandez', 'olivia.hernandez@example.com', '555-9090'),
    new User(9, 'Daniel',  'Young',     'daniel.young@example.com',     '555-2323'),
    new User(6,'Ava',     'Lee',       'ava.lee@example.com',          '555-4545')
]


// console.log(UserArray.filter((item) => item.id % 2 == 0));
// console.log(UserArray.sort((a, b) => a.id - b.id))