let day:string[]=["monday","tuesday","wednesday","thursday","friday","saturday"];
let newchannels:string[]=["india","Today","Indian","Express"];


//push()
day.push("sunday");
//pop()
day.pop();
//unshift()
day.unshift("sunday");
//shift()
day.shift();
//splice
day.splice(0,0,"3")
//slice
let newday=newchannels.slice(1,4);
//concat
let news=day.concat(newchannels);
//indexof
let num=day.indexOf("tuesday");
day.reverse();
day.sort();

console.log(day);
console.log(newday);
console.log(num);
//console.log(revers);