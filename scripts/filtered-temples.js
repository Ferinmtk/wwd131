// Sample array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    // Additional temple objects...
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253016,
        imageUrl:
          "https://churchofjesuschrist.org/imgs/c8f9e392284fb5ab45815e69507af83d668097bd/full/250%2C/0/default"
      },
      {
        templeName: "Seattle Washington",
        location: "Seattle, Washington, United States",
        dedicated: "2000, November, 17",
        area: 100500,
        imageUrl:
           "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-29938-thumb.jpg" 
      },
      {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana, United States",
        dedicated: "2010, June, 8",
        area: 9300,
        imageUrl:
          "https://churchofjesuschrist.org/imgs/a75beca22300a3263bd47fba03b5b0d1b5ca0753/full/320%2C/0/default"
      },
  ];
  
  // Function to create and display temple cards
    function displayTemples(templeList) {
        const container = document.getElementById('temple-container');
        container.innerHTML = ''; // Clear existing content
      
        templeList.forEach(temple => {
            const card = document.createElement('div');
            card.classList.add('temple-card');
        
            // Image with dimensions
            card.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" 
                     width="400" height="250" 
                     onerror="this.src='https://via.placeholder.com/400x250'" loading="lazy" 
                     style="aspect-ratio: 16 / 9;">
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            `;
        
            container.appendChild(card);
        });
        
      }
      
  
  // Filter temples based on criteria
  function filterTemples(filter) {
    let filteredTemples;
    switch (filter) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Home - show all temples
            break;
    }
    displayTemples(filteredTemples);
  }
  
  // Event listeners for buttons
  document.getElementById('home-button').addEventListener('click', () => filterTemples('home'));
  document.getElementById('old-button').addEventListener('click', () => filterTemples('old'));
  document.getElementById('new-button').addEventListener('click', () => filterTemples('new'));
  document.getElementById('large-button').addEventListener('click', () => filterTemples('large'));
  document.getElementById('small-button').addEventListener('click', () => filterTemples('small'));
  
  document.getElementById('hamburger').addEventListener('click', function () {
      const menu = document.getElementById('menu');
      menu.classList.toggle('show');
  });
  
  // Set current year and last modified date
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-modified').textContent = document.lastModified;

  
 
  filterTemples('home');
  