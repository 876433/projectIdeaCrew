# 🏃♂️ FitTracker Pro

A modern, GPS-based fitness tracking web application built with Mapbox GL JS and vanilla JavaScript.

## ✨ Features

- 🗺️ **Real-time GPS Tracking** - Live location tracking with interactive map
- 📍 **Route Visualization** - See your running path drawn in real-time
- ⏱️ **Timer & Distance** - Accurate time and distance calculation
- 🔐 **User Authentication** - Secure login system with session management
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 🌐 **PWA Ready** - Can be installed as a mobile app

## 🚀 Live Demo

**[Try FitTracker Pro](https://876433.github.io/projectIdeaCrew/loginpage.html)**

## 📱 Quick Start

1. **Open the app** - Click the live demo link above
2. **Login** - Use "Quick Demo Login" for instant access
3. **Allow location** - Grant GPS permission when prompted
4. **Start tracking** - Click "🚀 Start Run" to begin
5. **Move around** - Watch your route being drawn on the map
6. **Stop tracking** - Click "⏹️ Stop Run" to finish

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Mapbox GL JS
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Storage**: LocalStorage for session management
- **APIs**: Geolocation API, Mapbox API

## 📁 Project Structure

```
projectIdeaCrew/
├── index.html          # Main fitness tracker app
├── loginpage.html      # User authentication page
├── style.css          # Login page styling
├── simple-tracker.html # Lightweight version
├── test-map.html      # Map testing utility
└── README.md          # Project documentation
```

## 🔧 Setup & Installation

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/876433/projectIdeaCrew.git
   cd projectIdeaCrew
   ```

2. **Open in browser**
   ```bash
   # Simply open loginpage.html in your browser
   # Or use a local server for better performance
   python -m http.server 8000
   ```

3. **Access the app**
   - Direct: Open `loginpage.html`
   - Server: `http://localhost:8000/loginpage.html`

### Mapbox Token Setup

The app uses a pre-configured Mapbox token. For production use:

1. Get your token from [Mapbox](https://mapbox.com)
2. Replace the token in `index.html`:
   ```javascript
   mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE';
   ```

## 🎯 How It Works

### Authentication Flow
1. User opens `loginpage.html`
2. Enters credentials or uses quick demo login
3. Session stored in localStorage
4. Redirected to main tracker (`index.html`)

### GPS Tracking
1. App requests geolocation permission
2. Real-time position tracking starts
3. Route coordinates stored and visualized
4. Distance calculated using Haversine formula

### Data Storage
- User sessions: localStorage
- Route data: In-memory during active session
- No server-side storage (client-side only)

## 📊 Features Breakdown

| Feature | Status | Description |
|---------|--------|-------------|
| GPS Tracking | ✅ | Real-time location with high accuracy |
| Route Drawing | ✅ | Live route visualization on map |
| Distance Calc | ✅ | Haversine formula for accuracy |
| Timer | ✅ | Precise elapsed time tracking |
| Login System | ✅ | Session-based authentication |
| Responsive UI | ✅ | Mobile-first design |
| Animations | ✅ | Smooth CSS transitions |

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- 📱 Mobile browsers with GPS support

## 🔒 Privacy & Security

- **No data collection** - All data stays on your device
- **No server storage** - Routes not saved externally
- **Local sessions** - Authentication via localStorage
- **HTTPS ready** - Secure connection support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ronak Garg**
- GitHub: [@876433](https://github.com/876433)
- Project: [FitTracker Pro](https://github.com/876433/projectIdeaCrew)

## 🙏 Acknowledgments

- [Mapbox](https://mapbox.com) for excellent mapping services
- [MDN Web Docs](https://developer.mozilla.org) for Geolocation API documentation
- Modern CSS techniques for responsive design

---

**⭐ Star this repo if you found it helpful!**