//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname 
        this.email = email
        this.phone = phone
        this.order = order
    }
}
const clients = [
    new Client(8, 'John',    'Smith',     'john.smith@example.com',       '555-1234',  ['pivo', 'mayonez']),
    new Client(4, 'Emily',   'Johnson',   'emily.johnson@example.com',    '555-5678',  ['potato',' chips']),
    new Client(7, 'Michael', 'Williams',  'michael.williams@example.com', '555-9101',  ['apple', 'bread']),
    new Client(2, 'Emma',    'Brown',     'emma.brown@example.com',       '555-1212',  ['ice-cream', 'coca-cola']),
    new Client(5, 'Tolya',   'Jones',     'christopher.jones@example.com','555-3434',  ['coffee']),
    new Client(10, 'Sophia',  'Garcia',    'sophia.garcia@example.com',    '555-5656', ['coal']),
    new Client(3, 'Matthew', 'Martinez',  'matthew.martinez@example.com', '555-7878',  ['water', 'meat']),
    new Client(1, 'Olivia',  'Hernandez', 'olivia.hernandez@example.com', '555-9090',  ['bear', 'bear', 'bear']),
    new Client(9, 'Daniel',  'Young',     'daniel.young@example.com',     '555-2323',  ['vodka', 'bear', 'vodka']),
    new Client(6,'Ava',     'Lee',       'ava.lee@example.com',          '555-4545',   ['chocolate', 'watermelon'])
]
// console.log(clients);

