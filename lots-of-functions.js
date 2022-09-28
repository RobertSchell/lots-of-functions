function sayHi(name){
    let newStr = `Hi, ${name}`;
    return newStr;
}
console.log(sayHi("Robert"))
console.log(sayHi("John"))

//

function bigString(str1, str2){
    if(str1.length > str2.length){
        return str1;
    }else if(str2.length > str1.length){
        return str2;
    }else if(str1.length === str2.length){
        console.log(`${str1} string length is equal to ${str2} string length`)
    }
}

console.log(bigString("blue", "red"));
console.log(bigString("abc", "defg"))
console.log(bigString("purple", "orange"));

//

function bigNumber(num1, num2){
    if(num1 > num2){
        return num1;
    }else if(num2 > num1){
        return num2;
    }else if(num1 === num2){
        console.log(`${num1} is equal to ${num2}`);
    }
}

console.log(bigNumber(4,5));
console.log(bigNumber(10,9));
console.log(bigNumber(9,9));

//

function fiveMore(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] % 2 !== 0){
            numsArray[i] += 5
        }
    }
return numsArray;
}
console.log(fiveMore([1,2,3,4]));

//

function arraySummer(newerArray){
    let sum = 0
    for(let i = 0; i < newerArray.length; i++)
    {   
    sum += newerArray[i]
    }
    return sum;
}
console.log(arraySummer([1,2,3,4,5]));

//

function everyDivisible(n){

    if(n < 10){
    
    for(let number = 1; number <= 100; number++){
        if(number % n === 0){
            console.log(number)
        }
    }
}
}
everyDivisible(7);