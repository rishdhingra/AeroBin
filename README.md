# AeroBin - Smart Waste Management Platform

A production-quality, demo-ready web application showcasing smart waste sensors with real-time bin monitoring, alerts, analytics, AI route simulation, and ROI calculator.

## Prerequisites

Before installing, make sure you have the following installed:

### Node.js and npm

**macOS (using Homebrew):**
```bash
brew install node
```

**Windows:**
- Download and install from [nodejs.org](https://nodejs.org/)
- Choose the LTS version

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verify installation:**
```bash
node --version  # Should be v18 or higher
npm --version   # Should be 9 or higher
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rishdhingra/AeroBin.git
cd aerobin
```

2. Install dependencies:
```bash
npm install
```

## Running the Program

Start the development server:
```bash
npm run dev
```

Open your browser to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Tech Stack

- React 19 + Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- Leaflet + react-leaflet
- Recharts
- Framer Motion
