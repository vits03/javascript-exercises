const sumAll = function(num1,num2) {
    if (typeof num1 !=="number" || typeof num2 !=="number" || num1<0 ||num2<0){
        return "ERROR";}
   let sum=0;
   if (num1>num2) {
    upper=num1;
    lower=num2;
   }
   else {
    upper=num2;
    lower=num1;
   }
   for (;lower<(upper+1);lower++){
     sum+=lower
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll([0,9],7));