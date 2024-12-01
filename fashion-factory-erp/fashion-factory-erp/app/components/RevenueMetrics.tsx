'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const metrics = {
  daily: [
    { title: 'totalRevenue', value: '£E 12,345', change: 5.2 },
    { title: 'totalOrders', value: '156', change: -2.3 },
    { title: 'averageOrderValue', value: '£E 79.13', change: 3.1 },
    { title: 'conversionRate', value: '3.2%', change: 0.8 },
  ],
  weekly: [
    { title: 'totalRevenue', value: '£E 87,654', change: 7.5 },
    { title: 'totalOrders', value: '1,089', change: 4.2 },
    { title: 'averageOrderValue', value: '£E 80.49', change: 2.8 },
    { title: 'conversionRate', value: '3.5%', change: 1.2 },
  ],
  monthly: [
    { title: 'totalRevenue', value: '£E 345,678', change: 12.3 },
    { title: 'totalOrders', value: '4,567', change: 8.7 },
    { title: 'averageOrderValue', value: '£E 75.69', change: 3.5 },
    { title: 'conversionRate', value: '3.8%', change: 2.1 },
  ],
};

export function RevenueMetrics({ period }: { period: 'daily' | 'weekly' | 'monthly' }) {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <>
      {metrics[period].map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t(metric.title as TranslationKey)}
            </CardTitle>
            <div className={`text-sm font-medium ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change >= 0 ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
              {Math.abs(metric.change)}%
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

