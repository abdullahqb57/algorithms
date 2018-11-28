// function pos(a) {
//     if (a > 0) {
//         console.log("its a positive number")
//     }
//     else if (a < 0) {
//         console.log("its a negative number")
//     } else {
//         console.log("its 0")
//     }
// }
// pos(0)

// function pos(a) {
//     if (a % 2 == 0) {
//         console.log("its an even number")
//     } 
//     else {
//         console.log("its odd")
//     }
// }
// pos(2)

// let num = 9
// if (num < 10) {
// console.log("Small");
// } else if (num < 100) {
// console.log("Medium");
// } else {
// console.log("Large");
// }

// let number = 0;
// while (number <= 127){
// console.log(number);
// number = number + 7;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);
// if (false != true) {
//     console.log("That makes sense.");
//     if (1 < 2) {
//         console.log("No surprise there.");
//     }
// }
// for (let number = 0; number <= 12; number = number + 2) {
//     console.log(number);
// }


// for (let counter = 0; counter < 10; counter = counter + 1) {
//     result = result * 2;
// }
// console.log(result);

// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break;
//     }
// }

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");      

// function square(x) { return x * x; }
// console.log(square(4, true, "hedgehog"));

// function power(base, exponent) {
//     if (exponent == 0) {
//       return 1;
//     } 
//     else {
//     return base * power(base, exponent - 1);
//     }
//     }
// console.log(power(2, 3));

// function findSolution(target) {
//   function find(current, history) {
//   if (current == target) {
//   return history;
//   } else if (current > target) {
//   return null;
//   } else {
//   return find(current + 5, `(${history} + 5)`) ||
//   find(current * 3, `(${history} * 3)`);
//   }
//   }
//   return find(1, "1");
//   }
//   console.log(findSolution(24));
// var i = 1;
// for(;;){
// 	if(i<=10){
// 	console.log(i);
// 	 i = i + 1;
// 	}
// 	else{
// 	break;
// }
// }
// var i =1;
// do{	
// 	console.log(i);
// 	i++;
// }while(i<=10);
// function fun(n) 
// { 
//     if (n == 4) 
//     return n; 
//     else 
//     return 2 * fun(n + 1);
//  } 
//  console.log(fun(2))
// function fun(n)
// {  
//     if (n == 0)
//         return;  
    
//         console.log(n%2);
//           fun(n/2);
//         } 
//         console.log(fun(25))
// function fun( x,  y){    
//     if (y == 0)   return 0;    
//     return (x + fun(x, y-1));}
// console.log(fun(3,5))

// function fun2( a,  b){    
//     if (b == 0) 
//     return 1;    
//     return fun(a, fun2(a, b-1));}
// console.log(fun2(2,3));

for(var i=0; i<=5;i++){
    if(i==3){
        continue;
        // break;
    }
    console.log(i);    
}

var i=1;
while(i<=100){
    console.log(i);
    i = (i +2) * 2 ;
}
var k;
var i=1;
while(1){
    console.log(i);
    i++;
    if(i== 1000)
       break
}