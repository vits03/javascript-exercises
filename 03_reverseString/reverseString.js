const reverseString = function(sentence) {
    let final="";
    for (let i=sentence.length-1;i>=0;i--){
         final+=sentence[i];
 }
 return final;
};

// Do not edit below this line
module.exports = reverseString;
