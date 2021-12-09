// // // // // // let arr = [
// // // // // //     {name: 'Вася', age: 36},
// // // // // //     {name: 'Коля', age: 18},
// // // // // //     {name: 'Оля', age: 'Не скажу'},
// // // // // // ]

// // // // // // let resultOne = arr.filter(function(item, index, array) {
// // // // // // return item.age >= 18;
// // // // // // });


// // // // // let arrTwo = [
// // // // //     8, 22, 1,
// // // // // ]

// // // // // // function compareNumeric(a, b,) {
// // // // // //     console.log(`Сравниваем ${a} и ${b}`);
// // // // // //     //if (a > b) return 1;
// // // // // //     //if (a == b) return 0;
// // // // // //     //if (a < b) return -1;
// // // // // //     return a - b;
// // // // // }

// // // // // console.log(arrTwo.sort((a, b) => a - b));


// // // // let arr =['Ваня', 'Иштван', 'Оля',];


// // // // let result = arr.map(function(item, index, array){
// // // //     return item[0];
// // // // })
// // // // console.log(arr);
// // // // console.log(result);

// // // let str = 'Ваня,Иштван,Оля,';

// // // let arr = str.split(',');
// // // console.log(arr);


// // // let arrTwo = str.split(',', 2);
// // // console.log(arrTwo)



// // //перебор массива через for

// // // let arr =['Ваня', 'Иштван', 'Оля',]
// // // console.log(arr.length);

// // // for (let i = 0; i < arr.length; i++) {
// // //     console.log(arr[i]);
// // // }
// // // for (let arrItem of arr) {
// // //     console.log(arrItem);
// // // }

// // let arr = ['Ваня', 'Иштван', 'Оля',];

// // arr.forEach(function(item, index, array){
// //     console.log(`${item} находится на ${index}  позиция в ${array}`)
// // });


// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);

function askUser() {

    let arrOne = [];
    let answer;
    let popped;

    for (let i = 0; i < 3; i++) {
        answer = prompt('Enter your value');
        arrOne.push(answer);


        if (answer === null || answer === "") {
         popped = arrOne.pop();
         popped = arrOne.pop();
        }
        


        console.log(answer);
        console.log(popped);

        console.log(arrOne);
    }
    return popped;







}
askUser();