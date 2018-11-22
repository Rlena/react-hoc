// функционал, кот. позволит изменять каждый элемент массива на определенное число
// стандартный подход
// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//   newNumbers.push(numbers[i] + 2)
// }
// console.log(newNumbers);


// подход с использованием функций высшего порядка
const numbers = [1, 2, 3, 4, 5]

// эта функция как аргумент будет получать то число, на кот. мы хотим увеличить каждый элемент массива
function createAddNumber(number) {
  return function (arr) {
    return arr.map(item => item += number)
  }
}

// в addOne получим результат работы функции createAddNumber
// переменная addOne теперь также является функцией, которая как параметр принимает массив
// теперь ее можно вызывать с параметром numbers
const addOne = createAddNumber(1)

const addFive = createAddNumber(5)

console.log(addOne(numbers));
console.log(addFive(numbers));