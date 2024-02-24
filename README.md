Star Wars Planets Directory
This web application showcases information about planets from the Star Wars universe using the Star Wars API (SWAPI). Each planet is presented in a distinct card with details such as the planet's name, climate, population, and terrain. Additionally, the notable residents of each planet are listed.

Task Requirements
Planets Directory:

The information about planets is fetched from the SWAPI (https://swapi.dev/api/planets/?format=json) and is displayed in distinct cards.
Residents Display:

Each planet's card includes a list of residents fetched using their respective URLs found in the planet's data. Relevant details such as the resident's name, height, mass, and gender are displayed.
Pagination Mechanism:

Pagination functionality is implemented to navigate through the list of planets, leveraging the "next" URL provided in the API's response for fetching additional pages.
Styling and Responsiveness:

CSS is used to style the application, emphasizing a clean, engaging layout with a dark theme. The design is responsive, delivering a consistent and appealing user experience across various devices and screen sizes.
Framework/Library Choice:

Vanilla JavaScript is used for this project, showcasing coding style, architectural decisions, and problem-solving approach.
Project Structure
index.html: The main HTML file that structures the web page.
styles.css: The CSS file responsible for styling the application with a dark theme and responsiveness.
script.js: The JavaScript file containing logic for fetching planets, displaying their information, handling pagination, and styling interactions.
Usage
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/star-wars-planets-directory.git
Open index.html in your preferred web browser.

Explore the Star Wars Planets Directory, navigate through the pages, and learn about each planet and its residents.

Acknowledgments
The Star Wars API (SWAPI) for providing the data used in this project.
