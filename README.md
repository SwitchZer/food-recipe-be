# Food Recipe Backend

The backend of the Food Recipe platform is responsible for powering the core functionality of the application, including managing recipes, user profiles, and facilitating communication with the frontend.

## Documentation

⚡[Peworld Backend](https://documenter.getpostman.com/view/7675329/2sA3QqerrC)

## Tech Stack

**Programming language:** JavaScript (Node JS)

**Framework:** Express JS

**Database:** PostgreSQL

**API Testing:** Postman

**Authentication:** JWT (JSON Web Tokens)

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,postgres,postman,vercel)](https://skillicons.dev)

## Features

- CRUD Recipe
- Edit Profile User
- Search, Pagination dan Sort Recipe
- Detail Recipe, like and save recipe

## Project Structure

```
└── 📁backend
    └── .env
    └── .gitignore
    └── eslint.config.mjs
    └── index.js
    └── package-lock.json
    └── package.json
    └── README.md
    └── 📁prisma
        └── schema.prisma
    └── 📁src
        └── 📁controllers
            └── auth.js
            └── payment.js
            └── recipes.js
            └── upload.js
            └── users.js
        └── 📁herlpers
            └── auth.js
            └── common.js
        └── 📁middlewares
            └── auth.js
            └── upload.js
        └── 📁models
            └── auth.js
            └── experience.js
            └── hire.js
            └── portofolio.js
            └── recruiters.js
            └── skill.js
            └── workers.js
        └── 📁routes
            └── auth.js
            └── index.js
            └── payment.js
            └── recipes.js
            └── upload.js
            └── users.js
        └── 📁utils
            └── cloudinary.js
    └── vercel.json
```

## Installation

#### Clone this repository :

```bash
  git clone https://github.com/SwitchZer/food-recipe-be.git
```

#### Install Module on Project Directory :

```bash
  npm install
```

#### Start the project :

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME`

`DB_HOST`

`DB_NAME`

`DB_PASSWORD`

`DB_PORT`

`PORT`

`CLOUD_NAME`

`CLOUD_API_KEY`

`CLOUD_API_SECRET`

`SECRET_KEY_JWT`

## Contact

Feel Free to Contact me using [alfredcnzagoto@gmail.com](alfredcnzagoto@gmail.com).

## Contributing

Contributions are always welcome!

## Related Project

Project Related to this Project.

[Food Recipe](https://github.com/SwitchZer/food-recipe)
