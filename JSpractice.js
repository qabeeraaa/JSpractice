// JavaScript source code
// comments make code readable
// welcome to JavaScript Practice
/*
console.log("Welcome to JavaScript")
let firstName = "Mirza", lastName = "Afzal", country = "India", city = "Moradabad", age = "26", isMarried = false
*/
function yourName(myName) {

    let myName = document.getElementById("name").value;
    let you = myName.length;
    if (you >= 7) {
        return "Your name is long";
    } else {
        return "Your name is short";
    }
}
function drive() {
    let shom = prompt("birth year");
    if (shom > 25) {
        return document.getElementById("h").innerHTML = "you can drive";
    } else {
        return document.getElementById("h").innerHTML = "you are minor";
    }
}
function areaTri() {
    let show = prompt("height");
    let shew = prompt("base");
    return document.getElementById("g").innerHTML = `${show}` * `${shew}` * 0.5;
}
function palindrome(str) {
    let reverseStr = str.split('')
        .reverse()
        .join('');
    if (str === reverseStr) {
        return "Palindrome";
    } else {
        return "not a Palindrome";
    }
}
console.log(palindrome("eadsadeerereedasdae"))


// program to solve quadratic equation
let root1, root2;

function root(a, b, c) {
    let dis = b * b - 4 * a * c;
    if (dis > 0) {
        root1 = (-b + Math.sqrt(dis)) / (2 * a);
        root2 = (-b - Math.sqrt(dis)) / (2 * a);
        console.log(`The roots of quadratic equation
     are ${root1} and ${root2}`);
    }
    else if (dis == 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`The roots of quadratic equation 
    are ${root1} and ${root2}`);
    }
    else {
        let root1 = (-b / (2 * a)).toFixed(2);
        let root2 =
            (Math.sqrt(-dis) / (2 * a)).toFixed(2);
        console.log(
            `The roots of quadratic equation
     are ${root1} + ${root2}i and
     ${root1} - ${root2}i`
        );
    }
}
console.log(root(1, -1, -2))

// function to print each value of an array
const array = ["a", "b", "c", "d", 'e', 'f'];
for (let elements of array) {
    console.log(elements);
}


// getting current date and time
function showDateTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let nD = d.getDate();
    let mo = d.getMonth();
    let y = d.getFullYear();
    const todayDate = `${nD}/${m}/${y} ${h}:${m}`;
    return todayDate;
}
console.log(showDateTime())   // 14/27/2022 1:27



//swapping values 
function swapValues(x, y) {
    [x, y] = [y, x]
    return `The value of X and Y after swap is ${x} and ${y}`
}
console.log(swapValues(1, 6))  



/*Declare a function name reverseArray. 
It takes array as a parameter and 
it returns the reverse of the array 
(don't use method).*/
const arr = [1, 3, 2, 4, 5, 7, 8]
function reverse(array) {
    var reversed = [];
    while (arr.length) {
        reversed.push(arr.pop());
    }

    return reversed;
}

console.log(reverse());



/*
Declare a function name capitalizeArray.
 It takes array as a parameter and it
 returns the - capitalizedarray.*/
let arr = ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
const capitalizedarray = arr.map(capitalizeArray => {
    return capitalizeArray.toUpperCase();
})
console.log(capitalizedarray)

const array = ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']
/*Declare a function name removeItem. 
It takes an index parameter 
and it returns an array after removing an item */
function removeItem() {
    let a = array.splice(4, 1);
    return a;
}
console.log(removeItem())
/*
Declare a function name sumOfNumbers. 
It takes a number 
parameter and it adds all the numbers in that range.*/
function sumOfNumbers() {
    let add = 0;
    for (let i = 0; i < arguments.length; i++) {
        add += arguments[i];
    }
    return add;
}
console.log(sumOfNumbers(1, 2, 3, 4))

/* Declare a function name sumOfOdds. 
It takes a number parameter 
and it adds all the odd numbers in that - range.*/

const sumOfOdds = (arr, condition) => {
    const add = (num1, num2) => {
        if (condition === 'even' && num2 % 2 === 0) {
            return num1 + num2;
        }
        if (condition === 'odd' && num2 % 2 === 1) {
            return num1 + num2;
        };
        return num1;
    }
    return arr.reduce((acc, val) => add(acc, val), 0);
}
console.log(sumOfOdds([1, 2, 3, 4, 5], "even"));


/*
Declare a function name evensAndOdds . 
It takes a positive integer as parameter and 
it counts number of evens and odds in the number.
*/
function evensAndOdds(num) {
    let s = [];
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            s++;
        }
    } return `The number of odds are ${(num + 1) - s}.
The number of evens are ${s}.`;
}
console.log(evensAndOdds(10))

/*
Write a function which takes any
 number of arguments and
 return the sum of the arguments */
const sum = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sum(1, 2, 3, 4))


/*Writ a function which generates a randomUserIp.
*/
function randomUserIp() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
   let a = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let b = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let c = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let d = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let e = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let f = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    return `${a}${b}${c}${d}${e}${f}`
}
console.log(randomUserIp())


