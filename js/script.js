const url = "https://jsonplaceholder.typicode.com/users";

// Solicitud GET
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al conectar con la API: ${response.status}`);
        }
        return response.json();
    })
    .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${user.id}, Nombre: ${user.name}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("Hubo un problema:", error);
    });
