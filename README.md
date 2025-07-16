# GitHub Explorer

A web application to explore GitHub repositories and users, built with React, TypeScript, and Vite. This project demonstrates clean architecture, modular design, and a focus on user experience.

## Features

- **Search GitHub Repositories and Users**
- **View Repository Details**
- **User Profiles with Accordion UI**
- **Fast, Responsive UI**
- **Modular, Scalable Codebase**
- **Theme Support**
- **TypeScript for Type Safety**

## Demo

> http://github-repo-explorer.s3-website-ap-southeast-2.amazonaws.com/

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/wandasyahputra/github-explorer
cd github-explorer

# Install dependencies
npm install
# or
yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
src/
  App.tsx            # Main app component
  main.tsx           # Entry point
  router.tsx         # App routing
  components/        # Shared UI components
    theme-provider.tsx
    ui/              # UI primitives from ShadCN (accordion, button, etc.)
  modules/
    home/            # Home page module
      api/           # API calls (search)
      components/    # Feature-specific components
      features/      # Feature hooks and logic
      pages/         # Page components
      type/          # TypeScript types
  lib/               # Utilities and helpers
public/               # Static assets
```

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/) (with recommended configs)

## License

This project is licensed under the MIT License.
