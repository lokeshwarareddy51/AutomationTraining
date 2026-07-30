import fs from 'fs';
import * as PDF from "pdf-parse-new";


export class PDFUtil{

    static  async readPDF(filepath:string):Promise<string>{

        if(!fs.existsSync(filepath)){

            throw new Error("File not Found");

        }

        const databuffer=fs.readFileSync(filepath);

       // const Unit8Array=new Uint8Array(databuffer);

       // const pdfData=await PDF.default(databuffer);

      
        return "test"






    }


}


(async () => {
let pdfData= await PDFUtil.readPDF("./files/PDF.pdf")

console.log(pdfData)})();