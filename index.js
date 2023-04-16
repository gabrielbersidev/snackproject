const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const database = require('./Database/database');
const loginRouter = require('./Routes/login');
const signupRouter = require('./Routes/signup');
const mainRouter = require('./Routes/main');
const usernameRouter = require('./Routes/username');
const menuController = require('./Controllers/menuController');

database
  .start()
  .then(() => startServer())
  .catch((err) =>
    console.log('Erro ao se conectar com o banco de dados: ', err)
  );

const port = 3000;
const app = express();

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// Arquivos públicos
app.use('/Pages/Login/Public', express.static('Pages/Login/Public'));
app.use('/Pages/SignUp/Public', express.static('Pages/SignUp/Public'));
app.use('/Pages/Main/Public', express.static('Pages/Main/Public'));
app.use('/Pages/img', express.static('Pages/img'));

// Definição de Rotas
app.get('/', (req, res) => res.redirect('/main'));
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/main', mainRouter);
app.use('/username', usernameRouter);

function startServer() {
  app.listen(port, () => {
    console.log('Server is Listening!');
  });

  menuController.addMenu('Pão com mortadela, suco de abacaxi e banana', false);
}
