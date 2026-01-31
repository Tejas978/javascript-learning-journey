function setname(username){
    this.username = username
    console.log("Call Testing");
    
}

function discord (username,id,age){
    setname.call(this,username)
    this.id = id
    this.age = age
}

const name = new discord("Tejas",3081,20)
console.log(name);
  