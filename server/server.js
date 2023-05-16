const express = require('express');
const path = require('path');
const app = express();

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, './build')));

// app.get('/', (res, req) => {
//   req.sendFile(path.join(__dirname, './build/index.html'));
// });

app.listen(8080, () => {
  console.log("Listening on 8080");
});

// app.get('*', (res, req) => {
//   req.sendFile(path.join(__dirname, './build/index.html'));
// });

app.use(express.json({ extended: false })); 
app.use("/api/signup", require("./routes/api/signup"));
