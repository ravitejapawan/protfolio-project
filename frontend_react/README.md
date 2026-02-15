# Portfolio Frontend (Vite + React)

Personal portfolio frontend built with React, Vite, Framer Motion, and Sanity CMS.

## Features
- Responsive single-page portfolio
- Scroll-aware active navbar
- Light/Dark theme toggle with persistence
- Contact form sends email via EmailJS
- Contact form stores messages in Sanity (`contact` documents)

## Tech Stack
- React 18
- Vite 5
- Framer Motion
- Sanity Client
- EmailJS Browser SDK
- Sass

## Setup
1. Go to frontend:
```bash
cd frontend_react
```
2. Install dependencies:
```bash
npm install
```
3. Create `.env` from `.env.example` and fill values:
```env
VITE_SANITY_PROJECT_ID=
VITE_SANITY_TOKEN=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Run
```bash
npm run dev
```
Open `http://localhost:3000` (or the URL shown by Vite).

If PowerShell blocks npm scripts, run with:
```bash
cmd /c npm run dev
```

## Build
```bash
npm run build
```

## Contact Form Notes
- Configure your EmailJS template with variables: `from_name`, `from_email`, `subject`, `message`, `reply_to`
- Contact form file: `src/containers/Contact/Contact.jsx`

## Project Structure
```text
src/
  components/
  containers/
  constants/
  wrapper/
  client.js
```
