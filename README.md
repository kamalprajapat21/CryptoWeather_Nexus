# CryptoWeather Nexus

A modern web application that combines real-time cryptocurrency data with weather information, providing users with a comprehensive dashboard for monitoring both markets and weather conditions.

## Features

- Real-time cryptocurrency price tracking
- Weather information for multiple cities
- Latest news related to crypto and weather
- Dark mode support
- Responsive design
- Favorite cities and cryptocurrencies
- Price alerts and weather notifications

## Tech Stack

- Next.js 14
- TypeScript
- Redux Toolkit
- Tailwind CSS
- React Hot Toast
- Heroicons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cryptoweather-nexus.git
   cd cryptoweather-nexus
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your API keys:
   ```
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
   NEXT_PUBLIC_NEWSDATA_API_KEY=your_newsdata_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Keys

- [OpenWeather API](https://openweathermap.org/api) - For weather data
- [NewsData.io](https://newsdata.io/) - For news articles

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── store/              # Redux store and slices
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


