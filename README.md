```html
<!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YEA Farm</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="weather.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <a href="/" class="nav-logo"><img src="/assets/images/Logo.jpg" alt="Logo"></a>
            <!-- <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button> -->
            <ul class="nav-links">
                <li><a href="/index.html" class="active">Home</a></li>
                <li><a href="/assets/html/about.html">About</a></li>
                <li><a href="/Sale/Sale.html">Competition</a></li>
                <li><a href="/contact/contact.html">Contact Us</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Welcome to YEA Farm</h1>
                <p>Family-operated heritage breed pig farm in Elgin, Arizona</p>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <h2>What We Offer</h2>
                <div class="feature-grid" id="feature-container"></div>
            </div>
        </section>
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
              <li data-target="#carousel" data-slide-to="3"></li>
            </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/assets/images/BabyPig.jpg" class="d-block mx-auto" style="width: 25%; height: 300px;" alt="Award">
            </div>
            <div class="carousel-item">
              <img src="/assets/images/CrossLitter.jpg" class="d-block mx-auto" style="width: 25%; height: 300px;"  alt="GrandRiver Award">
            </div>
            <div class="carousel-item">
              <img src="/assets/images/LitterEating.jpg" class="d-block mx-auto" style="width: 40%; height: 315px;"  alt="Turkey Award">
            </div>
            <div class="carousel-item">
              <img src="/assets/images/LitterPics.jpg" class="d-block mx-auto" style="width: 40%; height: 315px;"  alt="In The Ring">
            </div>
            <div class="carousel-item">
                <img src="/assets/images/LitterWithNiece.jpg" class="d-block mx-auto" style="width: 40%; height: 315px;"  alt="In The Ring">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/NewBornLitter.jpg" class="d-block mx-auto" style="width: 40%; height: 315px;"  alt="In The Ring">
              </div>
          </div>
          <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <!-- <section id="weather-section">
            <div class="container">
                <h2>Local Weather</h2>
                
                <div id="weather-container"></div>
 
  <script src="/sale/weather.js"></script>
            </div>
        </section> -->
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 YEA Farm. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="/assets/js/index.js"></script>
    <script src="/sale/weather.js"></script>
</body>
</html>
```

# YEA Farm Website

A responsive website for YEA Farm, a family-operated heritage breed pig farm located in Elgin, Arizona.

## Features

- Responsive navigation menu
- Bootstrap carousel for image showcase
- Mobile-friendly design
- Multiple page sections including Home, About, Competition, and Contact

## Technologies Used

- HTML5
- CSS3
- Bootstrap 4.5.2
- Font Awesome 5.15.4
- jQuery 3.5.1

## Project Structure

```
/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── index.js
│   ├── html/
│   │   └── about.html
│   └── images/
├── Sale/
│   └── Sale.html
├── contact/
│   └── contact.html
└── index.html
```

## Setup Instructions

1. Clone the repository to your local machine
2. Ensure all image files are placed in the assets/images directory
3. Open index.html in a web browser to view the website

## Dependencies

All external dependencies are loaded via CDN:

- Bootstrap CSS and JS
- Font Awesome CSS
- jQuery
- Popper.js

## Maintenance

To maintain the website:

- Update images in the assets/images directory
- Modify content in respective HTML files
- Update styles in assets/css/styles.css
- Modify JavaScript functionality in assets/js/index.js