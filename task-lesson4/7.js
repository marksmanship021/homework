// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// або навпаки в залежності від значення аргументу direction.


function sortNums(nums, direction) {

    if(direction === 'ascending') {
        nums.sort((a, b) => a - b)
    }
    if(direction === 'descending') {
        nums.sort((a, b) => b - a)
    }
    
    return nums;

}
document.write(sortNums([8, 4, 2, 1, 9], 'ascending'));