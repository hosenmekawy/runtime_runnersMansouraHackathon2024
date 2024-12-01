'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const topProducts = {
  daily: [
    { name: 'Cotton T-Shirt', sales: 45, revenue: '£E 1,350' },
    { name: 'Linen Pants', sales: 32, revenue: '£E 2,240' },
    { name: 'Silk Dress', sales: 28, revenue: '£E 3,920' },
    { name: 'Denim Jacket', sales: 24, revenue: '£E 2,880' },
    { name: 'Embroidered Scarf', sales: 20, revenue: '£E 800' },
  ],
  weekly: [
    { name: 'Cotton T-Shirt', sales: 315, revenue: '£E 9,450' },
    { name: 'Linen Pants', sales: 224, revenue: '£E 15,680' },
    { name: 'Silk Dress', sales: 196, revenue: '£E 27,440' },
    { name: 'Denim Jacket', sales: 168, revenue: '£E 20,160' },
    { name: 'Embroidered Scarf', sales: 140, revenue: '£E 5,600' },
  ],
  monthly: [
    { name: 'Cotton T-Shirt', sales: 1350, revenue: '£E 40,500' },
    { name: 'Linen Pants', sales: 960, revenue: '£E 67,200' },
    { name: 'Silk Dress', sales: 840, revenue: '£E 117,600' },
    { name: 'Denim Jacket', sales: 720, revenue: '£E 86,400' },
    { name: 'Embroidered Scarf', sales: 600, revenue: '£E 24,000' },
  ],
};

export function TopProducts({ period }: { period: 'daily' | 'weekly' | 'monthly' }) {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t('product')}</TableHead>
          <TableHead>{t('sales')}</TableHead>
          <TableHead>{t('revenue')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topProducts[period].map((product, index) => (
          <TableRow key={index}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.sales}</TableCell>
            <TableCell>{product.revenue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

