

// // // // a="apple";
// // // // console.log(a);


// // // // // var--- redefined and value changeable
// // // // var bunty="playing"
// // // // console.log(bunty);

// // // // var bunty="running"
// // // // console.log(bunty);

// // // // //let--- not redinable but value changeable
// // // // let school="ABC"
// // // // console.log(school);

// // // // school="primary"
// // // // console.log(school);

// // // // //let--- not redinable and not value changeable
// // // // const ground="stadium"
// // // // console.log(ground);

// // // // // data types

// // // // var a="this is string data type"

// // // // var a=10

// // // // // var boolean = true , false

// // // // document.write("jai babu <br>")

// // // // document.write("jai babu")

// // // // let sample="Null"

// // // // //Complex data types

// // // // let array=["a","b","c","d","e","f",{name:"bunty",age:20}]

// // // // console.log(array)

// // // // const games={
// // // //     cricket:"sachin",
// // // //     badminton:"pvs",
// // // // }

// // // // console.log(games)

// // // // console.log(typeof(games))
// // // // console.log(typeof(array))
// // // // console.log(Array.isArray(array))

// // // // var a= 50;
// // // // var b= 60;

// // // // result=a+b;
// // // // console.log(result);
// // // // document.write("<br> Sum is "+result);



// // // // Conditional statement

// // // //function 
// // // function jaiBabu(){
// // //     document.write("jai babu <br>")
// // // }

// // // jaiBabu();

// // // //global scope

// // // var apple="apple";
// // // let orange="orange";
// // // const banana="banana";

// // // function fruit(){
// // //     document.write(apple);
// // //     document.write("<br>"+orange);
// // //     document.write("<br>"+banana);
// // // }

// // // fruit();

// // // //function scope

// // // function tree(){
// // //     var x=5;
// // //     document.write( "<br>"+x);
// // // }

// // // tree();

// // // //block scope

// // // function vehicle(){
// // //     if (10<20){
// // //         let x=10;
// // //     }
// // //     document.write("<br>"+x);
// // // }

// // // vehicle();

// // //function expression

// // var a=function apple(){
// //     document.write("<br> apple fruit");
// // }

// // a();

// // //anonymus function --function with no name
// // var b=function(){
// //     document.write("<br> this is anonymus function");
// // }

// // b();

// // //function with parameter

// // function score(a,b){
// //     return a+b

// // }

// // document.write("<br> Score is "+score(9,9));

// // var userName=prompt("Enter your name");

// // function greet(name){
// //     document.write("<br> Hello "+name);
// // }
// // greet(userName);


// //asynchronus function
// // function Register(){
// //     setTimeout(()=>{
// //         console.log("User Registered");
// //     },1000);
// // }

// // function welcomeUser(){
// //     setTimeout(()=>{
// //         console.log("Welcome User");
// //     },3000)
// // }

// // function Login(){
// //     setTimeout(()=>{
// //         console.log("User Logged In");
// //     },1000)
// // }

// // function startProcess(){
// //     Register();
// //     welcomeUser();
// //     Login();
// // }
// // startProcess();

// //higer order functions

// // function welcomeUser(){
// //     setTimeout(()=>{
// //         console.log("Welcome User");
// //     },1000)
// // }

// // function Register(babu){
// //         setTimeout(()=>{
// //             console.log("User Registered");
// //             babu();
// //         },4000);
// //     }

// // function Login(mango){
// //         setTimeout(()=>{
// //             console.log("User Logged In");
// //             mango();
// //         },3000)
// //     }

// // function ThankYou(){
// //     setTimeout(()=>{
// //         console.log("Thank You for visiting");
// //     },1000)
// // }

// // welcomeUser();
// // Register(function(){
// //     Login(function(){
// //         ThankYou();
// //     });
// // });

// //promises  

// function Register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Registered");
//             resolve("Registration Successful");
//         },2000)
//     })
// }


// function Login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Logged In");
//             resolve("Login Successful");
//         },1000)
//     })
// }

