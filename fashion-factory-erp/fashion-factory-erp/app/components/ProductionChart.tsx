'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = {
  daily: [
    { name: 'T-Shirts', completed: 120, inProgress: 80 },
    { name: 'Pants', completed: 80, inProgress: 40 },
    { name: 'Dresses', completed: 60, inProgress: 30 },
    { name: 'Jackets', completed: 40, inProgress: 20 },
  ],
  weekly: [
    { name: 'T-Shirts', completed: 800, inProgress: 400 },
    { name: 'Pants', completed: 600, inProgress: 300 },
    { name: 'Dresses', completed: 400, inProgress: 200 },
    { name: 'Jackets', completed: 300, inProgress: 150 },
  ],
  monthly: [
    { name: 'T-Shirts', completed: 3500, inProgress: 1500 },
    { name: 'Pants', completed: 2500, inProgress: 1000 },
    { name: 'Dresses', completed: 2000, inProgress: 800 },
    { name: 'Jackets', completed: 1500, inProgress: 600 },
  ],
};

export function ProductionChart({ period }: { period: 'daily' | 'weekly' | 'monthly' }) {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data[period]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" fill="#8884d8" />
        <Bar dataKey="inProgress" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

