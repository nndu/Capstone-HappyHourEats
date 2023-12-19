
Project Title: HappyHourEats

Overview:
HappyHourEats is a platform designed to enhance the dining experience by providing users with real-time information about restaurants offering happy hour deals, promotions, and special treats on their birthdays or anniversaries. The platform aims to simplify the process of discovering and enjoying discounted and complimentary offerings at local eateries.

Problem:
Finding restaurants with happy hour menus or special promotions can be time-consuming, and users often miss out on exclusive deals. Additionally, remembering and celebrating special occasions at restaurants can be challenging without a convenient reminder system.

User Profile:
Food enthusiasts:

Seeking restaurants with happy hour menus in their current location
Looking for recommendations on restaurants with ongoing food or drink promotions
Interested in discovering places offering free drinks, food, or desserts on special occasions
Want to receive personalized notifications based on their birthday or anniversaries
Features:

Happy Hour Search (Tab 1):

Users can find restaurants with happy hour menus near their current location.
Showcases real-time happy hour menus based on the user's location.
Option to filter results by cuisine, distance, and time of day.

Promo Recommendations (Tab 2):

Recommends restaurants with ongoing promotions on food or drinks.
Provides details about the specific promotions available.
Allows users to explore and filter recommendations based on their preferences.

Celebratory Specials (Tab 3):

Displays restaurants offering free drinks, food, or desserts on the user's birthday or anniversary.
Users can input their personal details, such as date of birth and special anniversaries.
Sends personalized notifications as the special occasions approach.
User Account Management:

Users can create accounts to manage their preferences and personal information.
Allows users to update their special dates for personalized notifications.
Provides a dashboard to view and edit user information.
Implementation:

Tech Stack:

React
TypeScript
MySQL
Express
Client libraries: react, react-router, axios
Server libraries: knex, express, bcrypt for password hashing

Mockup:


<img width="731" alt="Screenshot 2023-12-19 at 10 10 26 AM" src="https://github.com/nndu/Capstone-HappyHourEats/assets/99529648/ca63622d-f71a-41ba-a3c5-a2ab387a8153">
<img width="830" alt="Screenshot 2023-12-19 at 10 16 13 AM" src="https://github.com/nndu/Capstone-HappyHourEats/assets/99529648/e90ffb85-7024-43dd-a066-76d98356d240">
<img width="785" alt="Screenshot 2023-12-19 at 10 17 47 AM" src="https://github.com/nndu/Capstone-HappyHourEats/assets/99529648/a7aa03b6-fdb6-428e-a973-1f2d211eb279">
<img width="791" alt="Screenshot 2023-12-19 at 10 20 37 AM" src="https://github.com/nndu/Capstone-HappyHourEats/assets/99529648/fb70533e-39e1-4200-9fc1-13e5d584ce9f">
<img width="702" alt="Screenshot 2023-12-19 at 10 26 19 AM" src="https://github.com/nndu/Capstone-HappyHourEats/assets/99529648/8f08d931-8fd6-4d9b-8c19-bc3dd60c0161">

Data:


<img width="777" alt="Screenshot 2023-12-19 at 9 55 11 AM" src="https://github.com/nndu/Capstone-HappyHourEats/assets/99529648/620c259b-1ee3-4613-8bd6-338079fc0efc">


Notifications: Implement a notification system (email, push notifications) for special occasions.

Endpoints:

GET /happyhour: Retrieve restaurants with happy hour menus based on location.

GET /promotions: Get recommendations for restaurants with ongoing promotions.

GET /celebratory-specials: Display restaurants with free offerings on birthdays or anniversaries.

POST /users/register: Allow users to create accounts and manage personal information.

POST /notifications: Set up notifications for special occasions.

Roadmap:

Project Setup:

Create the React client project with necessary dependencies, including react-router.
Initialize the Express server with routing and placeholder 200 responses.
Set up the MySQL database schema with tables for users, restaurants, and notifications.

Data Seeding:

Gather sample restaurant data, including happy hour menus, promotions, and celebratory specials.
Create seed files to populate the database with sample restaurant information.
Deploy the client and server projects to ensure continuous updates reflect in the production environment.

Feature: Happy Hour Search (Tab 1):

Implement the list of restaurants with happy hour menus on the home page.
Create a form for users to input their location.
Store the given location in sessionStorage for future use.
Develop the backend endpoint (GET /happyhour) to retrieve relevant restaurant data based on the user's location.

Feature: Promo Recommendations (Tab 2):

Design and implement the recommendations page for ongoing promotions.
Include filters for cuisine, distance, and user preferences.
Create the backend endpoint (GET /promotions) to fetch and display recommended restaurants.

Feature: Celebratory Specials (Tab 3):

Develop the celebratory specials page, allowing users to input their personal details.
Implement a notification system for personalized alerts based on birthdays or anniversaries.
Create the backend endpoint (GET /celebratory-specials) to display relevant restaurants.

User Account Management:

Create the user registration page and form.
Develop the backend endpoint (POST /users/register) for user registration.
Implement user login functionality, including the login page and form.
Create the backend endpoint (POST /users/login) for user authentication.

User Dashboard:

Design and implement a user dashboard for managing preferences and personal information.
Allow users to update their special dates for personalized notifications.
Implement the backend endpoint (PUT /users/:id) for updating user information.

Notifications and JWT Integration:

Update the server to use JWT for authentication.
Store JWT in localStorage and include it in axios calls for authenticated requests.
Implement notifications for special occasions, integrating with email or push notification services.
Bug Fixes and Testing:

Conduct thorough unit and integration testing for both client and server components.
Address any bugs or issues identified during testing.
Optimize the user interface for a seamless experience.

Nice-to-haves and Finalization:

Integrate map services for visual representation of restaurant locations.
Include detailed information about each restaurant, including reviews and ratings.
Implement gamification elements, such as badges for highly-rated users and restaurants.
Allow users to add new restaurants to the platform.
Prepare for a demo day to showcase the complete functionality of the HappyHourEats platform.
