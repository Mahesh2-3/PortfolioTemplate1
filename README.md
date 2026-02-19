# Portfolio Template 1

A modern, fully responsive portfolio template built with **React** and **Tailwind CSS**. This template is designed to provide a high-quality, customizable starting point for your personal portfolio website.

## ✨ Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop.
- **Modern UI**: Clean and professional aesthetic with smooth animations.
- **Easy Customization**: Built with Tailwind CSS for rapid styling changes.
- **Performance Optimized**: Powered by Vite for fast development and production builds.

## 🚀 Getting Started

Follow these steps to get your portfolio up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/Mahesh2-3/PortfolioTemplate1.git
cd PortfolioTemplate1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your portfolio.

## 📝 Customization

This template is designed to be easily customizable. Most of the content is driven by data files, making it simple to update your information without diving deep into complex components.

### 1. Update Content, Data & Links

Navigate to `src/constants.js`. This file contains all the text data for the website, including:

- **Hero Section**: Update the `hero` object with your name, role, quote, and bio.
- **Experience**: Modify the `works` array to list your work history.
- **Skills**: Update the `skills` array to show your technical stack.
- **Projects**: Edit the `projects` array to showcase your work. **Don't forget to update the `link` and `github` URLs for each project!**
- **Contact & Socials**: Update `ContactContent` with your email and social media links (LinkedIn, GitHub, Instagram, etc.).

### 2. Update Images

- **Project Images**: Place your project screenshots in the `public/` folder (or use external URLs) and update the `img` paths in the `projects` array in `src/constants.js`.
- **Tech Stack Icons**: Add your icons to `public/tech/` and update the paths in the `skills` array.
- **Hero Image/Icons**: Update any specific assets directly in the `public/` folder or referenced in `src/constants.js`.

## 🛠️ Built With

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

If you find this template helpful, please give it a ⭐ on [GitHub](https://github.com/Mahesh2-3/PortfolioTemplate1)!
