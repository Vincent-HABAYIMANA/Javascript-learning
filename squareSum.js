function squareSum(numbers){
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){

        sum += numbers[i] * numbers[i];
    }
    return sum;
}

console.log (squareSum([1,2,2,7,4]));