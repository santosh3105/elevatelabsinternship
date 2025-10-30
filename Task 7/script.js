const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading users...</p>";

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = ''; // Clear existing content

  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(card);
  });
}

reloadBtn.addEventListener('click', fetchUsers);

// Initial fetch
fetchUsers();
