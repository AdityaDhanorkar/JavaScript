const user ={
    userName : "Aditya",
    loginCount :8,
    signIn : true,

    getUserDetail : function(){
        console.log("Welcome Dhanorkar");
        console.log(`Welcome ${this.userName}`);
    }
}

// console.log(user);
// console.log(user.userName);
// console.log(user.this);
// console.log(user.getUserDetail());

function User1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User1("hitesh", 12, true)
const userTwo = new User1("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);