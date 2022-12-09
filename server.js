const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
app.get('/submit',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/submit', (req, res) => {
  res.json({'validate':true});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})