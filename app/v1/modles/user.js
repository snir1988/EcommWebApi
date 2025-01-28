const mongoose = require('mongoose'); /// יצירת חיבור לספריית מונגוס
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    pass: String,
    fullname: String
    
}); // יצירת סחימה עבור היישות משתמש






module.exports=mongoose.model('users',userSchema); //// ייצוא המודל שהוגדר ביחד עם הטבלה בבסיס הנתונים והסחימה שהגדרנו עבורה