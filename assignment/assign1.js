// write a javascript function that takes an array of numbers and returns the sum of all
//  positive numbers in the array

var numbers = [1,2,3,-4,-4,-6];
var sum=0;
for(var i=0;i<numbers.length;i++){
    if(numbers[i]>0){
        sum +=numbers[i];
    
    }
}
console.log(sum);