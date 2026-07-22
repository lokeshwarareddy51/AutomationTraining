let movieticketprice:number=500;

if(movieticketprice>500){

console.log("Magadheera")

}
else if(movieticketprice>=200 && movieticketprice<=500){

    console.log("Magadheera1")
}
else{

    console.log("Magadheera2")

}

let env:string = "qa";

switch(env){

case "prod":
    console.log("this is prod env")
    break;

case "qa":
    console.log("this is qa env")

}
