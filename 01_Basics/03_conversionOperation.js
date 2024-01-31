"use strict"

// let score =35;
// console.log(typeof score);
// let scoreInstring = String(score);
// console.log(scoreInstring);
// console.log(typeof scoreInstring);

// let stringScore1 = undefined
// let numberScore1 = Number(stringScore1)
// console.log(typeof stringScore1);
// console.log(typeof numberScore1);
// console.log(numberScore1);

/*
    35=> 35
    "35abc" => NaN (Not a Number)
    true => 1
    false => 0
    null => 0
    undefined => NaN
*/

let NumberInBoolean = ""

let OriginalBoolean = Boolean(NumberInBoolean)

console.log(typeof NumberInBoolean);

console.log(typeof OriginalBoolean);

console.log(OriginalBoolean);

 /*
   When We Convert In Boolean then What Happen given Below
   
   ""=>false
   "Aditya"=>true
   1=>true
   0=>false
 */