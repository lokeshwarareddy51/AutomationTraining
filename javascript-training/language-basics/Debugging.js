let username = {
  name:"Chandra",
}


function greet(username) {
    username.name = "Admin";
    console.log(username.name);
}

greet(username);
console.log(username.name);

//---------------------

let username2 = "Chandra";

function greet1(username2) {
    username3 = "Admin";
    console.log(username3);
}

greet1(username2);
console.log(username2);

