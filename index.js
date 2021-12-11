
function askUser() {

    let arrOne = [];
    let answer;
    let popped;

    for (let i = 0; ; i++) {


        answer = prompt(`Введите ваше значение:\n(Для остановки этой функции и запуска следующей введите "exit" и нажмите "ok")`);

        if (answer === null || answer === "") {
            popped = arrOne.pop();

        } else {
            arrOne.push(answer);
        }
        if (answer === 'exit') {
            break;
        }
        console.log(arrOne);

    }


}
askUser();

function arrayMap() {
    const arr = [];

    for (let i = 1; i <= 100; i++) {
        arr.push(i);

    }
    console.log(arr)

    return arr.map(function(item, index, array){
        return item * 3;
    })
 
}


console.log(arrayMap());


