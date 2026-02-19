# Portfolio Template 1

A modern, fully responsive portfolio template built with **React** and **Tailwind CSS**. This template is designed to provide a high-quality, customizable starting point for your personal portfolio website.

## ✨ Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop.
- **Modern UI**: Clean and professional aesthetic with smooth animations.
- **Easy Customization**: All content is managed in a single file (`constants.js`) for rapid updates.
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

## 📝 How to Customize

We have made it extremely easy for you to personalize this portfolio. You **do not** need to know how to code complex React components.

**All you need to edit is the `src/constants.js` file.**

1.  Open `src/constants.js`.
2.  You will see sections for **Navigation**, **Hero/Home**, **Work Experience**, **Skills**, **Projects**, and **Contact**.
3.  Simply change the text inside the quotes `""`.
4.  Save the file, and your website will update instantly!

### Customization Examples

- **Changing your Name**: Find `export const hero = { ... }` and change the `name` field.
- **Adding a Project**: Find `export const projectsContent = { ... }`. Copy one of the project blocks (from `{` to `}`), paste it, and change the details.
- **Updating Social Links**: Find `export const ContactContent = { ... }` and update the `links` array.

## 🖼️ Adding Images

To use your own images (profile picture, project screenshots, etc.):

1.  Go to the `public/` folder in the project root.
2.  Paste your image file there (e.g., `my-photo.jpg`).
3.  In `src/constants.js`, update the image path to use your filename.
    - Example: `profile: "/my-photo.jpg"`

## 🍴 How to Fork

If you want to make this project your own on GitHub:

1.  Click the **Fork** button at the top right of this repository page.
2.  This will create a copy of the repository in your own GitHub account.
3.  You can now clone your forked repository and make changes without affecting the original.

## ☁️ How to Deploy to Vercel

Vercel is the easiest way to deploy Next.js and React applications.

1.  Push your code to your GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and sign up/log in.
3.  Click **"Add New..."** -> **"Project"**.
4.  Select your GitHub repository (`PortfolioTemplate1`) and click **Import**.
5.  In the configuration screen, the default settings usually work perfectly (Framework Preset: Vite).
6.  Click **Deploy**.

Vercel will build your site and give you a live URL (e.g., `your-portfolio.vercel.app`) in less than a minute!

## 🛠️ Built With

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

If you find this template helpful, please give it a ⭐ on [GitHub](https://github.com/Mahesh2-3/PortfolioTemplate1)!
