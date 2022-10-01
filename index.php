<?php
include('conexao.php');

if(isset($_POST['cpf']) || isset($_POST['senha'])) {

   if(strlen($_POST['cpf']) == 0) {
      
   } else if(strlen($_POST['senha']) == 0) {
      
   } else {

      $cpf = $mysqli->real_escape_string($_POST['cpf']);
      $senha = $mysqli->real_escape_string($_POST['senha']);

      $sql_code = "SELECT * FROM usuarios WHERE cpf = '$cpf' AND senha = '$senha'";
      $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

      $quantidade = $sql_query->num_rows;

      if($quantidade == 1) {

         $usuario = $sql_query->fetch_assoc();


         if(!isset($_SESSION)) {
            session_start();
         }

         $_SESSION['id'] = $usuario['id'];
         $_SESSION['nome'] = $usuario['nome'];

         header("Location: painel.php");


      } else {
         die("Falha ao logar! CPF ou Senha incorretos.");
      }
   }

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Login</title>
   <!-- Google Font -->
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
   <!-- CSS -->
   <link rel="stylesheet" href="style.css">
</head>

<body>
   <article>
      <h1>Faça login<br>E entre para fazer sua escolha</h1>
      <img src="robo-2.png" alt="robot-blue">
   </article>
   <aside class="form">
      <div class="card-login">
         <h1>LOGIN</h1>
         <form action="" method="POST">
            <div class="textfield">
               <label for="cpf">CPF</label>
               <input type="text" name="cpf" placeholder="Digite seu CPF">
            </div>
            <div class="textfield">
               <label for="senha">Senha</label>
               <input type="password" name="senha" placeholder="Digite sua senha">
            </div>
         <button class="btn-login" type="submit">Login</button>   
         </form>
      </div>
   </aside>
</body>

</html>