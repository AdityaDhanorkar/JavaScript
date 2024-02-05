const name = "Aditya"

const nickName = 'Raghu'
// console.log(name + nickName + " Patil");
 
// console.log(`My Name Is ${name} and My Nick Name Is ${nickName} My Last Name Is Dhanorkar`);
const gameName = new String("Aditya-Patil-Dhanorkar")
// const gameName = "Aditya-Patil-Dhanorkar"

// console.log(gameName[8])
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('P'));

const newString = gameName.substring(0 , 4)
// console.log(newString);

const anotherString = gameName.slice(0 , 5)
// console.log(anotherString);

// console.log("  hello   ".trim());
const course = "   java   "
// console.log(course);
// console.log(course.trim());


// console.log(gameName.replace('a' , 'd'));

// console.log(gameName.includes('z'));

console.log(gameName.split('-'));
console.log(name.toUpperCase());
const user = "  dhanorkar   "
console.log(user.toUpperCase().trim());