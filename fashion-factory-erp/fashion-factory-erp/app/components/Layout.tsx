'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Box, Package, BarChart3, Settings, LogOut } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, TranslationKey } from '../utils/translations';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { language } = useLanguage();

  const t = (key: TranslationKey) => translations[language][key];

  const navItems = [
    { href: '/', label: t('dashboard'), icon: Home },
    { href: '/production', label: t('production'), icon: Box },
    { href: '/products', label: t('products'), icon: Package },
    { href: '/warehouse', label: t('warehouse'), icon: BarChart3 },
  ];

  return (
    <div className={`flex h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <aside className="w-64 bg-primary text-white p-6">
        <div className="text-2xl font-bold mb-10">Egyptian Factory ERP</div>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`flex items-center space-x-2 p-2 rounded hover:bg-accent transition-colors ${
                    pathname === item.href ? 'bg-accent' : ''
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-6 left-6 space-y-2">
          <Link href="/settings" className="flex items-center space-x-2 p-2 rounded hover:bg-accent transition-colors">
            <Settings className="w-5 h-5" />
            <span>{t('settings')}</span>
          </Link>
          <button className="flex items-center space-x-2 p-2 rounded hover:bg-accent transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span>{t('logout')}</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;

