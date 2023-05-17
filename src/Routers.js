const express = require("express"); 
const path = require('path');
const app = express();
const router = express.Router();

const index = path.resolve(__dirname, '../build/index.html');
// app.use(express.static(path.join(__dirname, '../build')));


// CORS 이슈 해결
const cors = require('cors');
app.use(cors());


// app.get('/', (req, res) => {
//   res.sendFile(index);
// });

app.use(express.json({ extended: false }));

// // 라우터 등록
// router.get('*', (req, res) => {
//   res.sendFile(index);
// });

// 라우터 사용
// app.use('/', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.get('*', (req, res) => {
//   res.sendFile(index);
// });