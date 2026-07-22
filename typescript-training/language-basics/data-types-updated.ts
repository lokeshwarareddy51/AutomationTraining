let empId: number = 1234;
let empName: string = "Loki"
let isvalid: boolean = true;
let isnull: null = null;
let isdeclare: undefined;
//union
let empIdsandNames: number | string = "1234";

interface objs {

    name: string;
    id: number;

}

let objName: objs = {

    name: "loki",
    id: 1234

}

let empIdss:Map<string|number,number|string> =new Map();
empIdss.set(123, "123");

console.log(empIdss.keys());

