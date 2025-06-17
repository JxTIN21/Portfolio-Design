# Siddharth Verma - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional experience in hotel management and hospitality.

## 🚀 Live Demo

[View Portfolio](https://ephemeral-phoenix-13379f.netlify.app/) <!-- Replace with your actual URL -->

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern Design**: Sleek, professional design with gradient backgrounds and animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Smooth Scrolling**: Interactive navigation with smooth scroll-to-section functionality
- **Active Section Highlighting**: Dynamic navigation highlighting based on scroll position
- **Mobile Menu**: Collapsible mobile navigation menu
- **Animated Elements**: CSS animations and hover effects throughout the site
- **Download Functionality**: Resume and certificate download capabilities
- **Professional Sections**:
  - Hero section with animated profile picture
  - About me
  - Education background
  - Professional experience
  - Skills showcase
  - Certifications gallery
  - Contact information

## 🛠 Tech Stack

- **Frontend**: React 18+ with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite (recommended) or Create React App
- **Deployment**: Vercel, Netlify, or GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio-Design.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up assets**
   Create the following directories in your `public` folder:
   ```
   public/
   ├── images/
   │   └── Me.png
   ├── certificates/
   │   ├── certificate.png
   │   ├── appreciation.png
   │   ├── gratitude.png
   │   ├── internship_certificate.pdf
   │   ├── certificate_of_appreciation.pdf
   │   └── gratitude_certificate.pdf
   └── resume/
       └── Siddharth Resume.pdf
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── App.js                    # Main portfolio component (contains all code)
├── index.js                  # Entry point
├── index.css                 # Global styles and Tailwind imports
└── App.css                   # Additional component styles (if needed)

public/
├── images/                   # Profile and other images
│   └── Me.png               # Profile picture
├── certificates/             # Certificate images and PDFs
│   ├── certificate.png
│   ├── appreciation.png
│   ├── gratitude.png
│   ├── internship_certificate.pdf
│   ├── certificate_of_appreciation.pdf
│   └── gratitude_certificate.pdf
├── resume/                   # Resume PDF
│   └── Siddharth Resume.pdf
└── index.html               # HTML template
```

## 🎨 Customization

### Personal Information

Update the following sections in `App.js`:

1. **Personal Details**:
   ```jsx
   // Update name, title, and description
   <h1>Your Name</h1>
   <p>Your Professional Title</p>
   ```

2. **About Section**:
   ```jsx
   // Update the about text
   <p>Your professional description...</p>
   ```

3. **Experience Section**:
   ```jsx
   // Update work experience details
   <h3>Your Job Title - Company Name</h3>
   ```

4. **Contact Information**:
   ```jsx
   // Update email and LinkedIn
   href="mailto:your-email@example.com"
   href="https://linkedin.com/in/your-profile"
   ```

### Styling

- **Colors**: Modify the gradient colors in Tailwind classes
- **Animations**: Adjust animation durations and effects
- **Layout**: Customize spacing, sizing, and component arrangement

### Assets

Replace the following files with your own:
- `public/images/Me.png` - Your profile picture
- `public/resume/Siddharth Resume.pdf` - Your resume
- Certificate images and PDFs in `public/certificates/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Deploy: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide React](https://lucide.dev) for the beautiful icons
- [React](https://reactjs.org) for the awesome JavaScript library

## 📞 Contact

Jatin Srivastava - [jatinsrivastava4104@gmail.com](mailto:jatinsrivastava4104@gmail.com)

LinkedIn: [www.linkedin.com/in/jatin-srivastava-784223253](www.linkedin.com/in/jatin-srivastava-784223253)

Project Link: [https://github.com/JxTIN21/Portfolio-Design](https://github.com/JxTIN21/Portfolio-Design)

Live Link: [https://ephemeral-phoenix-13379f.netlify.app/](https://ephemeral-phoenix-13379f.netlify.app/)

---

⭐ Star this repository if you found it helpful!
