# Recipe App with Favorites and Filters

## Overview
The **Recipe App** is a web application built using **ReactJS** and **Redux** that allows users to explore and manage a variety of recipes. The app enables users to search for recipes, save their favorites, and apply filters to discover recipes that suit their dietary preferences or meal categories.

## Features
1. **Recipe Collection:**
   - A user interface that displays a collection of recipes with titles, images, and brief descriptions.

2. **Search Functionality:**
   - Users can search for recipes based on keywords, ingredients, or specific criteria such as dietary restrictions (e.g., vegetarian, gluten-free).

3. **Recipe Details:**
   - Detailed recipe information, including:
     - Ingredients
     - Instructions
     - Preparation time
     - Serving size

4. **Favorites Management:**
   - A feature for users to mark recipes as favorites and save them to a personalized favorites list.

5. **Filtering Options:**
   - Users can filter recipes based on:
     - Meal categories (e.g., breakfast, lunch, dinner)
     - Dietary preferences

6. **State Management with Redux:**
   - The application uses Redux for managing global state with appropriate actions, reducers, and a centralized store.

## Technical Stack
- **Frontend:** ReactJS
- **State Management:** Redux
- **Styling:** Tailwind CSS
- **API:** [Edamam Recipe API](https://developer.edamam.com/)

## Project Setup
### Prerequisites
- Node.js installed on your machine
- API key for the [Edamam Recipe API](https://developer.edamam.com/)
- 

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Muka36/ReceipeApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the API key:
   Keys are added 
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:5173`.

## Highlights
- **Reusable Components:**
  - The project follows a modular approach, making components reusable and easy to maintain.

- **Responsive Design:**
  - Ensures a seamless user experience across various devices and screen sizes.

- **Dark Mode Support:**
  - Includes a theme toggler for switching between light and dark modes.

- **Custom Hooks:**
  - Utilized for managing common functionality like API calls and state transitions.

## API Integration
- Recipes are fetched dynamically from the [Edamam Recipe API](https://developer.edamam.com/).
- The app uses Redux to manage the fetched data and cache state.


## Future Enhancements
1. Add user authentication to personalize the experience further.
2. Implement advanced filters for ingredient exclusions.
3. Include recipe rating and review functionality.
4. Add pagination or infinite scrolling for large recipe datasets.

## Acknowledgments
- Edamam Recipe API for providing the recipe data.
- Tailwind CSS for quick and efficient styling.

---
Feel free to reach out for any additional queries or suggestions!


