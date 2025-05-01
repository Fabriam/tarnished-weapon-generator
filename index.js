let allWeapons = []

async function fetchWeapons() {
    let url = 'https://eldenring.fanapis.com/api/weapons';

    while (url) {
        const response = await fetch(url);
        const data = await response.json();

        allWeapons.push(...data.data);
        url = data.next;
    }
}


function getRandomWeapon() {
    const index = Math.floor(Math.random() * allWeapons.length)
    return allWeapons[index]
}


function showWeapon(weapon) {
    const box = document.getElementById('weaponDisplay');
    box.innerHTML = `
        <h2>${weapon.name}</h2>
        <img src='${weapon.image}' alt='${weapon.name}' />
        <p>${weapon.description || 'no description available.'}</p>
        <p>Category: ${weapon.category || '?'}</p>
        <p>Weight: ${weapon.weight || '?'}</p>
    `;
}


document.getElementById('generateBtn').addEventListener('click', () => {
    if (allWeapons.length === 0) {
        alert('Still loading the weapons')
        return;
    }

    const weapon = getRandomWeapon()
    showWeapon(weapon)
})

fetchWeapons()


