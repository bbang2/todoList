// const express = require("express"); 
// const path = require('path')
// const router = express.Router();
// const app = express();

// const index = path.resolve(__dirname,'../build/index.html')


// // CORS 이슈 해결
// app.use(express.json());
// const cors = require('cors');
// app.use(cors());

// app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// app.listen(8080, () => {
//   console.log("Listening on 8080");
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// app.use(express.json({ extended: false })); 
// //app.use("/api/signup", require("../../server/routes/api/signup"));


// router.get('*', (req, res) => {
//   res.sendFile(index)
// })

// module.exports = router

const express = require("express"); 
const path = require('path');
const app = express();
const router = express.Router();

// const index = path.resolve(__dirname, '../public/index.html');

// CORS 이슈 해결
const cors = require('cors');
app.use(cors());

// app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.use(express.json({ extended: false }));

// // 라우터 등록
// router.get('*', (req, res) => {
//   res.sendFile(index);
// });

// 라우터 사용
app.use('/', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});