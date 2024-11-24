

---

# 🎬 React Movie Web App  
**Developed by: Clinton Bempah**

---

## 🌟 Overview  

This ReactJS application provides a feature-rich movie database where users can explore trending films, popular personalities in the film industry, and more. By integrating dynamic APIs, the app offers real-time data on popular movies, latest releases, trending individuals, and personalized recommendations.

---

## 🚀 Features  

### 🎥 Movie Features  
1. **Popular Movies**: Displays a curated list of popular movies.  
2. **Latest Movies**: Showcases the most recent movie releases.  
3. **Trending Movies**: Highlights films currently trending globally.  
4. **Upcoming Movies**: Lists movies that are soon to be released or are currently in theaters.  
5. **Movie Details**: Offers in-depth details about a selected movie, including cast, reviews, and personalized recommendations.  
6. **Favorites**: Allows users to save and view their favorite movies.  
7. **Search Movies**: Enables users to search for specific movies by title using a dynamic search bar.  
8. **Filter Movies**: Lets users filter movies by genre to refine their browsing experience.  
9. **Home Page "Add to Favorites"**: On the home page, users can add movies to their favorites with a single click. Favorites are stored locally using browser storage, ensuring they persist even after the app is rebuilt or refreshed
### 🧑‍🎤 People Features  
10. **Popular People**: Features well-known actors, directors, and other personalities in the industry.  
11. **Actor Details**: Provides detailed profiles of actors, directors, and other personalities, including biographies and images.  

---

## 🌐 API Endpoints  

The app fetches real-time data from various API endpoints:

- **Popular Movies API**: Retrieves data about popular movies.  
- **Latest Movies API**: Provides details on the latest movie releases.  
- **Trending Movies API**: Fetches globally trending movies.  
- **Upcoming Movies API**: Retrieves information about upcoming movie releases.  
- **Movie Details API**: Fetches comprehensive details about a selected movie.  
- **Recommendations API**: Suggests movies related to the selected movie.  
- **Search API**: Enables searching for movies by title.  
- **Genres API**: Retrieves a list of available genres for filtering.  
- **Person Details API**: Fetches detailed information about a specific actor or film personality.  
- **Person Images API**: Retrieves images of film personalities.  
- **Popular People API**: Lists trending actors and directors.  

---

## 🚀 App Structure & Routing  

### 🗂️ Application Structure  

- **React Query**: Handles efficient data fetching, caching, and pagination.  
- **Movies Context**: Manages global state related to movie preferences, including favorites.  
- **Routing**: Utilizes React Router for navigation between pages. Key routes are as follows:

### 📍 Routing Overview  

| Route                             | Description |
| --------------------------------- | ----------- |
| `/`                                | Home page, landing page of the app. |
| `/movies/favorites`               | Displays the user's favorite movies. |
| `/reviews/:id`                    | Displays detailed reviews for a specific movie. |
| `/movies/:id`                     | Shows detailed information about a specific movie, including recommendations. |
| `/reviews/form`                   | Provides a form for users to add a movie review. |
| `/movies/UpcomingMovies`          | Displays a list of upcoming movies. |
| `/movies/trending`                | Shows trending movies. |
| `/movies/latest`                  | Lists the latest movie releases. |
| `/movies/popular`                 | Displays popular movies. |
| `/movies/search`                  | Search results for user queries. |
| `/people`                         | Displays a list of popular actors and film personalities. |
| `/actors/:id`                     | Shows detailed information about a specific actor. |

---

## ✨ Search, Sort, and Filter  

- **Search Movies**:  
  Users can dynamically search for movies by typing in a search bar. The app fetches results in real time from the TMDB API's search endpoint.  

- **Filter Movies by Genre**:  
  Users can refine their search by selecting specific genres from a dropdown menu. This feature uses the genre API to ensure the latest options.

---

## 🎯 Recommendations on Movie Details  

The movie details page features a **Recommendations Section**, which suggests related movies based on the current selection. Recommendations are fetched from the TMDB API and help users discover similar content.

---

## 🧪 Automated Testing  

### Requirements  

Before running tests or launching the app, make sure the following tools are installed:  
- **Node.js**: Required to run the development environment.  
- **npm**: For managing dependencies and running scripts.  

---

## 📚 Independent Learning  

While building the app, I incorporated **pagination**, **search** and **filtering** features. These were implemented after researching online resources and tutorials, which guided me through the process.  

---

## 💡 How to Contribute  

Contributions are welcome! Here's how you can contribute to the project:  
1. Fork the repository.  
2. Create a new branch (`feature-branch-name`).  
3. Commit your changes.  
4. Submit a pull request for review.

---

## 🎯 Future Improvements  

- Add user authentication for personalized experiences.  
- Optimize API requests for better performance.  
- Enhance the UI/UX with additional animations and responsive design improvements.  
- Introduce multi-parameter advanced search (e.g., by year, language, or rating).  

---

