//Destructuring//
let obj={name:'siddharth',age:23,occupation:'Software engineer'}
const{name , age}=obj
console.log(name,age)


//Destructuring using Arrays(Arrays dont have keys so we use indexes here and cll the indexes)//
const user=["mark",34,123445]
const[firstname,agel,phnno]=user
console.log(firstname)
console.log(age)
console.log(phnno)