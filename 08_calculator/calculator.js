const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(array) {
	let ans=0; 
  for (const num of array){
     ans+=num;
   }
   return ans;
};

const multiply = function(array) {
  let ans=1; 
  for (const num of array){
     ans*=num;
   }
   return ans;
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num) {
	let ans=1;
  for (let i=1;i<(num+1);i++)
      ans*=i;
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
//console.log(multiply([3,5]));