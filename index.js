
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