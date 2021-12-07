let array = []
function getTenNumbers(){
for (let index = 0; index < 10; index++) {
   array.push(Math.floor(Math.random()*100))
}
}
;
getTenNumbers()
console.log(array);