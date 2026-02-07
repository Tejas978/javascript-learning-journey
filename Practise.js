// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > "1");
// console.log("2" > 1);
// console.log("02" > "1");

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


// console.log(typeof 100);
// console.log(typeof BigInt);
// console.log(typeof "tejas" );

// console.log(typeof );
// console.log(typeof );
// console.log(typeof );
// console.log(typeof );
// console.log(typeof );

// const score = 300
// console.log(score);

// const new_score = new Number(100)
// console.log(new_score);
// console.log(new_score.toFixed(2));

// const value = 87.8356
// console.log(value.toPrecision(2));

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString());

// let newdate = new Date(25,9,2024)
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate);


// const Arry = [0,1,2,3,4,5]
// const mem = ["Hello","World"]
// const arryy = new Array(0,1,2,3,4,5)
// console.log(arry);
// // console.log(mem)
// console.log(Arry[1]);
// // console.log(Arry.indexOf[2]);
// Arry.push(6)
// Arry.pop(6)
// console.log(Arry);

// //
// console.log(Arry.indexOf(3));
// console.log(Arry.slice(0,3))
// console.log(Arry.splice(0,3))
// //

// const hello = Symbol("key1")
// const info = {
//     name: "Tejas Khaire",
//     age: 21,
//     [hello]:"Mykey2",
//     job: "Data Science",
//     email: "khairetejas76@gmail.com",
//     location: "Jaipur",
//     isLoggedIn: false,
//     lastLoginDays: ["Sunday", "Saturday"]
// }
// console.log(info["name"])//Perefered
// console.log(info.email);///Constructor Produce Standalone
// console.log(info[hello]);

// info.email = "bandukhaire@gmail.com"
// console.log(info["email"]);
// Object.freeze(info)
// info.email = "bandu101gmail.com"
// console.log(info["email"]);

// info.greet = function (){
//     console.log("Happy Diwali");
// }
// info.greet2 = function (){
//     console.log(`Hello I am ${this.name}`);
// }

// console.log(info.greet());
// console.log(info.greet2());

//Constructor Start;
//--------->
// const emolpyee = new Object()
// // const tinderUser = new Object()
// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false
// console.log(tinderUser.id);
//Constructor Over <----
// const data = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// console.log(data.fullname.userfullname.firstname);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// console.log(course.courseInstructor)

// const {courseInstructor:Tejas} = course
// // // console.log(courseInstructor);
// // console.log(Tejas);
// // console.log(Tejas);
// // console.log(Tejas);

// const emp =  {
//     name : "Tejas Khaire"
// }
// console.log(emp.name);
// const{name: Emp1} = emp
// console.log(Emp1);

// function hello(){
//     console.log("Good Afternoon");
    
// }
// hello()

// function addition(a,b) {
//     console.log(a+b);
    
// }
// addition(5,8)

//
// function addition(a,b) {
//    let Num = a + b 
//     return Num 
// }
// const Num = addition(5,8)
// console.log(Num);
//

// function Check(name){
//     return (`Hello ${name}`)
// }
// console.log(Check("Tejas"));

// function addtocart(...num){
//     return num
// }
// console.log(addtocart(2,3,4,5,6,7,8))

/// Passing the objects as a function in javascript///:------->
// const shop = {
//     username  : "Tejas",
//     score : 50
// }
// function ebay(anyshop){
//     return (`I am ${anyshop.username} and my score is ${anyshop.score}`)
// }
// console.log(ebay(shop));
//<--------
// 
//For Array as a input in the function :--->

// const price = [5,7,9]
// function add(getArray) {
//     return getArray[2]
    
// }
// console.log(add(price));

// let a = 10
// const b = 20
// var c = 30

// // console.log(a,b,c)
// var c = 100
// if (true) {
    
// let a = 10
// const b = 20
// var c = 30
// console.log(a);

// }
// var c = 500
// // console.log(c);
// const hello = {
//     username: "Tejas",
//     age: 24,
//     hii: function hii(){
//         console.log(this.username)
//         }

// }
// console.log(hello.username)
// hello.hii()
// hello.username = "Varun"
// hello.hii()
// console.log(hello.username)

// function chai(){
//     let name = "Tejas"
//     console.log(name)
    
// }
// // chai()

// const chaii = function(){
//     let name = "Tejas"
//     console.log(this.name)
    
