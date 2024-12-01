'use client'

import { useState } from 'react';
import Layout from './components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from './contexts/LanguageContext';
import { translations, TranslationKey } from './utils/translations';
import { OverviewChart } from './components/OverviewChart';
import { ProductionChart } from './components/ProductionChart';
import { InventoryChart } from './components/InventoryChart';
import { RevenueMetrics } from './components/RevenueMetrics';
import { TopProducts } from './components/TopProducts';
import { RecentOrders } from './components/RecentOrders';

export default function Home() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('dashboard')}</h1>
        <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <TabsList>
            <TabsTrigger value="daily">{t('daily')}</TabsTrigger>
            <TabsTrigger value="weekly">{t('weekly')}</TabsTrigger>
            <TabsTrigger value="monthly">{t('monthly')}</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <RevenueMetrics period={selectedPeriod} />
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>{t('overviewChart')}</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewChart period={selectedPeriod} />
          </CardContent>
        </Card>
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>{t('productionChart')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductionChart period={selectedPeriod} />
          </CardContent>
        </Card>
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>{t('inventoryChart')}</CardTitle>
          </CardHeader>
          <CardContent>
            <InventoryChart period={selectedPeriod} />
          </CardContent>
        </Card>
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>{t('topProducts')}</CardTitle>
          </CardHeader>
          <CardContent>
            <TopProducts period={selectedPeriod} />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{t('recentOrders')}</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentOrders />
        </CardContent>
      </Card>
    </Layout>
  );
}

