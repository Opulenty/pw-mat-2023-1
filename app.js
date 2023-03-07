<<<<<<< HEAD
//carrega as variaveis de ambinete de arquivo 
//. env para a aplicação
require('dotenv').config()
=======
// Carrega as variáveis de ambiente do arquivo
// .env para a aplicação
require('dotenv').config()

>>>>>>> 650ee2f4e47e1910ca3c742cd6075db8316edd75
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

<<<<<<< HEAD
//conexão do BD--------------------------------------

const db = require('./models')

try {
    db.sequelize.authenticate()
    console.log('SEQUELIZE: boaaaaaaaaaaaa deu certo não bugou ou explodiu')
}
catch(erro){
    console.erro('SEQUELIZE: foi de f o codigo ', error)
    process.exit(1) // encerra o servidor com erro
}
=======
// Conexão ao BD ------------------------------------------
const db = require('./models')

try {
  db.sequelize.authenticate()
  console.log('SEQUELIZE: connection has been established successfully.')
}
catch(error) {
  console.error('* SEQUELIZE: unable to connect to the database: ', error)
  process.exit(1)     // Encerra o servidor com erro
}
// ---------------------------------------------------------
>>>>>>> 650ee2f4e47e1910ca3c742cd6075db8316edd75

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/********************* ROTAS ***************************/
const users = require('./routes/users')
app.use('/users', users)

module.exports = app;
