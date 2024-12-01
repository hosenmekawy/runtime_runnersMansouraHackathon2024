'use client'

import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const recentOrders = [
  { id: '1234', customer: 'Ahmed Hassan', product: 'Cotton T-Shirt', quantity: 2, total: '£E 60', status: 'completed' },
  { id: '1235', customer: 'Fatima Ali', product: 'Linen Pants', quantity: 1, total: '£E 70', status: 'processing' },
  { id: '1236', customer: 'Mohamed Salah', product: 'Silk Dress', quantity: 1, total: '£E 140', status: 'shipped' },
  { id: '1237', customer: 'Nour Ibrahim', product: 'Denim Jacket', quantity: 1, total: '£E 120', status: 'processing' },
  { id: '1238', customer: 'Laila Omar', product: 'Embroidered Scarf', quantity: 3, total: '£E 120', status: 'completed' },
];

export function RecentOrders() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t('orderId')}</TableHead>
          <TableHead>{t('customer')}</TableHead>
          <TableHead>{t('product')}</TableHead>
          <TableHead>{t('quantity')}</TableHead>
          <TableHead>{t('total')}</TableHead>
          <TableHead>{t('status')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>
              <Badge variant={
                order.status === 'completed' ? 'default' :
                order.status === 'processing' ? 'secondary' :
                'outline'
              }>
                {t(order.status as TranslationKey)}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

