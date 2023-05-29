<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

     <h2>CONTACT LIST</h2>
<table class="content-table">
  <form id="crudForm">
    <label for="name">Nama:</label>
    <input type="text" id="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <button type="submit">Simpan</button>
  </form>

  <table id="crudTable">
    <thead>
      <tr>
        <th>Nama</th>
        <th>Email</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody id="crudList">
      <!-- Data akan ditampilkan di sini -->
    </tbody>
  </table>
 
     <a href="logout.php"class="ca">logout</a>

  <script src="script.js"></script>
</body>

</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>