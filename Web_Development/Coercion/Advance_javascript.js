let obj ={
    toString(){
    // defualt implementation of tostring in a object is [object object].
     //  return 10;
    }
};

console.log( typeof(toString()));   //yepe of this [object object] .. is a string .

let obj1 ={
    // defualt implementation of valueOf in a object is object itself
    // override .....
    x:"shreyansh",
    valueOf(){
     
    }
}
console.log( typeof obj1.valueOf());    // return type is object....


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@THANK_YOU@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let obj2={x:7,valueOf(){return 10;}};

console.log(10-obj1);

let obj4={x:7,toString(){return {};}}; //type error exception
//console.log(100-obj4) 
console.log(10-obj1);

console.log(("true"+true));

let obj_10 ={

};
let obj_11={

};


console.log(obj_10 === obj_11);

console.log(obj_10 === obj_10);

console.log(obj_11===obj_10);


console.log({}== {});




















































