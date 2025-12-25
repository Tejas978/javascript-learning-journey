// Primitive datatype is stored in the form of Stack Where- 
// Copy is genreated to change the value...
let name_1 = "Tejas"
let nameC_1 = name_1
nameC_1 = "Khaire"

console.log(nameC_1);
console.log(name_1);

//

/* for Non- Primitive Data Types:*/
let youtube = {
    email : "Tejas",
    age : 21
}

let mychannel = youtube
mychannel.email = "Non-Primitive"

console.log(youtube.email);
console.log(mychannel.email);
