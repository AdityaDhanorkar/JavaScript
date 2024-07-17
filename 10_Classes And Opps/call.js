function setUserName(usename){
    this.usename=usename;
    console.log("Called");
}
function createUser(usename , email , password){
    setUserName.call(this,usename)
    this.email=email;
    this.password=password;
}

const chai = new createUser("tea","tea@google.com",123)
console.log(chai)
