let studentNames:string[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75, 80, 82];
let addmarks:number[]=[];

let average=0;


for(let i:number=0;i<marks.length;i++){

 addmarks.push(marks[i]+10);
 average+=marks[i]+10;
 console.log(studentNames[i]+":"+addmarks[i]);
}

console.log(`Average is ${average/3}`);