//Write a program to print * in triangle pattern
//1. If I will pass int rows = 5 then it should print triangle with 5 Rows

let rows = 10;

for (let i = 1; i <= rows; i++) {
 
    let cols="";
    for (let j = rows;  j>i ; j--) {
        
     
        cols+=" ";

    }

    for (let k = 1;  k<=i ; k++) {
        
     
        cols+="*";

    }
    console.log(cols)

}


