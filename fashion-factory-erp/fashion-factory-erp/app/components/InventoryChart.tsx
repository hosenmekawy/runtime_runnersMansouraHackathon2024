'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'In Stock', value: 65 },
  { name: 'Low Stock', value: 25 },
  { name: 'Out of Stock', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function InventoryChart() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

