// const {a,add,name}= require('./file2')
// const {a: a3,add: add3}= require('./file3')

// const sum=add(2,5)

// console.log(sum,a,name)
// const added=add3(12,76,34)

// console.log(a3,added)


const var1= require('./file2')
const var2= require('./file3')

const sum1= var1.add(25,43);
const sum2= var2.add(25,25,25)

console.log(var1.a,sum1,var1.name)
console.log(var2.a,sum2)




