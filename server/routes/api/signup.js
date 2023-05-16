// const { User } = require("../models/User");

const express = require("express"); 
const User = require("../../models/User"); // User model 불러오기
const router = express.Router();           // express의 Router 사용
const bcrypt = require("bcryptjs");        // 암호화 모듈

router.post(
  "/signup",
  async (req, res) => {
    // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
    const { user_id, user_pw } = req.body;
    consolel.log(req.body,'정보 오나요')

    try {
      // email을 비교하여 user가 이미 존재하는지 확인
      let user = await User.findOne({ user_id });
			if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }


       // user에 name, email, password 값 할당
       user = new User({
        user_id,
        user_pw
      });

      // password를 암호화 하기
      const salt = await bcrypt.genSalt(10);
      user.user_pw = await bcrypt.hash(user_pw, salt);

      await user.save(); // db에 user 저장

      res.send("Success");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router; // export