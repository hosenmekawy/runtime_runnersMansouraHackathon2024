'use client'

import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';

export default function Production() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  const productionStages = [
    { id: 1, stage: 'Raw Material Inspection', status: 'Completed', completion: 100 },
    { id: 2, stage: 'Fabric Cutting', status: 'In Progress', completion: 75 },
    { id: 3, stage: 'Sewing', status: 'In Progress', completion: 50 },
    { id: 4, stage: 'Embroidery', status: 'Pending', completion: 0 },
    { id: 5, stage: 'Quality Control', status: 'Not Started', completion: 0 },
    { id: 6, stage: 'Ironing and Pressing', status: 'Not Started', completion: 0 },
    { id: 7, stage: 'Packaging', status: 'Not Started', completion: 0 },
    { id: 8, stage: 'Final Inspection', status: 'Not Started', completion: 0 },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{t('production')}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t('productionStages')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('stage')}</TableHead>
                <TableHead>{t('status')}</TableHead>
                <TableHead>{t('completion')}</TableHead>
                <TableHead>{t('action')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productionStages.map((stage) => (
                <TableRow key={stage.id}>
                  <TableCell className="font-medium">{stage.stage}</TableCell>
                  <TableCell>
                    <Badge variant={
                      stage.status === 'Completed' ? 'default' :
                      stage.status === 'In Progress' ? 'secondary' :
                      'outline'
                    }>
                      {stage.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${stage.completion}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{stage.completion}%</span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">{t('update')}</Button>
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

