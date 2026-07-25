class Employee {

    private names: string = "loki";


    public getter() {

        return this.names;
    }

    public setter(name: string) {
       return this.names = name;


    }




}

// Class 2
class Company extends Employee {


    getdata() {

        console.log(this.getter())

    }



}


let obj1 = new Company();

obj1.getdata();
