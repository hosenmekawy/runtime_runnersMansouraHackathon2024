'use client'

import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';

export default function Settings() {
  const { language, setLanguage } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{t('settings')}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t('language')}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue={language} onValueChange={(value) => setLanguage(value as 'en' | 'ar')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="en" />
              <Label htmlFor="en">{t('english')}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ar" id="ar" />
              <Label htmlFor="ar">{t('arabic')}</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </Layout>
  );
}

