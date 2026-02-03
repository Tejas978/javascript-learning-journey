class infomation{
    constructor(username,age,password){
        this.username = username
        this.age = age
        this.password = password
    }
    hiddenpassword() {
       return `${this.password}abc`
    }
}
const chai = new infomation ("Tejas",20,"khaire@123")
console.log(chai.hiddenpassword());
console.log(chai);

