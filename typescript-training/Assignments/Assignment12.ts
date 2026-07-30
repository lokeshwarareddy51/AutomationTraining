//power(x,n)



function calculatePower(x:any, power:any) {

    let result:any = 1;

    if (power > 0) {

        for (let i = 0; i < power; i++) {

            result = x * result;

        }
        result=result.toFixed(5)
    }
    else {
        power = (-power);
        for (let i = 0; i < power; i++) {

            result = x * result;

        }
        result = 1 / result;

    }
    console.log(result)

}

calculatePower(2.00000,-2);


let res=Math.pow(2.1000,3);
console.log(res.toFixed(5));

