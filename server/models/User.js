const mongoose = require("mongoose"); // mongoose 불러오기

// Schema 생성
const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_pw: {
    type: String,
    required: true,
  }
});

// model을 export 해주기
const User = mongoose.model("user", UserSchema);
module.exports = {User}