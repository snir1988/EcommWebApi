const bcrypt = require('bcrypt'); ////קישור לספריית ביקריפט
const pass = "abc123"
const saltRaound = 11;
// פונקציה להצפנה של הסיסמא
bcrypt.hash(pass,saltRaound,(err,hashString)=>{
    if(err){
        console.log(err.message)        
    }else{
        console.log(hashString)
    }
});

const hashFromDb = "$2b$11$.88RPG.HcveDuSPVziasWeKtrm5W6M854Y75qYSqYeeWorPRo2H4e";
bcrypt.compare(pass,hashFromDb).then((ans=>{
    if (ans)
        console.log('ok');
    else
    console.log('not ok')
}));