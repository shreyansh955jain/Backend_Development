// Toboolean opeatioin

let x=10;
console.log(!x);
let y=undefined;
console.log(!y);

//Abstract Equality....
//double equalTo ==
//Triple equalTo ===   

console.log(undefined==null) // its return true open the doc for  ,more 
console.log(false==0) ;

console.log(false=='0'); 
console.log("----------------------------");
console.log("NaN"== NaN);

console.log("----------------------------");


obj={
    valueOf(){
        return 100;
    }
}
console.log(100== obj);
console.log(99== obj);



























