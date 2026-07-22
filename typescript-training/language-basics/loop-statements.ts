for (let i: number = 1; i < 10; i++) {

    console.log("test")
   

}


let j: number = 1;
let pageloader: boolean = false;

while (j > 0) {
    if (pageloader || j > 5) {

        break;
    }
   
    console.log("page is refreshed")
     pageloader=true;

    j++;

}

let arr:number[]=[1,2,3,5,6];

for(let abcd of arr){

    console.log(abcd)



}

//console.log(arr.length);

for(let i:number=0;i <=arr.length-1; i++){//i=0 --i<5 -- i++ //1//2//3//4//5

//console.log(arr[i]);

}


interface objs {

    name: string;
    id: number;

}

let objName: objs = {

    name: "loki",
    id: 1234

}

for(let abc in objName){

//console.log(abc);
console.log(objName[abc as keyof(objs)]);

}

let x=0;
do{

console.log("print the statment")
x++;
if(x==5){
break;

}

} while(x>0)




