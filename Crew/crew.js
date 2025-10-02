fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    const role        = document.getElementById('role');
    const name        = document.getElementById('name');
    const bio         = document.getElementById('bio');
    const crewImage   = document.getElementById('crew-image');
    const dots        = document.querySelectorAll('.crew-nav .dot');
    let currentIndex = 0;

    function updateCrewMember(index) {
      const member = data.crew[index];
      if (!member) return;
      role.textContent = member.role;
      name.textContent = member.name;
      bio.textContent = member.bio;
      crewImage.src = member.images.png;
      dots.forEach(dot => dot.classList.remove('active1'));
      dots[index].classList.add('active1');
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCrewMember(currentIndex);
      });
    });

    updateCrewMember(currentIndex);
  })
  .catch(error => console.error('Error fetching data:', error));    