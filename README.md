## Full Stack Web App with Actix Web, React, and PostgreSQL
This project is a full-stack application that provides a user signup and login feature using Actix Web as the backend, connected to a PostgreSQL database, and a React frontend.

## Getting Started

To get started with this project, you will need to have the following components installed and configured:

- PostgreSQL - A powerful open-source object-relational database system
- Actix Web - A powerful, pragmatic, and extremely fast web framework for Rust
- React - A JavaScript library for building user interfaces

Clone this repository to your local machine:

```
git clone https://github.com/reddangerousFullStack-Web-App-Actix-web-React-PostgreSql-.git
```

Navigate to the project directory:

```
cd <repository-name>
```

Install the project dependencies:

```
cd frontend
npm install
cd ..
cargo install --path .
```

Add The following depedencies to your cargo.toml file
```	
[dependencies]
actix-cors = "0.6.4"
actix-files = "0.6.2"
actix-web = "4.3.0"
actix-web-actors = "4.2.0"
dotenv = "0.15.0"
serde = { version = "1.0.152", features = ["derive"] }
serde_json = "1.0.93"
sqlx = { version = "0.6.2", features = ["runtime-async-std-native-tls", "postgres"] }

```

Create a `.env` file in the project root directory and add the following variables:

```
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database_name>
```

Replace `<username>`, `<password>`, `<host>`, `<port>` and  `<database_name>` with appropriate values for your PostgreSQL database.

Create the database tables by running the following command:

```
create table users (
    id serial primary key,
    username varchar(255) not null unique,
    email varchar(255) not null unique,
    password varchar(255) not null
);
```

Start the project by running the following command:

```
cargo r -r
```

Navigate to http://localhost:3000 to see the React frontend.

## Features

This project provides a basic set of features for user signup and login:

- User signup with username, email, and password
- User login with email and password
- Actix Web middleware for CORS and static file serving

## Contributing

If you would like to contribute to this project, please feel free to open a pull request.

## Support

If you have any questions or need help with this project, please open an issue on the GitHub repository.