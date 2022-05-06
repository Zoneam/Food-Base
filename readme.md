## <p align="center" style="font-weight:700;"> [Food Base ](https://food--base.herokuapp.com) </p>
---

## Description

This full CRUD application is designed to search (fetch) EDAMAM food API where you can choose your favorite recipes and save them in database, after saving recipe user can edit title for recipe or delete from database. Also user will be able to see other users saved recipes and like them.

---
## Technologies

This application uses [JavaScript](https://developer.mozilla.org/), [Ejs](https://ejs.co/), [Bootstrap](https://getbootstrap.com/), [Mongoose](https://mongoosejs.com/), [Expressjs](https://expressjs.com/), [Passport.js](https://www.passportjs.org/) and [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2).

## Table of Contents:

  - [Description](#description)
  - [Technologies](#technologies)
  - [Table of Contents](#table-of-contents)
  - [To run locally](#to-run-locally)
  - [Usage](#usage)
  - [License](#license)
  - [Contact me](#contact-me)
---

## To run locally:

- Install Mongodb
- Open in VS Code and run npm i to install dependencies
- install nodemon ( npm i nodemon -g )
- Create and configure .env file. You will need 
  - GOOGLE_CLIENT_ID (From [google.com API](https://console.cloud.google.com/apis))
  - GOOGLE_SECRET (From [google.com API](https://console.cloud.google.com/apis))
  - GOOGLE_CALLBACK (set to http://localhost:3000/oauth2callback)
  - SECRET ( Any secret )
  - API_ID (From [Edamam.com](https://www.edamam.com/))
  - API_KEY (From [Edamam.com](https://www.edamam.com/))
- run nodemon and go to ( [localhost:3000](http://localhost:3000) )
---

## User stories:

- As an user I want to search food recipes.
- As an user I want to be able to save recipes in my account.
- As an user I want to retrive recipes from database and see likes.
- As an user I want to see other users saved recipes.
- As an user I want to like other users recipes.
- As an user I want to delete my saved recipes.
- As an user I want to edit the title of my saved recipes.
- As an user I want to click on recipe and redirect to recipe page.
- As an user I want to see how many calories each recipe has.
- As an user I want to display google user name on top of page when signed in.
- As an user I want to see google profile pictures on all saved recipes.
---

<p align="center">
  <img width="300" src="./public/images/screen.png">
  <img width="285" src="./public/images/screen2.png">
</p>

## License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact me:

Feel free to contact me to contribute to this project. My contact information is listed below.

  [<img src="./public/images/email.png" width="40" >](mailto:zoneam@gmail.com)  [<img src="./public/images/github.png" width="40" >](https://github.com/zoneam)  [<img src="./public/images/linkedin.png" width="40" >](https://www.linkedin.com/in/haykmn)