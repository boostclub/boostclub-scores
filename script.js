fetch('scores.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#scoreTable tbody');
    const topCards = document.getElementById('topCards');
    data.sort((a, b) => b.score - a.score);
    const medals = ['🥇', '🥈', '🥉'];
    data.slice(0, 3).forEach((user, index) => {
      const card = document.createElement('div');
      card.className = 'top-card';
      card.innerHTML = `<div style="font-size: 2rem;">${medals[index]}</div>
        <h3>${user.pseudo}</h3>
        <p>${user.score} pts</p>`;
      topCards.appendChild(card);
    });
    data.forEach((user, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${i + 1}</td><td>${user.pseudo}</td><td>${user.score}</td><td>${user.lastActive}</td>`;
      tbody.appendChild(row);
    });
  });