// const user = {
//     username:"Tejas",
//     id:3081,
//     age:20,
//     loggedIN:"Yes",

//      userdata: function (){
//             console.log("Required Details are Fetched at Once");
//             console.log(this.username)
//             console.log(this)

//     }

// }
// console.log(user.username);
// console.log(user.id);
// console.log(user.age);
// console.log(user.loggedIN);
// console.log(user.userdata());

function user(username, id, loggedIn) {
    this.username = username;
    this.id = id;
    this.loggedIn = loggedIn

    this.greet = function () {
        console.log(`Welcome ${this.username}`);
    }

    // return this
}
const detail = new user("Tejas", 3081, true);
console.log(detail);
const detail2 = new user("Raju", 3080, false);
console.log(detail2);
console.log(user.greet);


