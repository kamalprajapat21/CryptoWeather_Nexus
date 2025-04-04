



'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchWeatherData } from '@/store/slices/weatherSlice';
import { fetchCryptoData } from '@/store/slices/cryptoSlice';
import { fetchNewsData } from '@/store/slices/newsSlice';
import { Navigation } from '@/components/Navigation';
import { WeatherSection } from '@/components/WeatherSection';
import { CryptoSection } from '@/components/CryptoSection';
import { NewsSection } from '@/components/NewsSection';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowUp } from 'lucide-react';

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(true); // controls visibility

  const { error: weatherError } = useSelector((state: RootState) => state.weather);
  const { error: cryptoError } = useSelector((state: RootState) => state.crypto);
  const { error: newsError } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await Promise.all([
          dispatch(fetchWeatherData(['London', 'New York', 'Tokyo'])),
          dispatch(fetchCryptoData(['bitcoin', 'ethereum', 'cardano'])),
          dispatch(fetchNewsData(['cryptocurrency', 'weather']))
        ]);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [dispatch]);

  const hasError = weatherError || cryptoError || newsError;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowButton(false); // Hide immediately

    // Show again after 5 seconds if needed
    setTimeout(() => {
      setShowButton(true);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Welcome to <span className="text-primary">CryptoWeather Nexus</span>
          </h1>

          {hasError && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md border border-red-300 dark:bg-red-900 dark:text-red-200">
              <strong>Oops!</strong> Something went wrong while loading data.
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <SectionCard title="Weather Dashboard" loading={loading}>
                <WeatherSection />
              </SectionCard>

              <SectionCard title="Cryptocurrency Dashboard" loading={loading}>
                <CryptoSection />
              </SectionCard>
            </div>

            <SectionCard title="Latest News" loading={loading}>
              <NewsSection />
            </SectionCard>
          </div>
        </div>
      </main>

      {/* ⬆️ Scroll to Top Button */}
      {showButton && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/80 transition"
          aria-label="Scroll to top"
        >
<ArrowUp className="h-10 w-10 text-blue-500" />
</button>
      )}
    </div>
  );
}

function SectionCard({
  title,
  children,
  loading
}: {
  title: string;
  children: React.ReactNode;
  loading: boolean;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
        {loading ? (
          <Skeleton className="h-32 w-full rounded-md bg-gray-200 dark:bg-gray-700" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
