

// let obj = {
//     name: "Ahmed",
//     address: "qena",
//     age: 24
// }

// let handler = {
//     set(obj, prop, value) {
//     //--A--
//     if(prop==="name"){
//         if(!isNaN(value)){
//           throw ('The name is not a string ');
//         }
//         let min=0;
//         let max=7;
//         if(value<max){
//           throw ('The name must be more than 7 ');
//         }
//         obj[prop]=value;
//     }

//     //--B--
//     if(prop==="address"){
//         if(!isNaN(value)){
//           throw ('The name is not an address ');
//         }
//         obj[prop]=value;
//     }
//     //--c--
//       if (prop === 'age') {
//         if (!isFinite(value)) {
//           throw ('The age is not an integer');
//         }
//         if (value > 25 && value > 60) {
//           throw ('The age seems invalid');
//         }
//       }
//       obj[prop] = value;
//     }
//   };
  
//   let person = new Proxy(obj, handler);
//   person.name="a";
//   console.log(person.name); 
//   person.address=889;
//   console.log(person.address); 
//   person.age = 100;
//   console.log(person.age); 
  

//--2--

// class Shape
// {
//     static count=0;
//     constructor(x,y)
//     {
//         Shape.stfun();
//         this.x=x;
//         this.y=y;
//     }
//     static stfun(){
//         this.count++;
//     }
//     display()
//     {
//         console.log(this.area,this.parameter)
//     }
// }

// class rectangle extends Shape
// {
//     constructor(long,widith)
//   {
//     super(long,widith)
//     this.long=long;
//     this.widith=widith;
//   }
//     calcEaria(long,widith){
//         return long*widith;
//     }
//     calcParameter(long,widith){
//         return long+widith*2
//     }
// }

// class square extends Shape
// {
//     constructor(long,widith)
//   {
//     super(long,widith)
//     this.long=long;
//     this.widith=widith;
//   }
//     calcEaria(long,widith){
//         return long*widith;
//     }
//     calcParameter(long,widith){
//         return 2*long+widith;
//     }
// }

// class circle extends Shape
// {
//     constructor(r)
//   {
//     super(r)
//     this.r=r;
//   }
//     calcEaria(r){
//         return 3.14 * r*2;
//     }
//     calcParameter(r){
//         return 2*3.14*r;
//     }
// }

// let shape1=new Shape(10,20);
// console.log(shape1);

// let rectangle1=new rectangle();
// console.log(rectangle1.calcEaria(5,6));


// let square1=new square();
// console.log(square1.calcEaria(10,1));

// let circle1=new circle(1,2,3);
// console.log(circle1.calcEaria(5));

//--3--

// function *fib(par){
//   let x=0;
//   let y=1;
//   let count;
//   for(let i=1;i<=par;i++){
//     count=x+y;
//     x=y;
//     y=count;
//     yield count;
//   }
// }

// let w=fib(5)
// for(let val of w)
// {
//     console.log(val);
// }

//--3--
// function* fibon(par) {
//     var a = 0;
//     var b = 1;
//     var c;
//     while (true) {
//        c=a+b ;
//        a=b;
//        b=c;
//       yield c;
//       if(c==par){
//           console.log(par)
//       return;
//     }


//     }
//   }

//   fib = fibon(5);
//   for(let val of fib) {
//     console.log(val);
//   }


//--4--
let obj={
      user:"Rafie",
      age:25,
      address:"Qena",
      jop:"SWF",
      phone:"01002679809"
    }
function iterator(){   
  let a=0;
  let keys=Object.keys(this)
  let iterare=
  {
    next:()=>{
      if(a<keys.length){                
        let res={value:`${keys[a]} ===> ${this[keys[a]]}`,done:false}
        a++;
        return res
      }
      else{
        return{
          value:undefined,done:true
        }
      }
    }
  }
  return iterare;
}


obj[Symbol.iterator]=iterator

for( let val of obj)
{
  console.log(val)
}


