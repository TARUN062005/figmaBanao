# SaaS Landing & Dashboard Portal

A pixel-perfect implementation of a modern SaaS landing page, expanded with a fully functional client-side dashboard, authentication flow, and user management system. This project demonstrates the translation of Figma designs into responsive code and the integration of complex application logic using React.

## 🚀 Live Demo

[**View Live Application**](https://figma-eta-eight.vercel.app/)

## 📋 Assignment Context

This submission fulfills the requirements for a full-stack frontend engineering assignment. It consists of three core modules:

1.  **Pixel-Perfect Landing Page**: A high-fidelity implementation of the provided Figma design, ensuring exact spacing, typography, and responsive behavior.
2.  **Authentication System**: A simulated security layer handling login, signup, and protected route management without a backend.
3.  **Functional Dashboard**: A dynamic administrative interface integrated with public APIs to demonstrate data handling, pagination, and application state management.

## 🛠️ Tech Stack

-   **Core**: React 18, Vite
-   **Routing**: React Router DOM v6
-   **Styling**: Pure CSS (Variables, Flexbox/Grid, Responsive Media Queries)
-   **State Management**: React Context API (`AuthContext`, `ThemeContext`)
-   **Data Fetching**: Native Fetch API
-   **External APIs**: JSONPlaceholder (for user data simulation)
-   **Persistence**: `localStorage` (Auth tokens, Theme preferences)

## ✅ Features Checklist

### Part A — Landing Page
-   [x] **Pixel Accuracy**: Matches Figma design specs (colors, gradients, border-radius).
-   [x] **Responsive Layout**: fully fluid design adapting from Desktop (1440px) to Mobile (375px).
-   [x] **Interactive Elements**: Hover effects on buttons, cards, and navigation items.
-   [x] **Implemented Sections**: Hero, Logo Cloud, Feature Highlights, Info Section, Contact Form, Footer.

### Part B — Authentication
-   [x] **Access Control**: fully functional Login and Signup pages.
-   [x] **Route Protection**: `ProtectedRoute` wrapper preventing unauthorized access to `/dashboard`.
-   [x] **Session Management**: Simulates persistent sessions using `localStorage`.
-   [x] **ux Flows**: Automatic redirection to dashboard upon login; redirection to login upon logout.

### Part C — Dashboard
#### Dashboard Summary
-   [x] **Metric Cards**: Visual display of key platform statistics (Users, Revenue, Active Sessions).
-   [x] **Responsive Grid**: layout adapts gracefully to screen width changes.

#### Users Page
-   [x] **Data Integration**: Fetches real user data from `jsonplaceholder.typicode.com`.
-   [x] **Search**: Real-time filtering of users by name or email.
-   [x] **Sorting**: Toggleable A-Z / Z-A sorting for user lists.
-   [x] **Pagination**: Custom client-side pagination implementation.
-   [x] **User Details**: Modal view showing extended profile information (Address, Company, Phone).
-   [x] **Feedback**: Loading skeletons and error handling states.

#### Settings Page
-   [x] **Theme Options**: Global Dark/Light mode toggle utilizing CSS variables.
-   [x] **Profile Management**: Simulated form for updating user details.
-   [x] **Persistence**: Theme selection is remembered across page reloads.

## ♿ Accessibility & UX

-   **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`, and `<nav>` tags.
-   **Keyboard Navigation**: Focus states managed for form inputs and interactive elements.
-   **Feedback**: Toast notifications/alerts for form submissions and authentication errors.
-   **Empty States**: Clear messaging when search results yield no data.

## 📂 Project Structure

```text
src/
├── components/
│   ├── auth/
│   │   ├── LoginPage.jsx       # Login form & validation
│   │   ├── SignupPage.jsx      # Registration logic
│   │   └── Auth.css            # Auth-specific styles
│   ├── Contact/
│   │   ├── Contact.jsx         # Contact form section
│   │   └── Contact.css
│   ├── dashboard/
│   │   ├── DashboardLayout.jsx # Sidebar + Main Content wrapper
│   │   ├── DashboardSummary.jsx# Overview stats
│   │   ├── UsersPage.jsx       # User management table
│   │   ├── SettingsPage.jsx    # Theme & Profile settings
│   │   └── DashboardLayout.css
│   ├── Feauters/               # Feature highlights section
│   ├── Footer/                 # Site footer
│   ├── header/                 # Main navigation
│   ├── Hero/                   # Landing page hero section
│   ├── InfoSection/            # Information breakdown
│   ├── LogoCloud/              # Partner logos
│   ├── shared/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Input.jsx           # Reusable form input
│   │   ├── ProtectedRoute.jsx  # Security wrapper
│   │   └── Shared.css          # Global utility classes
│   └── LandingPage.jsx         # Landing page composition
├── context/
│   ├── AuthContext.jsx         # User session provider
│   └── ThemeContext.jsx        # Dark mode provider
├── App.jsx                     # Router configuration
├── main.jsx                    # Entry point
└── index.css                   # Global resets & variables
```

## ⚙️ Setup & Installation

**Prerequisites:** Node.js (v16.0.0 or higher)

1.  **Clone and Install**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    *Access locally at `http://localhost:5173`*

3.  **Build for Production**
    ```bash
    npm run build
    ```

4.  **Preview Build**
    ```bash
    npm run preview
    ```

## 🔌 API Integration

The **Users Page** integrates with the **JSONPlaceholder** public API.

-   **Endpoint**: `https://jsonplaceholder.typicode.com/users`
-   **Method**: `GET`
-   **Usage**: Fetches a list of 10 users to simulate a user database. Data is then paginated and filtered client-side.

## 🚦 Routing Overview

The application uses `react-router-dom` with the following route structure:

| Path | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | Landing Page (Home) |
| `/login` | Public | Authentication Entry |
| `/signup` | Public | User Registration |
| `/dashboard` | **Protected** | Dashboard Overview |
| `/dashboard/users` | **Protected** | User Management Table |
| `/dashboard/settings` | **Protected** | App Configuration & Theme |

## 🧠 State Management & context

-   **AuthContext**: Manages the `isAuthenticated` boolean and `user` object. It exposes `login()` and `logout()` methods which manipulate `localStorage` tokens.
-   **ThemeContext**: Manages the `theme` string ('light' | 'dark'). It applies a class to the `<body>` tag to trigger CSS variable changes globally.

## 🔐 Authentication Logic

Since there is no backend, authentication is **simulated**:
1.  **Login**: Accepts any non-empty credentials.
2.  **Token**: On success, a dummy token is stored in `localStorage`.
3.  **Protection**: `ProtectedRoute` checks for this token. If missing, it redirects to `/login`.
4.  **Persistence**: The app checks for the token on mount to keep the user logged in.

## 📐 Design Decisions

-   **Simulated Backend**: To fulfill requirements without server complexity, localStorage acts as the database for session persistence.
-   **Client-Side Pagination**: Given the small dataset from JSONPlaceholder (10 records), client-side pagination provides the snappiest UX and demonstrates array manipulation skills.
-   **Component-Based Architecture**: Separation of concerns is maintained by keeping logic within specific page components (e.g., `UsersPage`) while sharing UI primitives (e.g., `Button`) globally.
-   **Pure CSS**: Chosen over libraries like Tailwind to demonstrate core understanding of CSS layout models (Flexbox/Grid) and theming variables.

## ⚠️ Tradeoffs & Limitations

-   **Data Persistence**: Any changes to user data (simulated edits) or settings are local or resetting on refresh because the API is read-only.
-   **Security**: The authentication is purely frontend-based and not secure for real-world production data.
-   **Scalability**: Client-side filtering works well for 10 users but would need server-side implementation for thousands of records.

## 🚀 Deployment

The project is deployed on **Vercel** for optimal performance and continuous integration. The `dist` folder generated by Vite serves as the production artifact.

## 🔮 Future Improvements

1.  Integration with a real backend (Node.js/Firebase).
2.  Implementation of infinite scroll for the users list.
3.  Unit testing using Vitest and React Testing Library.
4.  Formik or React Hook Form integration for complex form handling.

## 👤 Author

[Your Name]
