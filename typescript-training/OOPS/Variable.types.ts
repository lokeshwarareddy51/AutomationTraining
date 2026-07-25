//Local Variable
// Instance Variable
// Static Variable
//global Variable

let empid = 123;

 class empDetails {

        hike=10;
        static balance=30;

    employeedSalary():number {

      let  sal=100000;
      return sal;

        // console.log("Salary is 100000");
        // console.log(empid);
        //  console.log(this.hike);
        //   console.log(empDetails.balance);


    }


}
let newobj=new empDetails();

console.log(newobj.employeedSalary());
console.log(newobj.hike);
console.log(empDetails.balance);
