class empDetails{

     Empid:number;
       Empid2:number;

     constructor(id:number,id2:number){
        this.Empid=id;
        this.Empid2=id2

     }

    empdata1(){

        console.log(this.Empid);

    }
    empdata2(){

       console.log(this.Empid2);

    }

}
let newobj=new empDetails(10,20);

newobj.empdata1();
newobj.empdata2();











