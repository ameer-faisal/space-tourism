fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    const planetImage       = document.getElementById('planet-image');
    const planetName        = document.getElementById('planet-name');
    const planetDescription = document.getElementById('planet-description');
    const planetDistance    = document.getElementById('planet-distance');
    const planetTravelTime  = document.getElementById('planet-travel-time');
    const tabs              = document.querySelectorAll('.nav-dest button');

    function changeTab(tabKey, clickedBtn) {
      const destination = data.destinations.find(
        dest => dest.name.toLowerCase() === tabKey
      );
      if (!destination) return;

      planetImage.src = destination.images.png;
      planetName.textContent = destination.name;
      planetDescription.textContent = destination.description;
      planetDistance.textContent = destination.distance;
      planetTravelTime.textContent = destination.travel;

      tabs.forEach(btn => btn.classList.remove('active'));
      clickedBtn.classList.add('active');
    }

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.id.toLowerCase();  
        changeTab(key, btn);
      });
    });

    const first = document.getElementById('moon');
    changeTab('moon', first);
  })
  .catch(error => console.error('Error fetching data:', error));
