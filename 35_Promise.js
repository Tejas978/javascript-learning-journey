// const Promise_1 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("I am Resolved");  
//             resolve()         
//         },5000)
// })
// Promise_1.then(function(){
//     console.log("Mission Successfull");    
// })
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })
// const promise_3 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Fetching the Data");
//             resolve({
//                 "username":"Tejas","Age":"20"
//             })
            
//         })
// })
// promise_3.then(function(user){
//     console.log(user);
    
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>
{
    console.log(user);
    return user.username})
.then((username)=>
{
    console.log(username);
})
.catch