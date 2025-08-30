RJ-Couriers Monolithic
Overview
This repository contains a simple, monolithic web application for managing a courier service. The application is built using HTML, CSS, and JavaScript, with all core logic contained within a single system. It serves as a practical example for demonstrating fundamental web development concepts, including front-end navigation, form handling, and user-role-based content display.

Features
User Authentication: A simple login system with hardcoded credentials for "admin" and "user" roles.

Role-Based Navigation: The navigation bar dynamically updates to show different menu options based on the user's login status and role.

Shipment Booking: A form to book a new shipment and receive a mock tracking ID.

Package Tracking: A tracking section to check the status of a package using a mock tracking ID.

Pricing Calculator: A tool to estimate shipping costs based on package weight and distance.

Customer Support: A form for users to submit support queries.

Admin Panel: A dedicated section accessible only to the admin user.

Technology Stack
HTML: For the structure and content of the web pages.

CSS: For styling and visual presentation.

JavaScript: For dynamic behavior, form handling, and updating the UI.

How to Run
Clone the repository:

git clone [https://github.com/your-username/rj-courier-monolithic.git](https://github.com/your-username/rj-courier-monolithic.git)

Navigate to the project directory:

cd rj-courier-monolithic

Open index.html: Simply open the index.html file in your preferred web browser. No web server is required as the application is a self-contained front-end system.

Usage
Login Credentials (for demonstration purposes)
Role

Username

Password

User

user

1234

Admin

admin

1234

Upon opening the application, you will be on the login page.

Enter the credentials for either user or admin to see the role-specific navigation.

The navigation bar will change accordingly, and you will be redirected to the relevant section (Home for user, Admin Panel for admin).

File Structure
index.html: The main HTML file containing the page structure and all sections.

style.css: The CSS file for styling the application.

script.js: The JavaScript file containing all the logic for navigation, form handling, and UI updates.

Contributing
This is a simple project for educational purposes and is not actively seeking contributions. However, feel free to fork the repository and experiment with the code!
