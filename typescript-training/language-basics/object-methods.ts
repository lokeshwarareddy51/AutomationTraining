

interface objName {
    "name": string;
    "id"?: number;
    "isvalid": boolean;

}

interface objName1 {
    "company": string;
    "visitid"?: number;
    "notvalid": boolean;
    "name":string;

}

let objs:objName = {

    "name": "loki",
    "id": 123,
    "isvalid": true
    
}

let objs1:objName1 = {

    "company": "null",
    "visitid": 124,
    "notvalid": false,
    "name":"pavan"
    
}

//add & update
objs.name="test"

//delete
//delete objs.id;

// check property exists or not
console.log("id" in objs);

// to get all keys from objects

console.log(Object.keys(objs));

// to get all values from objects

console.log(Object.values(objs));

// to get all entries from object

console.log(Object.entries(objs));

//check the property which type of

console.log(typeof(objs.name));

// merge the 2 objects into 1

let newobject={...objs,...objs1}


console.log(objs);
console.log(newobject);