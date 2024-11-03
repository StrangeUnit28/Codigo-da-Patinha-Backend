// CHAMADAS À BIBLIOTECAS 
const express = require('express')
const app = express()
const bodyParser = require('body-parser') // NECESSÁRIA PARA LIDAR COM REQUISIÇÕES DE FORMS


// CONEXÃO COM BANCO DE DADOS
const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'pc-luccas',
  password: '',
  database: 'TesteDB',
//   port:3000
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database.');
});
// connection.end()

app.use(bodyParser.urlencoded({ extended: true}))

app.listen(3000, function(){
    console.log('server running on port 3000'); 
})

app.set('view engine', 'ejs');

app.get('/', (req,res) =>  {
    res.render('index.ejs');
})

app.post('/show', (req,res) => {
    console.log(req.body);
    const { nome, especie, data_nascimento, descricao, status } = req.body;

    const insertQuery = 'INSERT INTO pets (nome, especie, data_nascimento, descricao, status) VALUES (?, ?, ?, ?, ?)';
    const values = [nome, especie, data_nascimento, descricao, status];

    connection.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error('Error inserting data into database:', err);
          res.send('Error saving pet information.');
          return;
        }
        console.log('Pet information saved:', result);
        res.send('Pet information saved successfully!');
      });
})
