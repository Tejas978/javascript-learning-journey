function user(username, id, loggedIn) {
    this.username = username;
    this.id = id;
    this.loggedIn = loggedIn

    // this.greet = function () {
    //     console.log(`Welcome ${this.username}`);
    // }

    // return this
}

user.prototype.printMe= function(){
    console.log(`Welcome Back Boss ${this.username}`);
    
}

const hello = new user("Tejas",3081,true)
hello.printMe()
// console.log(hello);
