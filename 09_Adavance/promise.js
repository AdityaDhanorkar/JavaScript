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

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName : "Raghu",email :"raghu@sample.com"})
        }else{
            reject("ERROR : Something Went Wrong")
        }
    },1000)
})

async function consumedPromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumedPromiseFive()

// async function AlldataFetch(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E : S W E")
//     }
// }

// AlldataFetch()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
   return response.json();
}).then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})