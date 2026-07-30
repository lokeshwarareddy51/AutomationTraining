import fs from 'fs';
import xlsx from 'xlsx';



export class ExcelUtils{


        static readExcel(filepath:string,sheetname:string):any{


            if(!fs.existsSync(filepath)){

                throw new Error ("File Not Found");

            }

            const workbook=xlsx.readFile(filepath);

            const sheet=workbook.Sheets[sheetname];

            if(!sheet){

                throw new Error ("Sheet is not found");

            }

            return xlsx.utils.sheet_to_json(sheet);


        }

}

let sheetData=ExcelUtils.readExcel("./files/TestData.xlsx","Sheet1");

console.log(sheetData[1]["EmpName"]);