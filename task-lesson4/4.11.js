// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
 let result = 0;
  for(let mindNumber = 0; mindNumber < arr.length; mindNumber++) {
     result += arr[mindNumber]
  }
  document.write(result);
  return result;
}
sum([18, 7, 9, 0, 6]);
