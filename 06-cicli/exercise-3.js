// function adultFilter(persons) {
//   // for(let i = 0; i <= persons.length -1 ; i ++){
//   //   if(persons[i].age >= 18){
//   //      console.log(persons[i])
//   //   }else{
//   //      console.log('no')
//   //   }
//   //  }  
//   persons.filter((persons)=>{
//     return persons.age>=18;
//   })
    
  
//  }


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

function check(param){
  return param.filter(person => person.age >= 18)
} 


console.log(check(persons))

// let adults = persons.filter(person =>{
//   return person.age >= 18;
// })

// console.log(adults);

// const adults = adultFilter(persons);
// //console.log(persons);
// console.log(adults);