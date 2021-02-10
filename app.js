name = "Josh";
var name 
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['apple', 'tomato', 'banana'];
let favFruit;

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    printFavFruit();
    function printFavFruit() {
        console.log(favFruit);
        let leastFav = "durian";
    }
    console.log(leastFav);
}   

printFruits();

someFunc();
function someFunc() {
    console.log("Hello Josh")
}

let anotherFunc = function () {
    alert("skledfkjsnfjsndjkf")
}
anotherFunc();