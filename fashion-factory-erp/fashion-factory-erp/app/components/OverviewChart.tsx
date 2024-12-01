'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = {
  daily: [
    { name: 'Mon', revenue: 4000, orders: 240, production: 2400 },
    { name: 'Tue', revenue: 3000, orders: 198, production: 2210 },
    { name: 'Wed', revenue: 5000, orders: 300, production: 2290 },
    { name: 'Thu', revenue: 2780, orders: 208, production: 2000 },
    { name: 'Fri', revenue: 1890, orders: 198, production: 2181 },
    { name: 'Sat', revenue: 2390, orders: 180, production: 2500 },
    { name: 'Sun', revenue: 3490, orders: 250, production: 2100 },
  ],
  weekly: [
    { name: 'Week 1', revenue: 20000, orders: 1200, production: 15000 },
    { name: 'Week 2', revenue: 25000, orders: 1500, production: 17000 },
    { name: 'Week 3', revenue: 22000, orders: 1300, production: 16000 },
    { name: 'Week 4', revenue: 30000, orders: 1800, production: 19000 },
  ],
  monthly: [
    { name: 'Jan', revenue: 100000, orders: 6000, production: 75000 },
    { name: 'Feb', revenue: 110000, orders: 6500, production: 80000 },
    { name: 'Mar', revenue: 120000, orders: 7000, production: 85000 },
    { name: 'Apr', revenue: 130000, orders: 7500, production: 90000 },
    { name: 'May', revenue: 140000, orders: 8000, production: 95000 },
    { name: 'Jun', revenue: 150000, orders: 8500, production: 100000 },
  ],
};

export function OverviewChart({ period }: { period: 'daily' | 'weekly' | 'monthly' }) {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data[period]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" />
        <Line yAxisId="right" type="monotone" dataKey="production" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

