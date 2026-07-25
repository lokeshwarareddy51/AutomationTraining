
let companyName = "OpenAI";

class Employee {
        EmployeeName:string;
        salary:number;

    static employeeCount = 2;

    constructor(EmployeeName:string, salary:number){
        this.EmployeeName=EmployeeName;
        this.salary=salary;

    }

    empdetails():void {

        console.log(this.EmployeeName);
         console.log(this.salary);

    }

}
console.log(Employee.employeeCount);

let obj1=new Employee("Slice", 50000);
let obj2=new Employee("Bob", 60000);

obj1.empdetails();
obj2.empdetails();
console.log(companyName);




