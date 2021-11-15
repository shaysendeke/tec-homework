for (i=0; i<1001; i++) {
    let array=[]
    array.push(i)
    console.log(array);
    let array2 = array.map(i=> i**0.5)
    console.log(array2);
}

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evenArray = array3.filter(i => !(i %2))
console.log(evenArray);
