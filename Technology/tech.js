fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        
        const techData = data.technology;
        const techImage = document.getElementById('tech-image');
        const techName = document.getElementById('name');
        const techDescription = document.getElementById('description');

        function getImagePath(index) {
            return window.innerWidth >= 1024 ? techData[index].images.portrait : techData[index].images.landscape;
        }

        function updateTechContent(index) {
            techImage.src = getImagePath(index);
            techName.textContent = techData[index].name;
            techDescription.textContent = techData[index].description;
            // نخزن التقنية الحالية
            currentIndex = index;
        }

        // Initialize with the first technology
        let currentIndex = 0;
        updateTechContent(currentIndex);

        // Add event listeners to the numbers
        const numbers = document.querySelectorAll('.number');
        numbers.forEach((number, index) => {
            number.addEventListener('click', () => {
                // Remove active class from all numbers
                numbers.forEach(n => n.classList.remove('active1'));
                // Add active class to the clicked number
                number.classList.add('active1');
                // Update the technology content
                updateTechContent(index);
            });
        });

        // 🔥 فقط Event Listener واحد للـ resize
        window.addEventListener('resize', () => {
            techImage.src = getImagePath(currentIndex);
        });
    });
