import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


// Post request
app.post("/submit-details", (req,res)=>{
    const obj = req.body;
    console.log(obj);

    res.status(200).json({
        success : true ,
        message : "Account Created"
    })
})

app.get("/" , (req,res)=>{
    res.send("<h1> File 11 started , you are at home page</h1>")
})

app.listen(PORT,()=>{
    console.log(`server started at port http://localhost:${PORT}/`)
});