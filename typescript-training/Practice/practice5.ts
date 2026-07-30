const sentence = "I love Playwright Automation";


    let words=sentence.split(" ");
      let result=0;
      let finalresult="";

    for(let i=0; i<words.length; i++){

        let count=words[i].length;

        if(count>result){

            finalresult=words[i];
            result=count;
            

        }
       

    }

    console.log(finalresult+" - "+result);

