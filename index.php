<!DOCTYPE html>
<html lang="pt-br">
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