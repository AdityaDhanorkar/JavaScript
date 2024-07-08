var a = 10
let b = 20
const c = 30

// console.log(a);
// console.log(b);
// console.log(c);
if(true)
{
    let b = 200
    const c = 60
    var a = 40
    // console.log("Inner :" ,b);
}

// console.log(a);
// console.log(b);
// console.log(c);


function UserName()  {
     const usr = "Aditya"

     function Channel(){
        const ChannelName = "Coffe With Adi"
        console.log(usr);
     }
    //  Channel()
    //  console.log(ChannelName);

}
UserName()

if(true){
    const Name = "Raghu"

    if(Name === "Raghu"){
        const Last ="Dhanorkar"
        // console.log(Name);
        // console.log(Last);
    }
    // console.log(Last);
    // console.log(Name);
}

// console.log(addOne(5))  //Acces Before Initialization

function addOne(num){
    return num+1
}


// console.log(addTwo(5)) //Can't Acess Before initialization

const addTwo = function(num){
    return num+2
}
