
abstract class employeecourse {

    javacourse() {

        console.log("this is a java course")

    }

    abstract pythoncourse(): void;
    abstract dotnetcourse(): void;

}

class courses extends employeecourse{

    pythoncourse(){

console.log("this is a python course")

    }

    dotnetcourse(){

console.log("this is a donet course")

    }

}
let obj=new courses();

obj.javacourse();
obj.dotnetcourse();
obj.pythoncourse();
