class info{
    constructor(username){
        this.username = username
    }
    masala() {
        console.log(`My Name is ${this.username}`)
    }
}
class course extends info{
    constructor(username,email,course){
        super(username)
        this.email = email
        this.course = course
    }
    plane(){
        
        console.log(`Detail Are: ${this.email},${this.username},${this.course}`)
        
    }
}
// const chai = new info("Tejas")
// chai.masala()
const tea = new course("Tejas","Khiare@123",45)
tea.plane()