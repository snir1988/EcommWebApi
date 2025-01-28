const router = require("express").Router(); // יצירת אובייקט ראוטר
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../modles/user");

router.post("/signup", (req, res) => {
  // נקבל את פרטי המשתמש לרישום
  // ונצפין את הסיסמא
  // נשמור את פרטי המשתמש בבסיס נתונים

  const saltRaound = 11; // הגדרת ערך עבור מס סבבי ההצפנה
  const { username, pass, fullname } = req.body;
  bcrypt.hash(pass, saltRaound, (err, hashString) => {
    if (err) {
      // במקרה של שגיאה נחזיר הודעה שגיאה

      return res.status(500).json({ Msg: err.message });
    } else {
      userModel
        .insertMany([{ username, pass: hashString, fullname }])
        .then((data) => {
          return res.status(200).json(data);
        });
    }
  });
});

// נקודות קצה הרשמה
router.post("/login", (req, res) => {
  const { username, pass } = req.body;
  userModel.find({ username }).then((data) => {
    /// נחפש משתמש עם שם המשתמש שהוזן
    if (data.length == 0)
      return res.status(200).json({ Msg: "user/pass not found" });
    const hashpass = data[0].pass;
    bcrypt.compare(pass, hashpass).then((ans) => {
      return res.status(200).json({ Msg: "login succefully" });
    });
  });
}); // נקודות קצה להתחברות

module.exports = router;
