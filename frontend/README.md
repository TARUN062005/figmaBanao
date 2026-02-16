# Figma Pixel Implementation

This project is a pixel-perfect implementation of a SaaS landing page based on a Figma design. It has been extended with a full authentication flow and a functional dashboard.

## 🚀 Features

### Part A: Landing Page (Pixel Perfect)
- **Framework Agnostic Styles**: Pure CSS implementing the exact Figma specifications.
- **Responsive Design**: Mobile-optimized layouts for all sections.
- **Interactive Elements**: Hover states and smooth transitions.

### Part B: Authentication
- **Login & Signup Pages**: Designed to match the landing page aesthetic.
- **Authentication State**: Managed via Context API and persisted in `localStorage`.
- **Protected Routes**: Secure wrapper for dashboard access.

**Note:** Since the provided Figma design contains no authentication controls, all primary CTAs (e.g., “Download Template”, Contact Form) redirect users to the login page to simulate a real SaaS funnel.

### Part C: Dashboard
- **Overview**: Stats summary with simulated data.
- **User Management**:
  - Fetches real data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
  - Client-side pagination, sorting (A-Z/Z-A), and search.
  - Detailed user view in a modal.
- **Settings**:
  - Profile management (simulated).
  - **Dark/Light Mode**: Toggles theme globally and persists preference.

## 🛠️ Tech Stack
- **React**: Component-based UI.
- **Vite**: Fast build tool and dev server.
- **CSS**: Custom styles (No Tailwind/Bootstrap used).
- **React Router**: Client-side routing.
- **Context API**: State management for Auth and Theme.

## 📦 Installation

1.  **Install dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🧭 Project Structure

```text
src/
├── components/
│   ├── auth/              # Login & Signup components
│   ├── dashboard/         # Dashboard layout & pages
│   ├── shared/            # Reusable UI primitives (Button, Input)
│   ├── LandingPage.jsx    # Landing page wrapper
│   └── [Existing]         # Original Figma components (Hero, Header, etc.)
├── context/
│   ├── AuthContext.jsx    # Auth logic provider
│   └── ThemeContext.jsx   # Theme provider
└── App.jsx                # Routing configuration
```

## ✅ Design Decisions
- **Routing**: `react-router-dom` handles navigation without page reloads.
- **Styling**: `Shared.css` ensures new components (Auth/Dashboard) inherit the landing page's typography and color variables.
- **Icons**: Used existing assets where possible or CSS shapes to avoid external dependencies.
