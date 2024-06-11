
 async function fetchRandomImage() {
    try {
      const randomId = Math.floor(Math.random() * 5000) + 1; // JSONPlaceholder has 5000 images
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomId}`);
      const image = await response.json();
      displayCard(image);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Display the card on the page
  function displayCard(image) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear any existing content

    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-lg overflow-hidden m-4 transition transform hover:scale-105';

    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.title;
    img.className = 'w-full';

    const container = document.createElement('div');
    container.className = 'p-4';

    const title = document.createElement('h4');
    title.textContent = image.title;
    title.className = 'text-lg font-semibold mb-2';

    const description = document.createElement('p');
    description.textContent = 'this is a simple card component with JSONPlaceholder API';
    description.className = 'text-gray-600';

    container.appendChild(title);
    container.appendChild(description);
    card.appendChild(img);
    card.appendChild(container);
    cardContainer.appendChild(card);
  }

  // Call the function to fetch and display the random image
  fetchRandomImage();