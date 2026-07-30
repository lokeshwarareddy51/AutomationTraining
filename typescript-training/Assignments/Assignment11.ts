let rows =5;

for(let i=1; i<=rows;i++){

    let sum="";

     for(let k=rows; k>=i; k--){

       sum+=" ";
    }

    for(let j=1; j<=i; j++){

       sum+=j+" ";
    }

    console.log(sum);

}

let cols=4;

for(let i=cols; i>=1;i--){

    let sum="";
    
     for(let k=cols; k>=i; k--){

       sum+=" ";
    }
    for(let j=1; j<=i; j++){

       sum+= " "+j;
    }

   
    console.log(sum);

}