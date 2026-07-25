// Class 1
class Employee {

     salary: number = 50000;

     getSalary(): number|string {
        return this.salary;
    }
}

// Class 2
class Company extends Employee {

    displayEmployeeSalary(): void {

        const emp = new Employee();

        console.log(emp.getSalary() + " Class 2");
    }
}
//class 3
class Manager extends Company{

     showSalary(): number |string {

        const emp = new Employee();

        return emp.getSalary() + " Class 3";
    }
}


//let obj1=new Employee();

//console.log(obj1.getSalary());




let obj2=new Manager();

obj2.displayEmployeeSalary();
console.log(obj2.getSalary());
console.log(obj2.showSalary());
