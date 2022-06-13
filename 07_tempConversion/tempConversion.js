const ftoc = function(F) {
    c=(F-32)*(5/9);
    return Math.round(c*10)/10;
};

const ctof = function(c) {
  F=c*(9/5)+32;
  return Math.round(F*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
