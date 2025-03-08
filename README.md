# Note-Taking App with EJS, Node.js, Express, and MongoDB

This is a simple Note-Taking application built with Node.js, Express, MongoDB, and EJS for rendering dynamic views. The app allows users to create, view, and delete notes. It features a simple and clean design, with the ability to mark notes as "Important". 

## Features

- Create, edit, and delete notes.
- Mark notes as "Important" to highlight them.
- Responsive and clean user interface.
- Easy to use with minimal setup.
- Built with Node.js, Express, MongoDB, and EJS.

## Setup Instructions

Follow the steps below to run the app on your local machine:

### Prerequisites
1. Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) on your system.

2. Clone this repository to your local machine:
git clone https://github.com/yourusername/note-taking-app.git

markdown
Copy
Edit

### Install Dependencies
1. Navigate to the project folder:
cd note-taking-app

markdown
Copy
Edit

2. Install the required dependencies:
npm install

csharp
Copy
Edit

### Configure MongoDB
Make sure MongoDB is installed and running on your system. You can start MongoDB by running:
mongod

shell
Copy
Edit

### Start the Application
To start the application, run:
npm start

nginx
Copy
Edit
This will start the server on [http://localhost:3000](http://localhost:3000).

## File Structure

note-taking-app/ ├── public/ │ └── styles.css # CSS file for styling the app ├── views/ │ ├── create.ejs # Create note form │ └── index.ejs # Display all notes ├── models/ │ └── Note.js # Mongoose model for notes ├── server.js # Main server file with routes and logic ├── package.json # NPM dependencies and scripts └── README.txt # Project description and setup instructions

markdown
Copy
Edit

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database used for storing notes.
- **EJS**: Template engine for rendering dynamic HTML pages.

## Contributing

Feel free to fork the repository and contribute to the project. Open an issue for bug reports or feature requests.

To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to your branch (git push origin feature-name).
5. Create a pull request.

## License

This project is open-source and available under the MIT License.

---

Enjoy using the Note-Taking App!
