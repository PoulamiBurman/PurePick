# PurePick - Sustainable Beauty Choices

PurePick is a React + Tailwind CSS web application that helps users evaluate cosmetic products for sustainability and ethical practices. The app provides comprehensive ingredient analysis, sustainability scoring, and eco-friendly product recommendations.

## Features

- **Product Scanning**: Upload product labels or scan barcodes for instant analysis
- **Ingredient Analysis**: Categorized safety ratings (Safe, Moderate, Harmful, Unknown)
- **Sustainability Scoring**: 0-100 sustainability and ethical practice ratings
- **Eco-Friendly Alternatives**: Discover better product alternatives
- **User Authentication**: Register, login, and profile management
- **Product History & Favorites**: Track scanned products and save favorites
- **Educational Content**: Learn about sustainable beauty practices
- **Responsive Design**: Fully responsive across all devices

## Tech Stack

- **Frontend**: React 18 with JSX
- **Styling**: Tailwind CSS with custom pink/rose theme
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PurePick
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── Button.jsx
│       └── Card.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   ├── Scan.jsx
│   ├── Learn.jsx
│   ├── History.jsx
│   └── Favorites.jsx
├── App.jsx
├── index.js
└── index.css
```

## Design System

### Colors
- **Primary**: Pink/Rose gradient theme
- **Secondary**: White with pink accents
- **Background**: Gradient backgrounds with soft pink tones

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Reusable card component with header, content, and footer
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info

## Current Implementation Status

✅ **Completed**:
- Project setup with React + Tailwind CSS
- Responsive navigation and footer
- Beautiful landing page with hero section
- User authentication pages (Login/Register)
- All main page layouts and routing
- Reusable UI components
- Pink/rose theme implementation

🚧 **In Progress**:
- Mock data integration
- Local storage implementation
- Form validation and submission

📋 **Planned**:
- OCR functionality (mock implementation)
- Barcode scanning simulation
- Ingredient analysis algorithm
- Sustainability scoring system
- Product recommendation engine
- Gamification features
- Social sharing functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: hello@purepick.com
- Website: [PurePick](https://purepick.com)

---

Made with 💚 for sustainable beauty choices
