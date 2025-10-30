# PowerFit – Gym Website

PowerFit is a responsive gym website created to showcase gym details, a media gallery, program information (so people can explore and interact with programs), real customer reviews to help new visitors get an idea about the gym, and a contact section to reach the "PowerFit" gym station.

Built with modern web tools, it’s fast, mobile-friendly, and includes smooth motion/animations.


## 🚀 Live Demo
Click Here: https://helpful-souffle-5c5560.netlify.app/


## 🎯 What this site includes

- Gym details and highlights
- Programs section for users to explore what’s offered
- Gallery to view images/media
- Customers’ reviews/testimonials for social proof
- Contact form to message PowerFit directly
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)

## 🧪 Technologies used (simple explanation)

- React: Builds the UI as reusable components.
- Vite: Runs the app locally fast and builds optimized files for production.
- Tailwind CSS: Quickly styles the site with utility classes for responsive design.
- Framer Motion: Adds smooth animations and motion effects.
- React Toastify: Shows success/error toasts (e.g., after sending the contact form).
- React Icons: Provides icons used in the interface.
- PostCSS + Autoprefixer: Processes CSS and adds vendor prefixes for browser support.
- ESLint: Keeps the code clean and consistent while developing.

## ✉️ Contact form

The contact form sends messages to the gym using the Web3Forms API. The code adds an `access_key` and posts the data to `https://api.web3forms.com/submit`, then shows a toast if the message is sent successfully.

Update the access key in `src/components/Contacts.jsx` with your own for production use.

## 🚀 Getting started

1) Install dependencies

```powershell
npm install
```

2) Start the development server

```powershell
npm run dev
```

3) Open the local URL shown in the terminal (usually http://localhost:5173).

## 📁 Project structure

```
powerFit/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ eslint.config.js
├─ public/
└─ src/
	├─ main.jsx
	├─ App.jsx
	├─ index.css
	├─ assets/
	└─ components/
		├─ Header.jsx
		├─ About.jsx
		├─ Programs.jsx
		├─ Gallery.jsx
		├─ Testimonails.jsx
		├─ Contacts.jsx
		└─ Footer.jsx
```

## 📜 Scripts

- Start dev server:

```powershell
npm run dev
```

- Build for production:

```powershell
npm run build
```

- Preview the production build:

```powershell
npm run preview
```

- Lint the project:

```powershell
npm run lint
```

## 🧱 Deploy

Run a production build and deploy the `dist/` folder to any static hosting (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, etc.).

```powershell
npm run build
```

## 🛠️ Troubleshooting

- Tailwind/PostCSS issues (e.g., autoprefixer missing):

```powershell
npm install -D tailwindcss autoprefixer
```

Restart the dev server after installing.

- Icons not showing:

```powershell
npm install react-icons
```

- If dependencies are corrupted:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

Made for the PowerFit gym to help guests explore programs, see real reviews, browse the gallery, and easily get in touch.
