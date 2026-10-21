# Portfolio

Ignacio Avendaño's personal portfolio, built as a responsive web application to showcase his profile, professional experience, projects, and contact information. The interface is available in Spanish and English.

<p align="center">
  <img src="https://i.imgur.com/9DjUa39.png" alt="Ignacio Avendaño logo" height="300">
</p>

## Features

- Introduces the author's professional profile and personal information.
- Showcases work experience, projects, and technologies.
- Provides a PDF resume download from Google Drive.
- Includes section-based navigation, a responsive menu, and animations.
- Supports switching between Spanish and English.
- Built with React, TypeScript and Vite.

## Requirements

- [Node.js](https://nodejs.org/) 22.12 or later.
- [pnpm](https://pnpm.io/installation).
- [Visual Studio Code](https://code.visualstudio.com/) or another compatible editor.

## Dependencies

The complete list of dependencies is available in [`package.json`](./package.json).

## Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/ignacioavendanor/ignacioavendanor.github.io.git
   cd ignacioavendanor.github.io
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Configure the environment variables. Create a `.env.local` file in the project root and add:

   ```env
   VITE_GOOGLE_API_KEY=your_google_api_key
   VITE_GOOGLE_CV_FILE_ID=your_cv_file_id
   ```

   Enable the Google Drive API for the key and restrict it to its intended use. Variables prefixed with `VITE_` are included in the browser bundle; do not store private secrets in them.

4. Start the development server:

   ```bash
   pnpm dev
   ```

   Vite will display the local URL for the application in the terminal.

## Available Scripts

- `pnpm dev`: starts the development server.
- `pnpm build`: runs the TypeScript check and creates a production build in `dist/`.
- `pnpm preview`: serves the production build locally.
- `pnpm lint`: checks the code with Oxlint.
- `pnpm check`: runs the linter and production build.

## Author

- [@ignacioavendanor](https://github.com/ignacioavendanor)
