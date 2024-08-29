const http = require("http");

const server= http.createServer((req,res)=>{
    
    if(req.url==="/"){
        res.end("hello to our homepage")
    }
     else if(req.url==="/about"){
        res.end("how are you")
    }else{
    res.end(`
     <h1>oops</h1>
     <p>this page not exist</p>
     <a href="/">back home</a>   
        `)
    }
})
server.listen(5000)