const express=require("express");
const mongoose=require("mongoose");
const shortid=require("shortid");
const cors=require("cors");
require("dotenv").config();
const mongoUri=process.env.MONGO_URI;
const port=process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${port}`;


const app=express();
app.use(express.json());
app.use(cors());

//Connect to mongoDb 

mongoose.connect(mongoUri).then(()=>console.log("MongoDb connected successfully")).catch(error=>console.log("mongoDb connecting error",error));

app.listen(port,()=>console.log(`Server is running on port number:${port}`));

// Create schema 

const urlSchema=new mongoose.Schema({
    shortCode:String,
    originalUrl:String,
    created_at:{type:Date,default:Date.now}
});

const Url=mongoose.model("Url",urlSchema);

// post a long url 
app.post("/longUrl",async(req,res)=>{
    const {originalUrl}=req.body;

          let normalizedUrl = originalUrl.trim();
          if (!/^https?:\/\//i.test(normalizedUrl)) {
                normalizedUrl = "http://" + normalizedUrl;
                    }


    const shortCode=shortid.generate();

    const itExistOriginalUrl=await Url.findOne({originalUrl:normalizedUrl});

    if(itExistOriginalUrl){

       return res.json({shortUrl:`${BASE_URL}/${itExistOriginalUrl.shortCode}`});
    }

    try{
  
    const newUrl=new Url({shortCode,originalUrl:normalizedUrl});
    await newUrl.save();

    return  res.json({shortUrl:`${BASE_URL}/${shortCode}`})
    }
    catch{
       return res.status(400).json({error:"Invalid Url"});
    }

});

// get a short url
app.get("/:shortCode",async(req,res)=>{
    const {shortCode}=req.params;
    
    const existUrl=await Url.findOne({shortCode});
    if(existUrl){
        return res.redirect(existUrl.originalUrl);
    }
    else{
        res.status(404).json({error:"Url not found"});

    }
})
