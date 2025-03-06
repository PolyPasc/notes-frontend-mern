# Note Taking App (Frontend)

A note-taking application built using React.js on the Frontend. This app allows users to create, edit, and delete notes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Prerequisites

1. Node and npm are required. Here are the versions that I have used.

   ```bash
   node --version

   v22.1.0
   ```

   ```bash
   npm --version

   10.7.0
   ```

2. Git is required. Here's the version that I have used

   ```bash
   git --version

   git version 2.45.0.windows.1
   ```

## Technologies Used

- **Vite:** Build tool and development server.
- **React:** Frontend library for building user interfaces.
- **React Router:** Routing library for handling navigation.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **ESLint:** Tool for identifying and fixing problems in JavaScript code.
- **Axios:** Used to make HTTP requests in the application.

## Features

- **Responsive Design** : The application is fully responsivenacross various devices.
- **User Authentication:** Users can register and log in to access their notes securely.

- **Note Creation:** Users can create new notes with titles and content.

- **Note Editing:** Users can edit existing notes.

- **Note Deletion:** Users can delete notes they no longer need.

- **Note Listing:** Users can view a list of all their notes.

## Installation and Setup

To set up this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/PolyPasc/Notes-mern.git

    cd Notes-mern/Frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**

    Duplicate the `.env.example` file and rename it to `.env`. Fill in the required environment variable

    ```
    VITE_BASE_URL=
    ```

## Running the Project

- **Start Server:** Use `npm run dev` for development mode with automatic restarts.

  ```bash
  npm run dev
  ```

  The server will start on `http://localhost:5173`.

- **Run Linting:** Use `npm run lint` to check code quality.

  ```bash
  npm run lint
  ```

- **Build Code:** Use `npm run build` to build the code according to vite configuration.

  ```bash
  npm run build
  ```

- **Preview Code:** Use `npm run preview` to preview how the code will look and behave in a production environment.

  ```bash
  npm run preview
  ```

## Project Structure

Here is a brief overview of the project structure:

```
/public
/src
    /components         # Reusable React components
    /pages              # Page components
    /utils              # Utility files
    App.jsx             # Main application component
    index.css           # Global styles
    main.jsx            # Entry point for React
.env.example            # environment variables (exmaple)
.gitignore              # Git ignore files
eslint.config.js        # ESLint configuration
index.html              # Main HTML file
package-lock.json       # Locks dependencies versions
package.json            # Project metadata and dependencies
postcss.config.js       # Post CSS configuration
README.md               # Porject Overview markdown
tailwind.config.js      # Tailwind CSS configuration
vite.config             # Vite configuration
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork this repository.
2. Create a new branch `git checkout -b feature/YourFeature`.
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## Acknowledgments

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Axios](https://axios-http.com/)

## Contact

For any questions or feedback, please reach out to:

- :e-mail: **Email:** github@technologist.anonaddy.com
- :point_right: **LinkedIn:** [in/pratap-adit](https://www.linkedin.com/in/pratap-adit)
- :octocat: **GitHub:** [PolyPasc](https://github.com/PolyPasc)

---

Thank you for checking out my project! If this project helped / interests you, then give it a :star2: Star.
