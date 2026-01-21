

// // // a="apple";
// // // console.log(a);


// // // // var--- redefined and value changeable
// // // var bunty="playing"
// // // console.log(bunty);

// // // var bunty="running"
// // // console.log(bunty);

// // // //let--- not redinable but value changeable
// // // let school="ABC"
// // // console.log(school);

// // // school="primary"
// // // console.log(school);

// // // //let--- not redinable and not value changeable
// // // const ground="stadium"
// // // console.log(ground);

// // // // data types

// // // var a="this is string data type"

// // // var a=10

// // // // var boolean = true , false

// // // document.write("jai babu <br>")

// // // document.write("jai babu")

// // // let sample="Null"

// // // //Complex data types

// // // let array=["a","b","c","d","e","f",{name:"bunty",age:20}]

// // // console.log(array)

// // // const games={
// // //     cricket:"sachin",
// // //     badminton:"pvs",
// // // }

// // // console.log(games)

// // // console.log(typeof(games))
// // // console.log(typeof(array))
// // // console.log(Array.isArray(array))

// // // var a= 50;
// // // var b= 60;

// // // result=a+b;
// // // console.log(result);
// // // document.write("<br> Sum is "+result);



// // // Conditional statement

// // //function 
// // function jaiBabu(){
// //     document.write("jai babu <br>")
// // }

// // jaiBabu();

// // //global scope

// // var apple="apple";
// // let orange="orange";
// // const banana="banana";

// // function fruit(){
// //     document.write(apple);
// //     document.write("<br>"+orange);
// //     document.write("<br>"+banana);
// // }

// // fruit();

// // //function scope

// // function tree(){
// //     var x=5;
// //     document.write( "<br>"+x);
// // }

// // tree();

// // //block scope

// // function vehicle(){
// //     if (10<20){
// //         let x=10;
// //     }
// //     document.write("<br>"+x);
// // }

// // vehicle();

// //function expression

// var a=function apple(){
//     document.write("<br> apple fruit");
// }

// a();

// //anonymus function --function with no name
// var b=function(){
//     document.write("<br> this is anonymus function");
// }

// b();

// //function with parameter

// function score(a,b){
//     return a+b

// }

// document.write("<br> Score is "+score(9,9));

// var userName=prompt("Enter your name");

// function greet(name){
//     document.write("<br> Hello "+name);
// }
// greet(userName);


//asynchronus function
// function Register(){
//     setTimeout(()=>{
//         console.log("User Registered");
//     },1000);
// }

// function welcomeUser(){
//     setTimeout(()=>{
//         console.log("Welcome User");
//     },3000)
// }

// function Login(){
//     setTimeout(()=>{
//         console.log("User Logged In");
//     },1000)
// }

// function startProcess(){
//     Register();
//     welcomeUser();
//     Login();
// }
// startProcess();

//higer order functions

// function welcomeUser(){
//     setTimeout(()=>{
//         console.log("Welcome User");
//     },1000)
// }

// function Register(babu){
//         setTimeout(()=>{
//             console.log("User Registered");
//             babu();
//         },4000);
//     }

// function Login(mango){
//         setTimeout(()=>{
//             console.log("User Logged In");
//             mango();
//         },3000)
//     }

// function ThankYou(){
//     setTimeout(()=>{
//         console.log("Thank You for visiting");
//     },1000)
// }

// welcomeUser();
// Register(function(){
//     Login(function(){
//         ThankYou();
//     });
// });

//promises  

function Register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Registered");
            resolve("Registration Successful");
        },2000)
    })
}


function Login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Logged In");
            resolve("Login Successful");
        },1000)
    })
}

function ThankYou(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Thank You for visiting");
            resolve("Process Completed");
        },1000)
    })
}

Register().then(Login).then(ThankYou);

