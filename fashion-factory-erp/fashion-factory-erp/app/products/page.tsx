'use client'

import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';

export default function Products() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  const products = [
    { id: 1, name: 'Cotton T-Shirt', category: 'Tops', material: 'Egyptian Cotton', stock: 500 },
    { id: 2, name: 'Linen Pants', category: 'Bottoms', material: 'Linen', stock: 300 },
    { id: 3, name: 'Silk Dress', category: 'Full Body', material: 'Egyptian Silk', stock: 200 },
    { id: 4, name: 'Denim Jacket', category: 'Outerwear', material: 'Denim', stock: 150 },
    { id: 5, name: 'Embroidered Scarf', category: 'Accessories', material: 'Cotton Blend', stock: 250 },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{t('products')}</h1>
      <div className="flex justify-between items-center mb-6">
        <Input className="max-w-sm" placeholder={t('searchProducts')} />
        <Button>{t('addNewProduct')}</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{t('productCatalog')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('name')}</TableHead>
                <TableHead>{t('category')}</TableHead>
                <TableHead>{t('material')}</TableHead>
                <TableHead>{t('stock')}</TableHead>
                <TableHead>{t('action')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.material}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">{t('edit')}</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
}

