const form = document.getElementById('activity-form');
const tableBody = document.querySelector('#activity-table tbody');
const activitySelect = document.getElementById('activity');
const durationInput = document.getElementById('duration');
const overlay = document.querySelector('.overlay');

const caloriesPerMinute = {
    lari: 10,
    bersepeda: 8,
    renang: 11
};

const backgrounds = {
    lari: 'img/lari.jpg',
    bersepeda: 'img/bersepeda.jpg',
    renang: 'img/renang.jpg'
};

activitySelect.addEventListener('change', () => {
    const olahraga = activitySelect.value;
    overlay.style.backgroundImage = url('${backgrounds[olahraga]}');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const olahraga = activitySelect.value;
    const durasi = parseInt(durationInput.value);
    const kalori = durasi * (caloriesPerMinute[olahraga] || 0);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${olahraga.charAt(0).toUpperCase() + olahraga.slice(1)}</td>
        <td>${durasi}</td>
        <td>${kalori}</td>
    `;

    tableBody.appendChild(row);
    form.reset();
});