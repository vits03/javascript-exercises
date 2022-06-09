const repeatString = function(string,num) {
    let i=0;  
    let rstring=""
    if (num<0){
        return "ERROR"
    }
    for (;i<num;i++){
      rstring+=string
    }
    return rstring;
};

// Do not edit below this line
module.exports = repeatString;


