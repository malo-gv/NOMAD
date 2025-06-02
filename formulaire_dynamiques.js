
const travelerInput = document.getElementById('travelers');
const container = document.getElementById('passenger-details');
let currentCount = 0;

travelerInput.addEventListener('input', function () {
    let count = parseInt(this.value);

    if (isNaN(count) || count <= 0) {
        container.innerHTML = '';
        currentCount = 0;
        return;
    }

    // Évite de tout recréer si le nombre est le même
    if (count === currentCount) return;

    container.innerHTML = ''; // Réinitialiser le formulaire
    currentCount = count;

    for (let i = 1; i <= count; i++) {
        const group = document.createElement('div');
        group.className = 'passenger-group';

        group.innerHTML = `
            <h3>Voyageur ${i}</h3>
            <label for="prenom-${i}">Prénom</label>
            <input type="text" id="prenom-${i}" name="voyageur[${i}][prenom]" required>

            <label for="nom-${i}">Nom</label>
            <input type="text" id="nom-${i}" name="voyageur[${i}][nom]" required>

            <label for="naissance-${i}">Date de naissance</label>
            <input type="date" id="naissance-${i}" name="voyageur[${i}][naissance]" required>
        `;

        container.appendChild(group);
    }
});
