
fetch('scores.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#scoresTable tbody');
    data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.pseudo}</td><td>${user.score}</td><td>${user.lastActive}</td>`;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Erreur de chargement des scores :', error);
  });
