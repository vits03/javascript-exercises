const caesar = function(sentence,shifty) {
    let offset=shifty;
    let cypher="";
    let unicode_val=0; 
     let new_val=0;
     while (offset >25 || offset<-25){
         if (offset <0){
            offset+=26
         }
         else {
            offset-=26

         }
        
     }
     for (const chr of sentence){
      
        let unicode_val=chr.charCodeAt(0);
       // console.log(unicode_val);
        new_val=eval(unicode_val +offset);
         if ( unicode_val>=33 & unicode_val <=47 || unicode_val>=58 & unicode_val <=64 || unicode_val===32 ){
            new_val=unicode_val;
           }

         else if (unicode_val >=65 & unicode_val <=90 & new_val>90){
        
            new_val=(new_val-91)+65;

         }
         else if (unicode_val >=65 & unicode_val <=90 & new_val<65){
            new_val=91-(65-new_val);
         }
         else if (unicode_val >=65 & unicode_val <=90 & new_val>90){
            new_val=123-(97-new_val);
         }
         else if (unicode_val >=97 & unicode_val <=122 & new_val>122){
            new_val=(new_val-123)+97;

         }
         cypher+=String.fromCharCode(new_val);
         
         
    }   
 //  console.log(cypher);
   return cypher;
};

// Do not edit below this line
module.exports = caesar;

console.log(caesar("mjqqt btwqi",-5));