const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is compelete"); 
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"Aditya", email:"chai@sample.com"})
    },1000)
}).then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({UserName:"Aditya" , pass:"123"})
        }else{
            reject("ERROR : Something Went Wrong")
        }
    },1000)
})

PromiseFour.then((user)=>{
    console.log(user);
    return user.UserName;
}).then((UserName)=>{
    console.log(UserName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{console.log("Resolve Or Reject");})

