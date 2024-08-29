const fs = require("fs");

fs.writeFile("./Content/result2.txt", "we are you and then", (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result)

}

)
