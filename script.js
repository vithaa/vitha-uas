// Variabel untuk menyimpan data
var data = [];
var editIndex = -1;

// Fungsi untuk menambahkan atau memperbarui data
function addOrUpdateData(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  var name = nameInput.value;
  var email = emailInput.value;

  if (editIndex === -1) {
    // Tambahkan data baru
    data.push({ name, email });
  } else {
    // Perbarui data yang ada
    data[editIndex] = { name, email };
    editIndex = -1;
  }

  // Perbarui tampilan tabel
  renderTable();

  // Reset form input
  nameInput.value = "";
  emailInput.value = "";
}

// Fungsi untuk mengedit data
function editData(index) {
  var item = data[index];
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  nameInput.value = item.name;
  emailInput.value = item.email;

  editIndex = index;
}

// Fungsi untuk menghapus data
function deleteData(index) {
  data.splice(index, 1);
  renderTable();
}

// Fungsi untuk merender tabel data
function renderTable() {
  var dataList = document.getElementById("crudList");
  dataList.innerHTML = "";

  data.forEach(function(item, index) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var emailCell = document.createElement("td");
    var actionCell = document.createElement("td");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    nameCell.textContent = item.name;
    emailCell.textContent = item.email;

    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editData(index);
    });

    deleteButton.textContent = "Hapus";
    deleteButton.addEventListener("click", function() {
      deleteData(index);
    });

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(actionCell);

    dataList.appendChild(row);
  });
}

// Tambahkan event listener pada form submit
var crudForm = document.getElementById("crudForm");
crudForm.addEventListener("submit", addOrUpdateData);