# AeroBin - Smart Waste Management Platform

A production-quality, demo-ready web application showcasing smart waste sensors with real-time bin monitoring, alerts, analytics, AI route simulation, ROI calculator, and a beautiful landing page.

## Features

- **Real-time Bin Monitoring**: Live updates every 10 seconds with fill levels, battery status, and location tracking
- **Interactive Map**: Leaflet-based map with clustering, custom markers, and popover details
- **Smart Route Simulation**: Manual vs AI-optimized route planning with distance and time calculations
- **Analytics Dashboard**: Comprehensive charts showing fill distribution, overflow incidents, pickup comparisons, and CO₂ savings
- **ROI Calculator**: Interactive calculator with 3-year projections and breakeven analysis
- **Alerts System**: Real-time alerts for bins crossing critical thresholds (>80% fill)
- **Multi-Organization Support**: Columbia University and Rutgers University with campus filtering
- **Dark Mode**: Beautiful dark theme with glassmorphism effects

## Tech Stack

- **React 19** + **Vite** - Modern frontend framework and build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Zustand** - Lightweight state management
- **Leaflet** + **react-leaflet** - Interactive maps
- **Recharts** - Beautiful charts and visualizations
- **Framer Motion** - Smooth animations
- **lucide-react** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aerobin
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── ui/             # shadcn/ui components
  │   ├── layout/         # Layout components (Topbar, etc.)
  │   ├── common/         # Shared components (KpiTile, StatBadge, etc.)
  │   ├── map/            # Map-related components
  │   ├── bins/           # Bin table and popover
  │   ├── alerts/         # Alerts panel
  │   ├── routesim/       # Route simulation
  │   ├── analytics/      # Analytics charts
  │   └── roi/            # ROI calculator
  ├── routes/             # Page components (Landing, Dashboard)
  ├── store/              # Zustand store
  ├── data/               # Seed data (columbia.json, rutgers.json)
  ├── utils/              # Utility functions (geo, format, faker)
  ├── hooks/              # Custom React hooks
  ├── types/              # TypeScript type definitions
  └── lib/                # Theme and utilities
```

## Data Model

### Bin Schema

```typescript
interface Bin {
  id: string                    // e.g., "COL-12"
  organization: string          // "Columbia University" | "Rutgers University"
  campus?: string               // Optional campus name
  location: string              // Human-readable location
  lat: number                   // Latitude
  lng: number                   // Longitude
  fill: number                  // 0-100 percentage
  battery: number               // 0-100 percentage
  lastEmptied: string          // ISO timestamp
  status: 'normal' | 'warning' | 'critical' | 'offline'
}
```

### Status Color Legend

- **Normal** (< 40%): Green
- **Warning** (40-80%): Amber
- **Critical** (> 80%): Red
- **Offline**: Grey (striped/low-opacity)

## Live Simulation

The app simulates live updates by:
- Randomly nudging 5-10 bins every 10 seconds
- Adjusting fill levels by ±1-3%
- Automatically updating status based on thresholds
- Triggering toast notifications when bins cross critical thresholds

Toggle simulation on/off using the pause button in the topbar.

## Adding a Backend

The current implementation uses local JSON files and polling. To add a backend:

1. **API Endpoints**: Replace data fetching in `useAppStore.loadBins()` with API calls
2. **WebSocket**: Replace polling in `Dashboard.tsx` with WebSocket connections for real-time updates
3. **Authentication**: Add auth context and protected routes
4. **Data Persistence**: Move seed data to database and add CRUD operations

Example API integration:

```typescript
// In useAppStore.ts
loadBins: async () => {
  const { organization, campus } = get()
  const response = await fetch(`/api/bins?org=${organization}&campus=${campus}`)
  const bins = await response.json()
  set({ bins })
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

No environment variables are required for the demo. For production, you may want to add:

- `VITE_API_URL` - Backend API URL
- `VITE_MAPBOX_TOKEN` - Optional Mapbox token (currently using OpenStreetMap)

## License

MIT License - see LICENSE file for details

## Demo Script

1. **Landing Page**: View hero section, case studies, and live peek widget
2. **Dashboard Overview**: See KPIs, map, and alerts
3. **Map Tab**: Explore bins on interactive map with clustering
4. **Bins Tab**: Search, filter, and sort bin data
5. **Alerts Tab**: View critical bins with real-time updates
6. **Routes Tab**: Toggle between Manual and AI route simulation
7. **Analytics Tab**: View charts and metrics
8. **ROI Tab**: Adjust parameters and see breakeven analysis

## Contributing

This is a demo application. For production use, consider:
- Adding error boundaries
- Implementing proper error handling
- Adding unit and integration tests
- Setting up CI/CD pipeline
- Adding accessibility improvements
- Implementing proper authentication and authorization
