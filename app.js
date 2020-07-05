const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dewanaga',
  database: 'list_app'
})

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }

  console.log('success')
})

app.get('/', (req, res) => {
  connection.query(
    'select * from users',
    (error, results) => {
      console.log(results)
      res.render('hello.ejs')
    }
  )
})


app.listen(3000);