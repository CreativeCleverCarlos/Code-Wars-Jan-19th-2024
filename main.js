/**
 In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
**/

function testEven(n){
    //just have to use the mudolo operator 
    if (n % 2 == 0){
        return true
    } else {
        return false
    }
}

console.log(testEven(-2.1))

//arrow function format

function testEvenAgain(n){
    return n % 2 == 0 ? true : false ;
}

console.log(testEvenAgain(2))