/* Declare a function name randomHexaNumberGenerator. 
When this function is called it generates a random hexadecimal number. 
The function return the hexadecimal number.
*/
function randomHexaNumberGenerator() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let a = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let b = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let c = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let d = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let e = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    let f = alphabet[Math.floor(Math.random() *
        alphabet.length)]
    return `#${a}${b}${c}${d}${e}${f}`
}
console.log(randomHexaNumberGenerator())


/* Modify the userIdGenerator function. 
Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but 
it takes two inputs using prompt(). 
One of the input is the number of characters and
 the second input is the number of ids which are 
 supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
function userIdGeneratedByUser(n, n1) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let l = alphabet.length;
    let userId = 0;
    for (let i = 0; i < n; i++) {
        userId += alphabet.charAt(Math.floor(Math.random() * l));
    }
    return userId;
}
console.log(userIdGeneratedByUser(7))


/* 
Write a function 
name rgbColorGenerator and it generates rgb colors.
*/
function rgbColorGenerator() {
    let rg = Math.floor(Math.random() * 255);
    let rb = Math.floor(Math.random() * 255);
    let ra = Math.floor(Math.random() * 255);
    return `rgb(${rg},${rb},${ra})`
}
console.log(rgbColorGenerator())


/*
Write a function convertHexaToRgb which converts
 hexa color to rgb and it returns an rgb color.
 */
