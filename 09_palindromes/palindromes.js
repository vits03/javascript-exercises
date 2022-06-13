const palindromes = function (string) {
    let nstring="";
    string=string.replace(/\s+/g,'');
    string=string.replace(/!/g,'');
   string=string.replace(/,/g,'');
  // console.log(string)   ;
   if (string[string.length-1]==="."){
             nstring=string.slice(0,-1);
             console.log(nstring);
         }
        else {
              nstring=string;
        }
   j=nstring.length-1;
   for (let i=0;i<(Math.floor(nstring.length/2));i++){
        //console.log(nstring[i],nstring[j]);
       if (nstring[i].toLowerCase()!==nstring[j].toLowerCase()){
            return false;
        }
        j--;}
    return true;
    };   

// Do not edit below this line
module.exports = palindromes;
//console.log(palindromes("Racecar."))