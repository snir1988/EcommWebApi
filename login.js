const express = require('express')
const app = express()
const port = process.env.PORT || 3030;
const jwt=require('jsonwebtoken');
const PrivateKey = "sniravitan";
const token=jwt.sign({Uid:88,Email:"ylapidot@gmail.com"},PrivateKey,{expiresIn:'1h'});
console.log(token);

const authMiddle=(req,res,next)=>{
    try{const authString=req.headers.authorization; 
        const arr=authString.split(' ');
        const token=arr[1];
        const obj=jwt.verify(token,PrivateKey); 
        console.log(obj); 
        next();
    }
    catch(err){
        return res.status(500).json({msg:err.message}); 
    }
};

app.get('/products', (req, res) => res.status(200).json({msg:"regulardata"})); 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));