//FOR EACH LOOP 

const coding  = ["JavaScript", "Java","C" , "CPP", "Python"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (content)=>{
//     console.log(content);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item , index ,arr)=>{
//     console.log(item , index ,arr);
// })

const chai = [
    {
        language : "JavaScript",
        extension :"js"
    },
    {
        language : "Java",
        extension :"Java"
    },
    {
        language : "Python",
        extension :"py"
    },
    {
        language : "C++",
        extension :"cpp"
    }
]

// chai.forEach((item)=>{
//     console.log(item);
// })

chai.forEach((item)=>{
    console.log(item.extension);
})