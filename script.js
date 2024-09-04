let users = []; // Array to store user data

function registerUser() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if (name && email) {
    let user = { name, email };
    users.push(user); // Add the new user to the array
    displayUsers();
    clearForm();
  } else {
    alert('Please fill in all fields.');
  }
}

function displayUsers() {
  const usersList = document.getElementById('users');
  usersList.innerHTML = ''; // Clear the list

  users.forEach((user, index) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <button onclick="editUser(${index})">Edit</button>
      <button onclick="deleteUser(${index})">Delete</button>
    `;
    usersList.appendChild(listItem);
  });
}

function editUser(index) {
  // Get the user data
  let user = users[index];

  // Update form fields with user data
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;

  // Update button to "Save Changes"
  document.getElementById('userForm').querySelector('button').textContent = 'Save Changes';
  document.getElementById('userForm').querySelector('button').onclick = function() {
    saveChanges(index);
  };
}

function saveChanges(index) {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  users[index] = { name, email }; // Update the user in the array
  displayUsers();
  clearForm();
  document.getElementById('userForm').querySelector('button').textContent = 'Register';
  document.getElementById('userForm').querySelector('button').onclick = function() {
    registerUser();
  };
}

function deleteUser(index) {
  if (confirm(`Are you sure you want to delete ${users[index].name}?`)) {
    users.splice(index, 1); // Remove the user from the array
    displayUsers();
  }
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}

displayUsers(); // Display initial users (if any)