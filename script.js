document.addEventListener('DOMContentLoaded', function () {
    // Prevent right-click (context menu)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Prevent inspect element shortcuts
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === 'i' || event.key === 'Shift' || event.key === 'u' || event.key === 'j')) {
            event.preventDefault();
        }
    });

    // Show main content after 3 seconds
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);

    const rentals = [
        {
            title: 'Modern Apartment',
            description: 'A stylish apartment in the city center.',
            price: '$1200/month',
            photo: 'https://rockfordconstruction.net/wp-content/uploads/2024/03/10-Steps-to-Building-a-Successful-Apartment-Complex-in-Ohio-.jpg',
            ownerName: 'John Doe',
            address: '123 City Center',
            phoneNumber: '123-456-7890',
            isBooked: false
        },
        {
            title: 'Cozy Cottage',
            description: 'A cozy cottage in the countryside.',
            price: '$800/month',
            photo: 'https://images.trvl-media.com/lodging/30000000/29140000/29135100/29135051/ddd084d5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
            ownerName: 'Jane Smith',
            address: '456 Countryside Road',
            phoneNumber: '987-654-3210',
            isBooked: true
        },
        {
            title: 'Luxurious Villa',
            description: 'A luxurious villa with a private pool.',
            price: '$3000/month',
            photo: 'https://www.favouritehomes.com/wp-content/uploads/2021/12/luxury-villa.jpg',
            ownerName: 'James Brown',
            address: '789 Seaside Blvd',
            phoneNumber: '555-123-4567',
            isBooked: true
        }
    ];

    const rentalsContainer = document.getElementById('rentals');
    const searchInput = document.getElementById('search');
    const submissionSuccess = document.getElementById('submissionSuccess');
    const toggleModeButton = document.getElementById('toggle-mode');

    function displayRentals(filteredRentals = rentals) {
        rentalsContainer.innerHTML = '';
        filteredRentals.forEach(rental => {
            const rentalCard = document.createElement('div');
            rentalCard.classList.add('col-md-4');

            rentalCard.innerHTML = `
                <div class="card">
                    <img src="${rental.photo}" class="card-img-top" alt="${rental.title}">
                    <div class="card-body">
                        <h5 class="card-title">${rental.title}</h5>
                        <p class="card-text">${rental.description}</p>
                        <p class="card-text"><strong>${rental.price}</strong></p>
                        <p class="card-text">Owner: ${rental.ownerName}</p>
                        <p class="card-text">Address: ${rental.address}</p>
                        <a href="tel:${rental.phoneNumber}" class="btn btn-primary"><i class="fas fa-phone-alt"></i> Call</a>
                        <span class="dot ${rental.isBooked ? 'red' : 'green'}"></span> ${rental.isBooked ? 'Booked' : 'Not Booked'}
                    </div>
                </div>
            `;

            rentalsContainer.appendChild(rentalCard);
        });
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRentals = rentals.filter(rental =>
            rental.title.toLowerCase().includes(searchTerm) ||
            rental.description.toLowerCase().includes(searchTerm)
        );
        displayRentals(filteredRentals);
    });

    // Toggle Dark Mode
    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    displayRentals();
});
