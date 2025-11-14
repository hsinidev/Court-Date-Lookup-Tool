# Court Date Lookup Tool - High-Fidelity Placeholder UI

This project is a modern, high-fidelity placeholder UI for a Court Date Lookup Tool. Built with React, TypeScript, and Tailwind CSS, it demonstrates a clean, authoritative, and user-friendly interface that simulates the process of searching for court records. The application features an animated galaxy background, a structured search form, and an instructional results panel designed to guide users to official state and county court websites.

This is a **demonstration project** and does not connect to any live databases or handle real user data. All information displayed is fictional.

---

## ✨ Features

- **Modern & Responsive Design**: A clean, formal interface that is fully responsive and accessible on all devices.
- **Animated Background**: A unique and visually engaging multi-colored galaxy/starfield background.
- **Structured Search Form**: Intuitive input fields for party name, state, county, and case type.
- **Simulated Search Process**: A loading state that mimics a real database query.
- **Instructional Results Panel**: Displays placeholder results and provides clear guidance and a dynamic link for users to find official court records.
- **Integrated Modals**: Six fully-functional modals for essential pages like "About Us," "Privacy Policy," "Terms of Service," etc.
- **Comprehensive SEO Content**: Includes a 3,500+ word, high-quality article on "Public Access to Court Records" to demonstrate content integration for SEO purposes.
- **Rich Schema Markup**: Full JSON-LD schema (WebSite, WebApplication, Article, FAQPage) embedded for enhanced search engine visibility.
- **Professional Project Structure**: Organized into logical components following best practices for a scalable React/TypeScript application.

---

## 💻 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Module Bundler**: Vite (as simulated by the development environment)

---

## 📂 Project Structure

The project is organized into a clean, component-based architecture.

```
/
├── public/
│   └── favicon.svg      # Application favicon
├── src/
│   ├── components/
│   │   ├── CourtLookupUI.tsx  # Core search form and results UI
│   │   ├── Layout.tsx         # Main layout with header, footer, and background
│   │   ├── Modal.tsx          # Reusable modal component
│   │   └── SeoArticle.tsx     # The 3500-word SEO article component
│   ├── App.tsx              # Main application component
│   ├── constants.tsx        # Application-wide constants (states, case types, etc.)
│   └── index.tsx            # Entry point of the application
├── index.html             # Main HTML file
├── README.md                # This file
└── metadata.json          # Application metadata
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.
- [Node.js](https://nodejs.org/) (which includes npm)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/court-date-lookup-tool.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd court-date-lookup-tool
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

---

## 📖 Usage

1.  Open the application in your browser.
2.  Fill in the "First Name," "Last Name," and "County / Jurisdiction" fields in the search form.
3.  You can optionally change the "State" and "Case Type" from the dropdowns.
4.  Click the **"Search Court Records"** button.
5.  Observe the loading animation, which simulates a search query.
6.  The view will update to the "Simulated Search Results" panel.
7.  This panel contains placeholder data and an important notice explaining that the data is not real.
8.  Click the **"Access Official [State Name] Court Portal"** button to be redirected to a Google search for that state's official court records website.
9.  Click **"Start New Search"** to return to the form and clear the previous entries.

---

## ✍️ Author

**HSINI MOHAMED**

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Portfolio**: [doodax.com](http://doodax.com)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
