
interface employeecourse {


    pythoncourse(): void;
    dotnetcourse(): void;

}

interface employeedetails {


    emppersondetails(): void;
    empeducationdetails(): void;

}

class courses implements employeecourse,employeedetails {

    pythoncourse() {

        console.log("this is a python course")

    }

    dotnetcourse() {

        console.log("this is a donet course")

    }

    emppersondetails() {

        console.log("Employee Personal Details")

    }
    empeducationdetails() {

        console.log("Employee Education details")


    }

}
let obj = new courses();

obj.pythoncourse();
obj.dotnetcourse();
obj.emppersondetails();
obj.empeducationdetails();
