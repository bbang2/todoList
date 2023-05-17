// const { User } = require("../models/User");

const express = require("express"); 
const User = require("../../models/User"); 
const router = express.Router();  
const bcrypt = require("bcryptjs");        // 암호화 모듈

router.post(
  "/signup",
  async (req, res) => {
    const { user_id, user_pw } = req.body;
    consolel.log(req.body,'정보 오나요')

    try {
      let user = await User.findOne({ user_id });
			if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }


       user = new User({
        user_id,
        user_pw
      });

      // password를 암호화 하기
      const salt = await bcrypt.genSalt(10);
      user.user_pw = await bcrypt.hash(user_pw, salt);

      await user.save();

      res.send("Success");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router; // export