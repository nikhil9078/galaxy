document.addEventListener('DOMContentLoaded', () => {
    const planetsContainer = document.getElementById('planetsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentPage = 1;

    fetchPlanets(currentPage);

    function fetchPlanets(page) {
        fetch(`https://swapi.dev/api/planets/?format=json&page=${page}`)
            .then(response => response.json())
            .then(data => {
                planetsContainer.innerHTML = ""; // Clear previous planets

                data.results.forEach(planet => {
                    const planetCard = createPlanetCard(planet);
                    planetsContainer.appendChild(planetCard);
                });

                // Enable/Disable pagination buttons based on available pages
                prevBtn.disabled = !data.previous;
                nextBtn.disabled = !data.next;
            })
            .catch(error => console.error('Error fetching planets:', error));
    }

    function createPlanetCard(planet) {
        const planetCard = document.createElement('div');
        planetCard.className = 'planet-card';

        planetCard.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Climate: ${planet.climate}</p>
            <p>Population: ${planet.population}</p>
            <p>Terrain: ${planet.terrain}</p>
            <div class="resident-list" id="${planet.name.replace(/\s/g, '-')}Residents"></div>
        `;

        // Fetch and display residents
        fetchResidents(planet.residents, planet.name);

        return planetCard;
    }

    function fetchResidents(residentsUrls, planetName) {
        const residentListContainer = document.getElementById(`${planetName.replace(/\s/g, '-')}Residents`);

        Promise.all(residentsUrls.map(residentUrl => fetch(residentUrl).then(response => response.json())))
            .then(residents => {
                const residentList = document.createElement('ul');
                residentList.className = 'resident-list';

                residents.forEach(resident => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${resident.name} - Height: ${resident.height}, Mass: ${resident.mass}, Gender: ${resident.gender}`;
                    residentList.appendChild(listItem);
                });

                residentListContainer.appendChild(residentList);
            })
            .catch(error => console.error(`Error fetching residents for ${planetName}:`, error));
    }

    function changePage(delta) {
        currentPage += delta;
        fetchPlanets(currentPage);
    }

    prevBtn.addEventListener('click', () => changePage(-1));
    nextBtn.addEventListener('click', () => changePage(1));
});