// }
// // chaii()
// const hosana = ()  => {
//         console.log("Hello World")
// }
// hosana()

// const add = (num1,num2) => {
//     return (num1 + num2)
// }
// console.log(add(4,5));

// const add1 = (num1,num2) =>  num1 + num2
// console.log(add1(4,5));

// const add2 = (num1,num2) =>  (num1 + num2)
// console.log(add2(4,5));

//


// function hello (){
//     console.log("Good Evening")
// }
// const hello1 = function () {
//     console.log("Good Evening")
// }
// const helloa = () => {
//     console.log("Good Evening");
    
// }
// hello()
// hello1()
// helloa();

// // AS THE IIFE:--->

// (function (name){
//     console.log(`Hello, I am ${name}`)
// })("Tejas")

// function hello(){
//     return ("Hello World") 
// }
// hello()

// const emp = {
//     name: "Tejas",
//     age: 20
// }
// // console.log(emp.name)
// function add(a,b){
//     return (a+b)
// }
// const addition = add(5,4);
// console.log(addition);
// // IF-Else:
// if (true){
//     console.log("Checking IF Else");
    
// }
// const balance = 10000;
// if (balance>5000){
//     console.log("You are eligible");
// }
// const check = (2 === "2");
// if (check){
//     console.log("No Datatype");
// } else{
//     console.log("NO");
    
// }

// const acc_num = 5000
// if (acc_num == 5000){
//     console.log("bALANCE IS $5000");
// }
// else if (acc_num<2500){
//     console.log("Balance is $2500 ")
// }
// else{
//     console.log("More");
// // }
// const Day = "Fri"
// switch (Day) {
//     case "Mon":
//         console.log("Today is Monday");
//         break;
//     case "Tue":
//         console.log("Today is Tuesday");
//         break;
//     case "Wed":
//         console.log("Today is Wednesday");
//         break;
//     case "Thu":
//         console.log("Today is Thursday");
//         break;
//     case "Fri":
//         console.log("Today is Friday");
//         break;
//     case "Sat":
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Today is Sunday");
//         break;
// }
///loop:__________<>_____________>

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

///loop:__________<>_____________>

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log("Hello I am 5");
//     }
//     console.log(element);
// }
// for (let i = 1; i <= 10; i++) {
//     // const element = i;
//     for (let j = 1; j <= 10; j++) {
//         let Mval = (`${i} * ${j} = ${i*j}`)
//         console.log(Mval);
// }
// // }
// array = ["Tejas","Rohit","Vikky"]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }
// ///While Loops are here:---->
// i = 1
// while (i<= 10) {
//     console.log(`Value is ${i}`);
//     i++
// }
// ///Do___While___:-->
// let i = 1
// do {
//    console.log(`Hello I am ${i}`);
//    i++
// } while (i<=10);

// //for - of is uesd in array:---->
// let num = [1,2,3,4,5,6]
// for (const item of num) {
//     console.log(item);
// }

// const map = new Map()
// map.set("htm","HTML")
// map.set("css","CSS")
// map.set("js ","JavaS")

// for (const [item,key] of map) {
//     console.log(item,":->",key);
// // for in :---->
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const item in myObject) {
//     console.log(item,myObject[item])
// }

// const coding = ["js", "ruby", "java", "python", "cpp"]
// // coding.forEach(function (item){
// //         console.log(item);
        
// // })
// // coding.forEach( (key) =>{
// //         console.log(key);
        
// // })
// // coding.forEach(printMe)
// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]
// myCoding.forEach((key) => {
//     console.log(key.languageName,key.languageFileName);
//     // console.log(key.languageFileName);
    
// })

// Filter:---->
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.filter((item)=>{
    // console.log(item)
    return item
})
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let help = myNums.filter((num)=>{
    return num>5
    
})
// console.log(help)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// let fil = books.filter((num) => num.genre === "Science")
// console.log(fil);
const kooks = books.filter((key) => {
    return key.genre ==="History" && key.publish<2000})
// console.log(kooks);

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let numbs = myNumers.map((num)=>(num+10))
// // console.log(numbs);
// let bound = myNumers
//                     .map((num)=>num * 10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num>50);
// console.log(bound);
                
const myNum1 = [1, 2, 3]
let hell = myNum1.reduce((acc,cur)=>acc+cur,0)
// console.log(hell);

//javascript completed:

