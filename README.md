# 🎓 Coaching Life

A modern, responsive coaching center website built with React and FastAPI, featuring a beautiful warm theme with light/dark mode support.

## ✨ Features

- **Modern Design**: Clean, professional interface with warm autumn-inspired colors
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Theme Toggle**: Switch between light and dark themes with persistent preferences
- **Component-Based Architecture**: Modular React components for easy maintenance
- **FastAPI Backend**: RESTful API with automatic documentation
- **TypeScript**: Full type safety and better development experience

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS Custom Properties** - Dynamic theming system

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **PostgreSQL** - Database (configured in Docker)

## 📁 Project Structure

```
coaching-center-website/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.tsx          # Main application component
│   │   ├── App.css          # Component styles
│   │   └── index.css        # Global styles and theme
│   ├── package.json
│   └── tsconfig.json
├── backend/                  # FastAPI backend application
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── docker-compose.yml       # Docker configuration
└── README.md               # Project documentation
```

## 🎨 Theme System

The application features a sophisticated theme system with:

- **Light Theme**: Warm cream backgrounds with red accents
- **Dark Theme**: Rich browns with warm highlights
- **Persistent Preferences**: User theme choice is saved locally
- **Smooth Transitions**: Beautiful animations between themes

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+
- Git

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Docker Setup (Optional)
```bash
docker-compose up --build
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 📱 Components Overview

### Navigation
- Fixed header with logo
- Responsive mobile menu
- Theme toggle switch
- Login/Sign up buttons

### Hero Section
- Compelling headline and description
- Call-to-action buttons
- Placeholder for hero image

### Features
- Three key features with icons
- Hover animations
- Responsive grid layout

### Courses
- Course cards with details
- Duration and difficulty levels
- Enroll buttons

### Statistics
- Key metrics display
- Animated counters
- High-contrast design

### Testimonials
- Student reviews
- Author information
- Hover effects

### Call-to-Action
- Final conversion section
- Gradient background
- Prominent CTA button

### Footer
- Multi-column layout
- Quick links
- Social media links
- Copyright information

## 🎯 Key Features

### Theme Toggle
- Beautiful sliding toggle switch
- Sun/moon icons
- Smooth animations
- Persistent storage

### Responsive Design
- Mobile-first approach
- Flexible grid system
- Touch-friendly interactions
- Optimized typography

### Performance
- Fast loading with Vite
- Optimized images and assets
- Efficient component rendering
- Minimal bundle size

## 🔧 Development

### Adding New Components
1. Create component file in `src/components/`
2. Add TypeScript interfaces in `src/types/`
3. Export from `src/components/index.ts`
4. Import and use in `App.tsx`

### Styling Guidelines
- Use CSS custom properties for theming
- Follow BEM methodology for class names
- Implement responsive design patterns
- Maintain consistent spacing and typography

### TypeScript Best Practices
- Define interfaces for all data structures
- Use type-only imports for interfaces
- Implement proper prop typing
- Maintain strict type checking

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- FastAPI for the modern Python web framework
- Vite for the lightning-fast build tool
- All contributors and supporters

---

**Built with ❤️ for the coaching community** 