// function ThankYou(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Thank You for visiting");
//             resolve("Process Completed");
//         },1000)
//     })
// }

// Register().then(Login).then(ThankYou);

// // template literals

// let name="buntyyyyyy";

// document.write(`odiyamma ${name}`);

//loops

// const myVal=["a","b","c","d","e"];

// const students=["Mary","John","Alice","Bob","Emma"];

// const tfi={
//     superstar:"Mahesh Babu",
//     iconstar:"Allu Arjun",
//     megastar:"Chiranjeevi",
//     manofmasses:"NTR",
//     king:"Nagarjuna"
// }

// myVal.forEach((e)=>{
//     document.write(e+"<br>");
// })

//for...of loop -->used for arrays

// for (let letter of myVal){
//     document.write(letter+"<br>");
// }

// //for...in loop --> used for objects

// for (let i in tfi){
//     document.write(tfi[i]+"<br>")
// }

//rest operator ---> to pack multiple values into single variable

// function evensum(...args){
//     let sum=0;
//     for (let i in args){
//         sum+=args[i];
//         document.write("<br> Current even number: "+args[i]);
//         document.write("<br> Sum till now: "+sum);
//     }
// }

// const even=[8,10,12,14,16,18,20];
// evensum(even);

//spread operator --> to unpack the items in an array and object

// const arr2=[...myVal,...students]


// document.write(arr2)





// object methods

// const tfi={
//     superstar:"Mahesh Babu",
//     iconstar:"Allu Arjun",
//     megastar:"Chiranjeevi",
//     manofmasses:"NTR",
//     king:"Nagarjuna",
//     greet:function greet(){
//         document.write("<br> Welcome to Tollywood " + this.superstar);
//     }
// }
// tfi.greet();

// async and await

// let a=9
// let b=9
// async function Register(){
//     return a+b;
// }

// let res=Register();

// res.then((data)=>{
//     document.write(`Sum is ${data}`);
// })

//promise methods all,race,any,get,allsettled

// const p1=Promise.resolve("Promise 1 resolved");

// const p2=Promise.reject("Promise 2 rejected");

// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 3 resolved");
//     },1000)
// });

// const p4=100;

// Promise.all([p1,p3,p4]).then((data)=>{
//     document.write("<br>"+data);
// })

// Promise.race([p1,p3,p4]).then((data)=>{
//     document.write("<br>"+data);
// })
// Promise.allSettled([p1,p2,p3,p4]).then((data)=>{
//     document.write("<br>"+JSON.stringify(data));
// })

// Promise.any([p1,p2,p3,p4]).then((data)=>{
//     document.write("<br>"+data);
// })


// async function result(){
//     let result=await p3;
//     console.log(result);
//     document.write("<br>"+result);

//     return result
// }

// result().then((data)=>{
//     document.write("<br> Final Result: "+data);
// })



// array methods

// const numbers=[1,2,3,4,5,6,7,8,9,"babu",{name:jai}]
// const sports=["cricket","football","badminton","hockey","tennis"]

// //push---> adds element at the end of the array

// sports.push("golf",68);
// sports.push("volleyball");

// document.write(sports.length+"<br>");
// document.write(sports+"<br>");

// //pop --> removes element from the end of the array

// sports.pop();
// document.write(sports.length+"<br>");
// document.write(sports+"<br>");

// //shift --> removes element from the beginning of the array

// document.write("Removed Element: "+sports.shift()+"<br>");

//unshift --> adds element at the beginning of the array




//map --> creates a new array by performing a function on each array element

// let birthyear=[1990,1985,2000,1995,1970];

// let currentages=birthyear.map((i)=>{

//     let age=2026-i;

//     return age
// })

// document.write(currentages);
// console.table(currentages);

//filter --> creates a new array by filtering out elements based on condition

// const nums=[10,15,20,25,30,35,40,45,50];

// let evennums=nums.filter((i)=>{
//     return i%2==0;
// })
// console.table(evennums);
