
function askUser() {

    let arrOne = [];
    let answer;
    let popped;

    for (let i = 0; ; i++) {


        answer = prompt('Enter your value');

        if (answer === null || answer === "") {
            popped = arrOne.pop();

        }else {
            arrOne.push(answer);
        }
        console.log(arrOne);

    }


}
askUser();

// function arrayMap () {
//     const arr = [];

//     for (let i=1; i <=100; i++){
//     arr.push(i);

//     }

//     return arr.mep(function(item) {
//         return item * 3;

//     });


// }

// console.log(arrayMap());


