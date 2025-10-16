# Fitness App: Exercise Explorer 💪

A modern, responsive React-based web application that allows users to search, discover, and learn about various fitness exercises. It provides detailed exercise information, including target muscle, equipment required, related YouTube instructional videos, and similar exercises.

## ✨ Key Features

* **Comprehensive Exercise Data:** Fetches a vast database of exercises with detailed metadata, including GIFs, target muscles, and equipment.
* **Advanced Search & Filtering:** Users can search for exercises by name, body part, equipment, or target muscle.
* **Body Part Navigation:** A horizontal scrollbar component allows users to easily filter and explore exercises by main body parts.
* **Dedicated Detail Page:** Clicking an exercise navigates to a detailed page showing:
    * Exercise GIF and descriptive text.
    * Related instructional videos from YouTube.
    * A section for similar exercises grouped by **Target Muscle** and **Equipment**.
* **Responsive Design:** Optimized for all screen sizes (mobile, tablet, desktop) using Material UI components and custom media queries.
* **Client-Side Pagination:** Displays results efficiently with smooth pagination for improved user experience.

## 💻 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js, JavaScript (ES6+) |
| **Styling/UI** | Material UI (MUI), Custom CSS |
| **Routing** | React Router DOM |
| **External Data** | RapidAPI: ExerciseDB, YouTube Search and Download |
| **State Management** | React Hooks (`useState`, `useEffect`) |

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/srikurmadasupraneeth/fitness_website.git
cd PROJECT_FITNESS_APP


### 2. Install dependencies

```bash
npm install
# or
yarn install

### 3. Set up Environment Variables
```bash
Create a file named .env in the project root directory and add your RapidAPI key:
REACT_APP_RAPID_API_KEY=YOUR_RAPID_API_KEY_HERE
(Note: Replace YOUR_RAPID_API_KEY_HERE with your actual key, obtained from RapidAPI.)

###4. Run the application
```bash
npm start
# or
yarn start
The application will open in your browser at http://localhost:3000.
