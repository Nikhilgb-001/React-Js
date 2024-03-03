var obj = {
    "name": "nikhil",
    age: 22,
    email: "gHs8H@example.com",
}

// spread operator to copy the object 
const objCopy = { ...obj }


// destructuring the name form object
const { name } = obj

var obj2 = {
    name: "nikhil", age: 22, email: "gHs8H@example.com", social: {
        fb: {
            first: "gbnikhil",
            second: "nikhil",
        }, insta: "nikhil", twitter: "nikhil"
    }
}

const { first, second } = obj2.social.fb;

// const{val1,,val2} = obj2; gives error
// const obj2copy = {...obj2};


// array destructuring

var array = [1, 2, function () { }, 33,];

// const [fir, sec] = array;

const [fir, , sec] = array //returns 1 and function
// const [fir,,,sec] = array returns 1,33


// Arrow fucntions 

const abcd = () => {
    console.log("nikhil");
}

abcd(); // norml arrow function

const abcd2 = () => console.log("nikhil2");
abcd2(); //only used when only one line of code of one return type 

const abcd3 = () => "nikhil.gb" // arrow func with implicit return

console.log("hey " + abcd3());

const abcd4 = () => ({
    name: "nikhil",
    age: 22
}) //returning a object

console.log(abcd4());
// console.log(abcd4().name + " " + abcd4().age);

// map filter and reduce

var arr = [1, 2, 3, 4, 5, 22, 34,39,69,99];

// add +5 to all the values which are greater than 5 in the array and return the new array
const ans = arr.map((val) => val>5 ? val+5 :val)

// const ans = arr.map((val) => val>5)

// const ans = arr.map((val)=>val*2)
// const ans = arr.map((val)=>{
//   return val*2  
// })

console.log(ans);

var arr2 = [1, 2, 3, 4, 5, 22, 34,39,69,99];

// const ans2 = arr2.filter((val)=>val) //makes a copy of the array 

// const ans2 = arr2.filter((val)=>val>5)
// const ans2 = arr.filter((val)=>val<5)

var arrobj = [
    {name:"nikhil", age:22, gender:"male"},
    {name:"solomon", age:22, gender:"male"},
    {name:"kavya", age:23, gender:"female"},
    {name:"raji", age:23, gender:"female"},
]
const ans2 = arrobj.filter((val)=>val.gender === "male");

console.log(ans2);
