
class empdetails{


     name:string="lokeswara Reddy";

     emppersonaldetails(){

         let  name:string="aadvika Reddy";

        
        console.log(name)

     }

     getname(){
 let name:string="lokeswara Reddy";
        console.log(name);
     }



}

class emploans extends empdetails {

     name:string="Reddy";

    emppersonaldetails(){
        
         let  name:string="roja Reddy";

          console.log(name);

        console.log(this.name);
        super.emppersonaldetails();
        super.getname();
      

     }



}

let obj=new emploans();

obj.emppersonaldetails();

