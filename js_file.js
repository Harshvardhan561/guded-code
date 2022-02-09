/*var a;
a=10
console.log(typeof a);
console.log(a);


a="hello"
console.log(a);
console.log(typeof a);

a=null
console.log(a);
console.log(typeof a);

a=true
console.log(a);
console.log(typeof a);*/

var num =10;
console.log(num);

var float = 2.4;
console.log(float);

var t=true;
var f =false;
console.log(t);
console.log(f);

//String :'' ,"" , `` . 
var str ='a';
console.log(typeof str);

str = "hello how are ya!";
console.log(str);

str = "how are you ? \ni am fine";
// we need to use backslash (\)
console.log(str);

var b =`how are ya ? 
i am doing good`;
// for ` ` we do not need \n
console.log(b);

var num =1000;
// by using ` ` we can use variables by appling ${variable name}
console.log(`half of ${num} is ${num/2}`);
