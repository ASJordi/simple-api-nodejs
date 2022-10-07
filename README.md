<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ASJordi/simple-api-nodejs">
    <img src="src/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">REST API with Node.js and Express.</h3>

  <p align="center">
    <br />
    <a href="https://github.com/ASJordi/simple-api-nodejs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/ASJordi/simple-api-nodejs/issues">Report Bug</a>
    ·
    <a href="https://github.com/ASJordi/simple-api-nodejs/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://weather-app-nodejs.netlify.app)

REST API with Node.js and Express. Get a list of nouns, verbs, adverbs and adjectives that start or end with a set of characters. The backend of the application was deployed on Railway.
### Built With

* JavaScript
* NodeJS
* Express

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

List of prerequisites to use the application correctly.
* [NodeJS](https://nodejs.org/en/download)
* To check if NPM is installed, run the following command in your terminal:
  ```sh
  npm -v
  ```

### Installation

_This section describes the application installation and configuration process for the frontend and backend._

1. Clone the repository
   ```sh
   git clone https://github.com/ASJordi/simple-api-nodejs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure the environment variables
   ```JS
   // .env file
   PORT = 3000
    ``` 
4. Run the server
   ```sh
   npm run dev
   ```
5. Open the API in your browser
   ```sh
    http://localhost:3000
    ```
  
<!-- USAGE EXAMPLES -->
## Usage
This API is GET only and no authentication is required to access it.

**Base URL:** http://localhost:3000

### Endpoints

#### Get all nouns

```http
  http://localhost:3000/nouns
```

#### Get all verbs

```http
  http://localhost:3000/verbs
```
#### Get all adjectives

```http
  http://localhost:3000/adjectives
```

#### Get all adverbs

```http
  http://localhost:3000/adverbs
```

#### Get all nouns, verbs, adjectives and verbs that start and end with a set of characters

```http
  http://localhost:3000/nouns?start=e&end=t
```

#### Get all nouns, verbs, adjectives and verbs and set the number of results

```http
  http://localhost:3000/nouns?start=e&end=t&limit=5
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Jordi Ayala - [@ASJordi](https://twitter.com/ASJordi)

Project link: [https://github.com/ASJordi/simple-api-nodejs](https://github.com/ASJordi/simple-api-nodejs)

[contributors-shield]: https://img.shields.io/github/contributors/ASJordi/simple-api-nodejs.svg?style=for-the-badge
[contributors-url]: https://github.com/ASJordi/simple-api-nodejs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ASJordi/simple-api-nodejs.svg?style=for-the-badge
[forks-url]: https://github.com/ASJordi/simple-api-nodejs/network/members
[stars-shield]: https://img.shields.io/github/stars/ASJordi/simple-api-nodejs.svg?style=for-the-badge
[stars-url]: https://github.com/ASJordi/simple-api-nodejs/stargazers
[issues-shield]: https://img.shields.io/github/issues/ASJordi/simple-api-nodejs.svg?style=for-the-badge
[issues-url]: https://github.com/ASJordi/simple-api-nodejs/issues
[license-shield]: https://img.shields.io/github/license/ASJordi/simple-api-nodejs.svg?style=for-the-badge
[license-url]: https://github.com/ASJordi/simple-api-nodejs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ASJordi
[product-screenshot]: src/images/screenshot.png
