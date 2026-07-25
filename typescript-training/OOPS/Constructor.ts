class empDetails{

     Empid:number;

     constructor(id:number){
        this.Empid=id;

     }

    empdata1(){

        console.log(this.Empid);

    }
    empdata2(){

       console.log(this.Empid);

    }

}
let newobj=new empDetails(100);

newobj.empdata1();
newobj.empdata2();











