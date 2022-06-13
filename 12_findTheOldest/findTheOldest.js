const findTheOldest = function(array) {
    const d=new Date();
    let oldest=0;
    let elder={};
    let age=0;
    for (const item of array){
        //console.log(item.name);
        if (item.yearOfDeath=== undefined){
           age=d.getFullYear()-item.yearOfBirth;
       
      }   
       else {
         
          age=item.yearOfDeath-item.yearOfBirth;}
       if (age > oldest){
          oldest=age;
          elder=item;
    }}
return elder;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
// Do not edit below this line
module.exports = findTheOldest;
//console.log(findTheOldest(people));