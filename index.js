//import Main from "./src/index.js";
const express = require('express')
const path = require('path');
const routes = require('./src/Routers')
const app = express()
const port = 3040
const { User } = require('./server/models/User')

const bodyParser = require('body-parser')
const bcrypt = require("bcryptjs");        // 암호화 모듈

const mongoose = require('mongoose');
const encodePW = encodeURIComponent("kongCutie@#03")
const MongoURI = `mongodb+srv://bbang2:${encodePW}@clusterbell.uxm6puk.mongodb.net/?retryWrites=true&w=majority`;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected~~~'))
    .catch(err => console.log(err, '에러에러'))



//MIME 타입 설정
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// app.get('/', (req, res) => {
//     res.render('index.html');
//     //res.sendFile(path.join(__dirname, 'build','index.html'));
//     //res.send('Welcome hilhi')
// })
app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));                               
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// app.use(routes)

app.post(
    "/signup",
    async (req, res) => {
        const { user_id, user_pw } = req.body;
        console.log(req.body, '정보 오나요11')
        try {
            // email을 비교하여 user가 이미 존재하는지 확인
            let user = await User.findOne({ user_id: user_id });
            console.log(user, '사용자가 이미 있나요?')
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