# movie-list-app

Movie List App is a React application that allows users to discover popular movies from different genres and years. This application fetches data from The Movie Database (TMDb) API and displays a list of movies based on the selected genre and year. Users can scroll to navigate through different years and view popular movies from those years.

Features
Discover popular movies from various genres and years.
Infinite scrolling to load movies from previous and next years.
Genre filtering to display movies from selected genres.
Loading indicators to show data fetching status.
Error handling and notifications using react-hot-toast.


Requirements - COVERED

1. Layout and UI
2. Custom UI components created with React.
3. Movies are displayed in descending order of popularity.
4. Each movie card shows the movie title, image, genre, cast, director, and a short description.
5. Default Page Load State
6. Loads a total of 20 movies for each year.
7. On initial load, displays movies from the year 2012.
8. Smooth scrolling behavior to load more movies as the user scrolls up or down.

API

10. Uses the provided TMDb API key.
11. Fetches movies for a specific year with at least 100 votes, sorted by popularity.
12. Allows users to filter movies by genre.
13. Fetches genres from the TMDb API and shows them as filters.
14. Displays a fresh list of movies for the selected genres.
15. Custom reusable components created without using pre-built libraries.

Not Covered

1. User authentication and personalization features.
2. Detailed movie information (e.g., synopsis, cast).
3. Search bar for searching movies based on a search string.


Prerequisites

Node.js (v12 or later)
npm or yarn
Getting Started

Follow these instructions to set up and run the project locally.

Installation
Clone the repository:

bash
code :  git clone https://github.com/hit9117/movie-list-app.git
cd movie-list-app

Install dependencies:

Using npm:

bash
code : npm install Or using yarn : yarn install

Create a .env file in the root directory and add your TMDb API key:

env
code : REACT_APP_TMDB_API_KEY = your_api_key_here

Running the Application
Start the development server:

Using npm:

bash
Code : npm start Or  yarn start

Open your browser and navigate to:

code :  http://localhost:3000

Project Structure

src/App.js: Main application component. Handles fetching movies, managing state, and rendering child components.
src/components/Header.js: Component for displaying genre filters and managing selected genres.
src/components/MovieList.js: Component for displaying the list of movies.
src/reportWebVitals.js: Performance measurement for the app.
src/setupTests.js: Configuration for testing with Jest and React Testing Library.

Available Scripts
In the project directory, you can run:

npm start or yarn start: Runs the app in development mode.
npm test or yarn test: Launches the test runner in interactive watch mode.
npm run build or yarn build: Builds the app for production.
npm run eject or yarn eject: Ejects the Create React App configuration. Use with caution.
Testing
The project uses Jest and React Testing Library for testing.




Acknowledgements
The Movie Database (TMDb) for providing the movie data API.
React - A JavaScript library for building user interfaces.
Axios - Promise-based HTTP client for the browser
React Hot Toast - Toast notifications for React.
Lodash - A modern JavaScript utility library.

Contact
Author: Hitesh Badabhagni
Email: hitesh.badabhagni@gmail.com
GitHub: hit9117
