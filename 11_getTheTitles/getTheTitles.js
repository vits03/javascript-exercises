const getTheTitles = function(array) {
  let final=[];
  for (let item of array){
    final.push(item.title)
  }
  return final;
};

// Do not edit below this line
module.exports = getTheTitles;
