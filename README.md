# Fancy Burger Joint

## Description

In this project we worked together as a group to create a website for our restaurant "Salt & Sage". We used Node.js and Express.js to create a RESTful API, utilized Handlebars.js as a template engine, created and seeded our database using Sequalize, and used the GET and POST methods to retrieve and add new data. 

We used the MVC paradime to organize our file and folder structure. To ensure the users information is protected we empleminted bcrypt to encode the users password and used an environment variable to protect API keys and sensitive information from attackers.

The application uses express-session to authenticate users via a login so that they can create a reservation.

## Usage

Users can view the homepage which includes pictures of products and the restaurants menu without authentication. Once a user is logged in they can navigate to the reservations tab to book a reservation with the restaurant. They can include the time, date, number of guests, and special requests through our reservation form. If the user tries to access the reservations tab without being logged in they will be redirected to the login page.

## Technologies

- Node.js
- Express.js
- Handlebars.js
- Sequalize
- Bcrypt
- Express-Session
- Pico.css

## Contributors

- Zach Brewer [https://github.com/ZacharyDOTpy]
- Sarah Bryant [https://github.com/sarahbryant411]
- Rachael Stokes [https://github.com/RachaelKStokes]
- Phillip Brown [https://github.com/TruTechDad]

## Screenshot
![Screenshot of Salt & Sage homepage](./screenshots/SALT%20&%20SAGE.png)
![Screenshot of Salt & Sage menu](./screenshots/SALT%20&%20SAGE%20(1).png)

## Deployed Application
[Link to deployed site]