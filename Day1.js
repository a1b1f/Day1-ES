
//--1-
// function swap(){
//     let a = "First";
//   let b = "Second";
//   [a, b] = [b, a];
//     console.log([a,b]);
// }
//  swap();

 //--2--

// function sumAll(num,...args) { 
//     let sum = 0;
    
  
//     for (let arg of args){
//     sum = Math.max(arg);
// }

//     return sum;
//   }
//   console.log(sumAll(5,6,8));


//--3--
// let student={
//     name:"ahmed",
//     university:"Aswan",
//     faculty:"Arts",
//     gradd:"c+"

// }
// console.log(`my name is ${student.name}, my university ${student.university}, my faculty ${student.faculty}, my grade ${student.gradd}`);


//--4--

// let arr=["Egypt","Aswan","Qena","Naga-Hammadi","Egypt"]


//--a--
// console.log(s1.add("Egypt"));

//--b--
// console.log(s1=[...s1]);
// for(let i of s1.values());


//--C--
// let s1=[...new Set(arr)];//return all element of arr
// console.log(arr);
// let dupChars = arr.filter((c, index) => {
//     return arr.indexOf(c) !== index;
// });
// console.log(dupChars);


//--e--
// Array.prototype.union = function(a) 
// {
//     var r = this.slice(0);
//     a.forEach(function(i) { if (r.indexOf(i) < 0) r.push(i); });
//     return r;
// };

// Array.prototype.diff = function(a)
// {
//     return this.filter(function(i) {return a.indexOf(i) < 0;});
// };

// var s4 = [1, 2, 3, 4];
// var s5 = [3, 4, 5, 6];
// console.log(s4);

//--5--

let Student=new Map();
Student.set("name",{
    Grades:[{Coursename:"JavaScript", Grade:"Excellent"},
        {Coursename:"Jquery", Grade:"Good"},
        {Coursename:"Jquery", Grade:"V.Good"},
        {Coursename:"ESNext", Grade:"Good"},
        {Coursename:"NodeJS", Grade:"V.Good"}]
})
Student.forEach((v ) =>{
    console.log(v);
})







