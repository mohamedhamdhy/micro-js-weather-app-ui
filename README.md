# Weather App 🌤️

A modern, professional weather application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. The app features a stunning glassmorphism design, dark mode support, and real-time weather data from the Open-Meteo API.

![Weather App](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ✨ Features

- 🔍 **City Search** - Live geocoding with autocomplete dropdown
- 🌡️ **Current Weather** - Real-time temperature, wind speed, humidity, and weather conditions
- 📅 **7-Day Forecast** - Daily weather predictions with max/min temperatures, sunrise/sunset times
- ⏰ **24-Hour Forecast** - Hourly weather data with temperature and humidity
- 🎨 **Glassmorphism UI** - Beautiful frosted glass design with backdrop blur effects
- 🌙 **Dark Mode** - Toggle between light and dark themes with smooth transitions
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- 🎭 **Weather Icons** - Dynamic icons based on weather conditions (sun, clouds, rain, snow, etc.)
- ⚡ **Smooth Animations** - Hover effects, zoom transitions, and floating elements
- 💾 **Theme Persistence** - Remembers your theme preference using localStorage

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Axios** | HTTP client for API requests |
| **Lucide React** | Beautiful weather icons |
| **Open-Meteo API** | Free weather data provider |

---

## 📁 Project Structure

```
weather-app/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts          # Weather API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main weather component
│   └── globals.css               # Global styles
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm installed
- Internet connection for API requests

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage

1. **Search for a City**
   - Type a city name in the search bar
   - Press Enter or click the Search button
   - Select your city from the dropdown list

2. **View Weather Data**
   - **Current Weather**: Large display with temperature, description, and weather icon
   - **Weather Stats**: Wind speed, direction, humidity, and "feels like" temperature
   - **Hourly Forecast**: Scrollable cards showing next 24 hours
   - **7-Day Forecast**: Week-long predictions with sunrise/sunset times

3. **Toggle Dark Mode**
   - Click the sun/moon icon in the top-right corner
   - Theme preference is saved automatically

---

## 🎨 Design Features

### Glassmorphism
- Frosted glass effect with `backdrop-blur`
- Semi-transparent backgrounds
- Layered depth with multiple opacity levels

### Animations
- **Blob Background**: Animated gradient blobs
- **Floating Icon**: Weather icon with smooth up-down motion
- **Hover Effects**: Scale and shadow transitions on all cards
- **Theme Toggle**: Rotating icon on dark mode switch

### Color Schemes

**Light Mode**
- Background: Blue → Purple → Pink gradient
- Cards: White with 20-30% opacity
- Text: Dark gray/black

**Dark Mode**
- Background: Slate → Purple → Slate gradient
- Cards: White with 5-10% opacity
- Text: White/light gray

---

## 🌐 API Reference

### Weather API Endpoint

```typescript
GET /api/weather?lat={latitude}&lon={longitude}
```

**Query Parameters:**
- `lat` - Latitude coordinate (required)
- `lon` - Longitude coordinate (required)

**Response:**
```json
{
  "current_weather": {
    "temperature": 25,
    "windspeed": 10,
    "winddirection": 180,
    "weathercode": 0
  },
  "hourly": { ... },
  "daily": { ... }
}
```

### Open-Meteo API

The app uses the following Open-Meteo endpoints:

1. **Geocoding API**
   - `https://geocoding-api.open-meteo.com/v1/search`
   - Returns city coordinates and country info

2. **Forecast API**
   - `https://api.open-meteo.com/v1/forecast`
   - Returns current weather, hourly, and daily forecasts

---

## 🎯 Weather Codes

| Code | Description |
|------|-------------|
| 0 | Clear sky |
| 1-2 | Mainly clear / Partly cloudy |
| 3 | Overcast |
| 45-48 | Foggy |
| 51-55 | Drizzle |
| 61-65 | Rain |
| 71-77 | Snow |
| 80-82 | Rain showers |
| 85-86 | Snow showers |
| 95-99 | Thunderstorm |

---

## 🔧 Configuration

### Tailwind CSS

The app uses Tailwind CSS with custom animations. Key configurations:

```css
/* Custom animations */
@keyframes blob { ... }
@keyframes float { ... }
@keyframes fade-in { ... }
@keyframes slide-up { ... }
```

### TypeScript

Strict mode enabled for type safety:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"]
  }
}
```

---

## 📦 Dependencies

### Production
```json
{
  "next": "^15.0.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "axios": "^1.6.0",
  "lucide-react": "^0.400.0"
}
```

### Development
```json
{
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "@types/node": "^20.0.0",
  "@types/react": "^18.0.0"
}
```

---

## 🚦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/weather-app)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Open-Meteo: https://open-meteo.com - for free weather API
- Lucide: https://lucide.dev - for beautiful icons
- Tailwind CSS: https://tailwindcss.com - for styling utilities
- Next.js: https://nextjs.org - for the amazing framework

---

## 📧 Contact

For questions or feedback, please reach out:

- GitHub: https://github.com/mohamedhamdhy
- Email: mohamedalhamdhy@gmail.com

---

<div align="left">
  <p>Made with ❤️ and ☕</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
