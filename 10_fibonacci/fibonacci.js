const fibonacci = function(pos) {
   pos=Number(pos);
   if (pos<0){
    return "OOPS";
   }
  let  current=1;
  let temp=0;
  let prev=1;
  for (let i=1;i<(pos-1);i++){
       temp=current;
       current+=prev;
       prev=temp;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
//console.log(fibonacci(8));