const fullHex = (hex) => {
    let r = hex.slice(1, 2);
    let g = hex.slice(2, 3);
    let b = hex.slice(3, 4);

    r = parseInt(r + r, 16);
    g = parseInt(g + g, 16);
    b = parseInt(b + b, 16);
    return `rgb(${r},${g},${b})`;
}
const hex2rgb = (hex) => {
    if (hex.length === 4) {
        return fullHex(hex);
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`;
}

console.log(hex2rgb("#aa3356"));


/*
Write a function convertRgbToHexa which
 converts rgb to hexa color and it returns an hexa color.
*/
function convertRgbToHexa(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + convertRgbToHexa(r) + convertRgbToHexa(g) + convertRgbToHexa(b);
}

console.log(rgbToHex(23, 45, 221));



/*
Write a function generateColors which can generate any
 number of hexa or rgb colors.

console.log(generateColors('hexa', 3))
 ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1))
 '#b334ef'
console.log(generateColors('rgb', 3))
 ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1))
*/
function generateColors(type, n) {
    let result = [];
    for (let x = 0; x < n; x++) {
        if (type === "rgb") {
            let num = Math.round(0xffffff * Math.random());
            let r = num >> 16;
            let g = (num >> 8) & 255;
            let b = num & 255;
            result.push(`rgb(${r},${g},${b})`)
        }
        else if (type === "hexa") {
            let hexDigits = "0123456789ABCDEF";
            let randomHex = ""
            for (let i = 0; i < 6; i++) {
                randomHex += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length))
            }
            result.push(randomHex);
        } else {
            console.log("type not applicable");
        }
    }
    return result;
}
console.log("rgb", generateColors("rgb", 5));
console.log("hex", generateColors("hexa", 1));


/*
Call your function shuffleArray, it takes an array as a 
parameter and it returns a shuffled array
*/
function shuffleArray(array) {
    return arr.sort(() => Math.random() - 0.5)
}

let arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr))



/*
Call your function factorial, it takes a whole 
number as a parameter and it return a factorial of the number
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(9))



/*
Call your function isEmpty, 
it takes a parameter and it checks if it is empty or not
*/
function isEmpty(array) {
    if (array.length > 0) {
        return "No"
    } else {
        return "yes"
    }
}
let arr = []
console.log(isEmpty(arr))



/*
Call your function sum, 
it takes any number of arguments and it returns the sum.
*/
let add = (...args) => {
    let sum = 0;
    for (const elements of args) {
        sum += elements;
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5, 5))



/*
Write a function called modifyArray takes array as 
parameter and modifies the fifth item of the array and
 return the array. If the array length is less than
  five it return 'item not found'.
*/
const countries = ['Finland', 'Norway', 'Denmark', 'Iceland']
let array = ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"];
function modifyArray(arr, p) {
    if (arr.length >= 5) {
        let b = arr
        arr[4] = p;
        return b;
    } else {
        return "item not found"
    }
}
console.log(modifyArray(countries, "wer"))  //item not found

console.log(modifyArray(array, "India")) // [ 'FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'wer' ]




/*
Write a function called isPrime,
 which checks if a number is prime number.
*/

function isPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(103))



/*
Write a functions
 which checks if all items are unique in the array.
*/
let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 1, 4];

function unique(array) {
    array.uniq = function () {
        this.sort();
        for (let i = 0; i < this.length; i++) {
            if (this[i + 1] === this.length) return true;
            if (this[i] === this[i + 1]) return false;
        }
    }
}

unique(array1);
unique(array2);

console.log(array1.uniq());
console.log(array2.uniq());



/*
Write a function which checks
 if all the items of the array are the same data type.
*/
let arr = [1, 4, 5, 7, 'yes', 8, 0]
let arr1 = [1, 4, 5, 7, 9, 8, 0]
function checkType(array) {
    return new Set(array.map(x => typeof x)).size <= 1;
}

console.log(checkType(arr)) // false
console.log(checkType(arr1)) // true


/*
JavaScript variable name does not support special
characters or symbols except $ or _.Write a function
isValidVariable which check if a variable
is valid or invalid variable.
*/







/*
Write a function which returns array of seven 
random numbers in a range of 0-9. 
All the numbers must be unique.
*/
function generateArrayOfNumbers(min, max) {
    let a = []
    a = [...Array(max).keys()].slice(min)
    return a
}
console.log(generateArrayOfNumbers(40, 50))







/*
Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
*/
let countries = ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
function revers(array) {
    let a = array.reverse();
    return a;
}
console.log(revers(countries))



          ooooobbbbbbbbjjjjjjjeeeeeccccccccccttttttttttsssssssss

/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/
const dog = {
    name: "qoo",
    legs: 4,
    color: "white",
    age: 2,
    bark: function () {
        return "woof-woof"
    }
};
const nm = dog.name;
const lg = dog.legs;
const cl = dog.color;
const ag = dog.age;
let wd = dog.bark()
dog.breed = "dontknow";
dog.getDogInfo = `${nm} is my dog. He has ${lg} legs with ${cl}. He is ${ag} \
years old and he barks like ${wd}`
console.log(dog)


/*
Find the person who has many skills in the users object.

Count logged in users, count users having greater than equal to 50 points from the following object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}```
Find people who are MERN stack developer from the users object

Set your name in the users object without modifying the original users object

Get all keys or properties of users object

Get all the values of users object

Use the countries object to print a country name, capital, populations and languages.

Exercises: Level 3
Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and it has totalIncome,
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and
its description.
*/
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let all = users.Alex.skills.length
let asl = users.Asab.skills.length
let brl = users.Brook.skills.length
let dnl = users.Daniel.skills.length
let jnl = users.John.skills.length
let tml = users.Thomas.skills.length
let pll = users.Paul.skills.length
let ar = [all, asl, brl, dnl, jnl, tml, pll]

const maxSkills = ar.reduce(function (a, b) {
    return Math.max(a, b);
}, -Infinity);
let w = users.Alex.isLoggedIn;
let x = users.Asab.isLoggedIn;
let y = users.Brook.isLoggedIn;
let z = users.Daniel.isLoggedIn;
let m = users.John.isLoggedIn;
let n = users.Thomas.isLoggedIn;
let o = users.Paul.isLoggedIn;
let logg = [w, x, y, z, m, n, o]

console.log(logg)






/*
Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and
it has totalIncome, totalExpense, accountInfo,addIncome, 
addExpense and accountBalance methods. Incomes is a set of incomes and
its description and expenses is a set of incomes and its description.
*/

const personAccount = {
    firstName: "",
    lastName: "",
    incomes: {
        incomeMonthly: 23554,
        incomeBonus: 5765,
        onlineIncome: 12456
    },
    expenses: {
        foodExpense: 8000,
        trns: 2000,
        others: 15000,
    },
    totalIncome: function () {
        let s = 0;
        let q = Object.values(this.incomes)
        for (let i = 0; i < q.length; i++) {
            s += q[i]
        }
        return `${s}`;
    },

    totalExpense: function () {
        let e = 0;
        let q = Object.values(this.expenses);
        for (let i = 0; i < q.length; i++) {
            e += q[i]
        }
        return `${e}`;
    },
    accountBalance: function () {
        let a = 0;
        a = `Account Balance is ${this.totalIncome() - this.totalExpense()}`;
        return a;
    }
}
personAccount.incomes.extraIncome = 2454;
personAccount.expenses.extraExpenses = 2454;

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())



/*
 *  const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
Imagine you are getting the above users collection from a MongoDB database. 


a. Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application

The products array has three elements and each of them has six properties.

a. Create a function called rateProduct which rates the product

b. Create a function called averageRating which calculate the average rating of
a product

Create a function called likeProduct. This function will helps to like
to the product if it is not liked and remove like if it was liked.

*/


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
function signUp() {
    let _id = "ab12ex";
    let username = "sdssc";
    let password = "khkjbj";
    for (let i = 0; i < users.length; i++) {
        if (`${_id}` === users[i]._id) {
            return "You have an account";
        } else {
            users.push({
                _id: `${_id}`,
                username: `${username}`,
                password: `${password}`
            })
            return users;
        }
    }
}


function signIn() {
    for (let i = 0; i < users.length; i++) {
        if (`${_id}` === users[i]._id && `${password}` === users[i].password) {
            return "link to page";
        } else if (`${username}` === users[i].username && `${password}` === users[i].password) {
            return "link to page";
        } else {
            return "Password OR Id/Username is WRONG";
        }
    }
}

users.push({
    _id: '2sdd65',
    username: 'WQ',
    password: 'ewdffw',
    createdAt: new Date(),
    isLoggeddIn: true

})
console.log(signUp())
console.log(users)



