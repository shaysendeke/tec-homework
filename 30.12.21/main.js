// !1
function sumOfDigit(n)
{
    if (n == 0)
    return 0;
    return (n % 10 + sumOfDigit(parseInt(n / 10)));
}
 
var num = 999;
var result = sumOfDigit(num);
console.log( "Sum of digits in "+ num
   +" is "+result );
 
// sumOfDigit(1234)

// !2

function findMinimum(array, n)
{
     
    if (n == 1)
        return array[0];
         
    return Math.min(array[n - 1],
        findMinimum(array, n - 1));
}
 
// Driver Code
let array = [ 1, 4, 45, 6, -50, 10, 2 ];
let n = array.length;
 
document.write( findMinimum(array, n));
